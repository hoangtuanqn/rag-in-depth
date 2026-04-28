import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
const MARKDOWN_SEPARATORS = ['\n#{1,6} ', '```\n', '\n\\*\\*\\*+\\n', '\n---+\n', '\n___+\n', '\n\n', '\n', ' ', ''];
export const splitDocument = async (docs: any[]) => {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1200, // số ký tự mỗi chunk
    chunkOverlap: 200, // overlap giữa các chunk để không mất context
    separators: MARKDOWN_SEPARATORS,
  });
  const chunks = await splitter.splitDocuments(docs);

  //  console.log(`Split into ${chunks.length} chunks`);
  // for (const chunk of chunks) {
  //   console.log('----------------------');
  //   console.log('Content:', chunk.pageContent);
  // }

  return chunks;
};
