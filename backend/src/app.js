// configurar aplicacion express

import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
// import routes
import breedRoutes from "./routes/breed.routes";
import specieRoutes from "./routes/specie.routes";
const app = express();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json()); //Entender los datos en formato JSON

// Cuando se visita la ruta inicial
app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: "DevsWorld",
    version: app.get("pkg").version,
  });
});

//Routes
app.use("/api/breeds", breedRoutes);
app.use("/api/species", specieRoutes);
export default app;
