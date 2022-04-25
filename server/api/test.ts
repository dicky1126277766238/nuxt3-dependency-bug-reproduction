import {MongoClient} from "mongodb";
import {defineEventHandler} from "h3";
import {setLogFunction} from "@google-cloud/firestore";

// this setup resulted in packing whatwg-url@^5.0.0 in .output/server/node_modules/whatwg-url
export default defineEventHandler(async (event) => {
     // dummy call to import @google-cloud/firestore -> google-gax -> node-fetch@^2.6.1 -> whatwg-url@^5.0.0
    setLogFunction(()=>{})

    // import mongodb -> mongodb-connection-string-url -> whatwg-url@^11.0.0
    new MongoClient("mongodb://username:password@localhost/db") // throw error since it is using URL.searchParams which exists in whatwg-url@^11.0.0 but not whatwg-url@^5.0.0
    return {}
})
