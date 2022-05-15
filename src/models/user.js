const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    displayName: String,

})
module.exports = mongoose.models.user || mongoose.model("user", userSchema);