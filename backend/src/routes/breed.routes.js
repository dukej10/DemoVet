import { Router } from "express";
const router = Router();

//Controllers;
import * as breeds from "../controllers/breed.controller";

//Rutas
router.get("/", breeds.getBreeds);
router.post("/", breeds.createBreed);
router.get("/:breedId", breeds.getBreedById);
router.put("/:breedId", breeds.updateBreedById);
router.delete("/:breedId", breeds.deleteBreedById);

export default router;
