const mongoose = require('mongoose')
const categoriesSchema = new mongoose.Schema({
    thumbnail: String,
    categoryName: String,
    photos: Array,

})
module.exports = mongoose.models.categories || mongoose.model("categories", categoriesSchema);