import { traineeModel } from "../models/trainee.model";
async function getAllTrainee() {
  const allTrainee = await traineeModel.find();
  return allTrainee;
}

export { getAllTrainee };
