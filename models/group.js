const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    nom: { type: String, required: true },
})
let Group = mongoose.model('group', GroupSchema);

module.exports = { Group };