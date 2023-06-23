const mongodb = require('mongodb');

async function dbConnect(){
    const mdbPassword = 'L1jyeVOewk6o7ZoX';
    const mdbUser = 'lsimonidev'; 

    const uri = `mongodb+srv://${mdbUser}:${mdbPassword}@personal.bvccypn.mongodb.net/?retryWrites=true&w=majority`;

    return await mongodb.MongoClient.connect(uri, {useNewUrlParser: true});
}
module.exports.dbConnect = dbConnect;