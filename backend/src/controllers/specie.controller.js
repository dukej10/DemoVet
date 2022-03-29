import Specie from "../models/specie";
export const createSpecie = async (req, res) => {
  const { name, code } = req.body;
  const newSpecie = new Specie({
    name,
    code,
  });
  const SpecieSave = await newSpecie.save();
  res.status(201).json(SpecieSave);
};

export const getSpecies = async (req, res) => {
  const Species = await Specie.find();
  res.json(Species);
};

export const getSpecieById = async (req, res) => {
  const { specieId } = req.params;
  console.log("ID", specieId);
  const Speciecut = await Specie.findById(specieId);
  res.status(200).json(Speciecut);
};

export const updateSpecieById = async (req, res) => {
  const { specieId } = req.params;
  const updatedSpecie = await Specie.findByIdAndUpdate(specieId, req.body); //devuelve como estaba antes
  res.status(200).json(updatedSpecie);
};

export const deleteSpecieById = async (req, res) => {
  const { specieId } = req.params;
  console.log("llegó", specieId);
  const deletedSpecie = await Specie.findByIdAndDelete(specieId);
  res.status(200).json(deletedSpecie);
};
