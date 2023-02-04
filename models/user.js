const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    nom: { type: String, required: true },
    prénom: { type: String, required: true },
    actif: { type: String  },
    datecréation: { type: String },
})
let User = mongoose.model('user', UserSchema);

module.exports = { User };