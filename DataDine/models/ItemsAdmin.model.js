const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema(
    {
        itemName: String,


        itemPrice: Number,


        itemDescription: String,


        itemImageURL: String,


        itemCategory: String,


    },
    {
        timestamps: true,
    }
    );
const Item = mongoose.model("Item", itemSchema);
module.exports = Item;

