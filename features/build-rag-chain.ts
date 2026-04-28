import { Chroma } from '@langchain/community/vectorstores/chroma';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { RunnablePassthrough, RunnableSequence } from '@langchain/core/runnables';
import { ChatOpenAI } from '@langchain/openai';
const formatDocs = (docs: any[]) => docs.map((d) => d.pageContent).join('\n\n---\n\n');
export const buildRagChain = (vectorStore: Chroma) => {
  const retriever = vectorStore.asRetriever({
    k: 5,
  });
  const llm = new ChatOpenAI({
    model: 'gpt-4o-mini',
    temperature: 0,
    maxTokens: undefined,
    timeout: undefined,
    maxRetries: 2,
    apiKey: process.env.OPENAI_API_KEY,
  });
  const prompt = ChatPromptTemplate.fromTemplate(`
      Bạn là trợ lý nghiêm ngặt, tập trung vào trích dẫn nguồn cho một knowledge base nội bộ.

      QUY TẮC:
      1) Chỉ sử dụng context được cung cấp để trả lời.
      2) Nếu câu trả lời không có trong context, hãy nói: "Xin lỗi, tôi không biết vấn đề này!"
      3) KHÔNG sử dụng kiến thức bên ngoài, đoán mò, hoặc thông tin từ internet.
      4) Nếu có thể, hãy trích dẫn nguồn theo định dạng (nguồn:trang) sử dụng metadata.

      Context:
      {context}

      Câu hỏi: {question}
  `);

  return RunnableSequence.from([
    {
      context: retriever.pipe(formatDocs),
      question: new RunnablePassthrough(),
    },
    prompt,
    llm,
    new StringOutputParser(),
  ]);
};
