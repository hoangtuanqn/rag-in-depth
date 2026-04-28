import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { TextLoader } from '@langchain/classic/document_loaders/fs/text';
import fg from 'fast-glob';

export const loadAllPDFs = async (folderPath: string) => {
  const paths = await fg(`${folderPath}/**/*.{pdf,txt,md}`);

  const allDocPdfs = [];
  for (const path of paths) {
    let loader;
    if (path.endsWith('.pdf')) {
      loader = new PDFLoader(path);
    } else if (path.endsWith('.txt') || path.endsWith('.md')) {
      loader = new TextLoader(path);
    } else {
      continue;
    }

    const docs = await loader.load();
    const enchired = docs.map((doc) => ({
      ...doc,
      metadata: {
        source: path,
        page: doc.metadata?.loc?.pageNumber ?? null,
      },
    }));
    // console.log(enchired);
    allDocPdfs.push(...enchired);
  }

  return allDocPdfs;
};
