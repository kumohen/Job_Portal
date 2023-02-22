
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const applicantSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  applitype:{
    type: String,
    required: true
  },

  profileImage: {
    type: String,
  },



}, { timestamps: true });

module.exports = mongoose.model("Applicant", applicantSchema);
