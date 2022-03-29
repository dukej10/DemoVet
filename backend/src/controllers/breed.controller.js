import Breed from "../models/breed";
export const createBreed = async (req, res) => {
  const { code, name } = req.body;
  const newBreed = new Breed({
    code,
    name,
  });
  const BreedSave = await newBreed.save();
  res.status(201).json(BreedSave);
};

export const getBreeds = async (req, res) => {
  const Breeds = await Breed.find();
  res.json(Breeds);
};

export const getBreedById = async (req, res) => {
  const { breedId } = req.params;
  console.log("ID", breedId);
  const Breedcut = await Breed.findById(breedId);
  res.status(200).json(Breedcut);
};

export const updateBreedById = async (req, res) => {
  const { breedId } = req.params;
  const updatedBreed = await Breed.findByIdAndUpdate(breedId, req.body); //devuelve como estaba antes
  res.status(200).json(updatedBreed);
};

export const deleteBreedById = async (req, res) => {
  const { breedId } = req.params;
  console.log("llegó", breedId);
  const deletedBreed = await Breed.findByIdAndDelete(breedId);
  res.status(200).json(deletedBreed);
};
