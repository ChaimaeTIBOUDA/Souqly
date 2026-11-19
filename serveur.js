import http from "node:http";
import { app } from "./app.js";

const serveur = http.createServer(app);

serveur.listen(3000, () => {
  console.log("Souqly écoute sur http://localhost:3000");
});