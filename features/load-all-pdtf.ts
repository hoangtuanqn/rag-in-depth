import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { TextLoader } from "@langchain/classic/document_loaders/fs/text"
import fg from "fast-glob";

export const loadAllPDFs = async (folderPath: string) => {
    const paths = await fg(`${folderPath}/**/*.{pdf,txt}`);
    console.log("Found files:", paths.length);

    const allDocPdfs = [];
    for(const path of paths) {
        let loader;
        if(path.endsWith(".pdf")) {
            loader = new PDFLoader(path);
        } else if(path.endsWith(".txt")) {
            loader = new TextLoader(path);
        } else {
            continue;
        }


        const docs = await loader.load();

        const enchired = docs.map(doc => ({
            ...doc,
            metadata: {
                ...doc.metadata,
                source: path
            }
        }));
        // console.log(enchired);
        allDocPdfs.push(...enchired);
    }

    return allDocPdfs;

}
