const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    companyName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("authSchema", authSchema);