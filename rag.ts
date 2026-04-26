import { loadAllPDFs } from "./features/load-all-pdtf";
import { splitDocument } from "./features/slipt-document";



const main = async () => {
    const docs = await loadAllPDFs('./papers');
    const chunks = await splitDocument(docs);
}

main();
