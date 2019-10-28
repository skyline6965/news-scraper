// set up mongoose
var mongoose = require("mongoose");

// save to schema constructor
var Schema = mongoose.Schema;

// new userschema 
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "note"
    }
});

// 
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;