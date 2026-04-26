import { FaissStore } from '@langchain/community/vectorstores/faiss';
import { OpenAIEmbeddings } from '@langchain/openai';
const normalize = (vec: number[]) => {
  const norm = Math.sqrt(vec.reduce((s, x) => s + x * x, 0));
  return vec.map((x) => x / norm);
};
export const buildVectorStore = async (chunks: any[]) => {
  const embeddings = new OpenAIEmbeddings({
    apiKey: process.env.OPENAI_API_KEY,
    batchSize: 512, // Default value if omitted is 512. Max is 2048
    model: 'text-embedding-3-small',
  });
  const originalEmbed = embeddings.embedDocuments.bind(embeddings);
  embeddings.embedDocuments = async (texts) => {
    const vectors = await originalEmbed(texts);
    return vectors.map(normalize);
  };
  const vectorStore = await FaissStore.fromDocuments(chunks, embeddings);
  await vectorStore.save('./vectorstore'); // persist ra disk
  console.log('VectorStore saved');
  return vectorStore;
};
