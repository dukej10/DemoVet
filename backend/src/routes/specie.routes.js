import { Router } from "express";
const router = Router();

//Controllers;
import * as species from "../controllers/specie.controller";

//Rutas
router.get("/", species.getSpecies);
router.post("/", species.createSpecie);
router.get("/:specieId", species.getSpecieById);
router.put("/:specieId", species.updateSpecieById);
router.delete("/:specieId", species.deleteSpecieById);

export default router;
