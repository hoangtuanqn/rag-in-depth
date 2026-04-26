import { FaissStore } from '@langchain/community/vectorstores/faiss';
import { OpenAIEmbeddings } from '@langchain/openai';

const normalize = (vec: number[]): number[] => {
  const norm = Math.sqrt(vec.reduce((s, x) => s + x * x, 0));
  if (norm === 0) return vec; // tránh chia cho 0
  return vec.map((x) => x / norm);
};

const patchEmbeddings = (embeddings: OpenAIEmbeddings): OpenAIEmbeddings => {
  const originalEmbedDocuments = embeddings.embedDocuments.bind(embeddings);
  const originalEmbedQuery = embeddings.embedQuery.bind(embeddings);

  // từ document lấy ra
  embeddings.embedDocuments = async (texts: string[]) => {
    const vectors = await originalEmbedDocuments(texts);
    return vectors.map(normalize);
  };

  // người dùng search
  embeddings.embedQuery = async (text: string) => {
    const vector = await originalEmbedQuery(text);
    return normalize(vector);
  };

  return embeddings;
};

// function cần sử dụng
export const buildVectorStore = async (chunks: any[]) => {
  const embeddings = patchEmbeddings(
    new OpenAIEmbeddings({
      apiKey: process.env.OPENAI_API_KEY,
      batchSize: 512,
      model: 'text-embedding-3-small',
    }),
  );

  const vectorStore = await FaissStore.fromDocuments(chunks, embeddings);
  await vectorStore.save('./vectorstore');
  console.log('VectorStore saved');
  return vectorStore;
};
