// Conexion a la base de datos
import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://dukejmono:duke10245L@cluster0.dvmm5.mongodb.net/DemoVet?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((db) => console.log("Db is connected"))
  .catch((erro) => console.log(error));
