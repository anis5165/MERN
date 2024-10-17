const {Schema, model} = require('../connection');
const productSchema = new Schema({
    name : String,
    brand : String,
    MRP : String,
    description : String
});
module.exports = model('product' , productSchema);