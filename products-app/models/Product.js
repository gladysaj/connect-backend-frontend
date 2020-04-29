const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema ({
  name: {
    type: String,
    required: [true, "Debes agregar un nombre de producto"],
  },
  price: {
    type: Number,
    min: [1, "El precio es muy bajo"],
  },
  image: {
    type: String,
    required: [true, "Agrega una imagen para el producto"],
  },
    description: {
      type: String,
      required: [true, "Debes agregar una descripción de producto"],
  }, 
  seller: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please indicate seller"],
  },
},
  { timestamp: true }
);

module.exports = mongoose.model("Product", productSchema);

