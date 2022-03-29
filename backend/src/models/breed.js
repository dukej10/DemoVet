import { Schema, model } from "mongoose";
const breedSchema = new Schema(
  {
    code: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true, //fecha de creación y última actualización
    versionKey: false,
  }
);

export default model("Breed", breedSchema);
