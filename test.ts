import { OpenAIEmbeddings } from '@langchain/openai';
const embeddings = new OpenAIEmbeddings({
  apiKey: process.env.OPENAI_API_KEY,
  batchSize: 512, // Default value if omitted is 512. Max is 2048
  model: 'text-embedding-3-small',
});
const vector = embeddings.embedQuery('My name is Tuan').then((data) => {
  console.log(data.length);
});
// console.log(vector);
