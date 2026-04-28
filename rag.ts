import { buildRagChain } from './features/build-rag-chain';
import { buildVectorStore } from './features/build-vector-store';
import { loadAllPDFs } from './features/load-all-pdtf';
import { splitDocument } from './features/slipt-document';
import * as readline from 'readline';

const SHOULD_INDEX = true;

const main = async () => {
  let vectorStore;

  if (SHOULD_INDEX) {
    const docs = await loadAllPDFs('./papers');
    const chunks = await splitDocument(docs);
    vectorStore = await buildVectorStore(chunks);
  } else {
    vectorStore = await buildVectorStore();
  }

  const chain = buildRagChain(vectorStore);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = () => {
    rl.question('\nCâu hỏi (q để thoát): ', async (question) => {
      if (question === 'q') return rl.close();

      const answer = await chain.invoke(question);
      console.log('\nTrả lời:', answer);

      ask();
    });
  };

  ask();
};

main();
