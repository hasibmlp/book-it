import mongoose from "mongoose";

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
});

export default mongoose.models.Room || mongoose.model("Room", roomSchema);
