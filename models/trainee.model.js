import mongoose, { Schema } from "mongoose";

const traineeSchema = new Schema({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  fullName: {
    required: true,
    type: String,
  },
});

export const traineeModel =
  mongoose.models.traineedata || mongoose.models("traineedata", traineeSchema);
