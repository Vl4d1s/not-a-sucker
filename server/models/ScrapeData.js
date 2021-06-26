const mongoose = require("mongoose");
const CallSchema = new mongoose.Schema({
  searchKey: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  data: [
    {
      title: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = ScrapeData = mongoose.model("ScrapeData", CallSchema);
