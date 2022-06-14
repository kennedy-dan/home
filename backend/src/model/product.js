const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  quantity: {
    type: String,
    required: true
  },
  price: {
      type: Number,
      required: true,
  },
  description: {
      type: String,
      required: true
  },
  offer: {
      type: Number,
  },
  images: [
    {
      public_id: {
        type: String,
        // required: true,
      },
      url: {
        type: String,
        // required: true,
      },
    },
  ],
  reviews: [
      {
          userId: {type :mongoose.Schema.Types.ObjectId, ref: 'User'}
      }
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Category'
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
  },
  updateAt: Date
}, {timestamps: true});

module.exports = mongoose.model("Product", productSchema);
