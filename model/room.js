const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter room name:"],
    trim: true,
    maxLength: [100, "room name cannot exceed 100 characters "],
  },
  price: {
    type: Number,
    required: [true, "please enter room price"],
    maxLength: [4, "enter more than 4 digits"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "enter about room"],
  },
  address: {
    type: String,
    required: [true, "enter room address"],
  },
  guestCapacity: {
    type: Number,
    required: [true, "enter room guest capacity"],
  },
  numOfBeds: {
    type: Number,
    required: [true, "enter room no. of beds"],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airConditioned: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  roomReview: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "enter room catogory"],
    enum: {
      values: ["king", "single", "twins"],
      message: "select category for room ",
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Room || mongoose.model("Room", roomSchema);
