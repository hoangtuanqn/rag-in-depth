import { Chroma } from '@langchain/community/vectorstores/chroma';
import { OpenAIEmbeddings } from '@langchain/openai';

// embedding chuẩn (KHÔNG normalize)
const embeddings = new OpenAIEmbeddings({
  apiKey: process.env.OPENAI_API_KEY,
  batchSize: 512,
  model: 'text-embedding-3-small',
});

// main
export const buildVectorStore = async (chunks?: any[]) => {
  console.log(chunks);

  const vectorStore = new Chroma(embeddings, {
    host: 'localhost',
    port: 8000,
    collectionName: 'rag-collection',
  });

  // chỉ index khi có data truyền vào
  if (chunks && chunks.length > 0) {
    console.log('📥 Indexing documents into Chroma...');
    await vectorStore.addDocuments(chunks);
    console.log('✅ Index done');
  } else {
    console.log('🔌 Connected to existing Chroma collection');
  }

  return vectorStore;
};
