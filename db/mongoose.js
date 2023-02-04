
const mongoose = require('mongoose');
     const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://user:h57AwWzrplrtXWce@cluster0.ut6h2.mongodb.net/?retryWrites=true&w=majority"     
const MONGODB_OPTIONS = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(MONGODB_URI, MONGODB_OPTIONS)
    .then(() => console.log("we're connected to Database !"))
    .catch(() => console.log("connection error !"))

module.exports = mongoose;