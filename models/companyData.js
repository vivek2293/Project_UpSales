const mongoose = require("mongoose");

const companyData = new mongoose.Schema({
    companyName:{
        type: String,
        required: true,
        unique: false,
    },
    maincompanyData: {
        // required: true,
        type: Object,
        itemName:{
            type: String,
            required: true,
        },
        modelNumber:{
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: true,
        },
        quantity:{
            type: Number,
            required: true,
        },
        priceperItem:{
            type: Number,
            required: true,
        },
        total:{
            type: Number,
            required: +true,
        }
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("companyData", companyData);