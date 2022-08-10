import express from "express";

/**
* importando a var de rotas do script users.routes.ts(dentro da pasta routes)
* essa [e a forma de importar as rotas da pasta scr/routes
*/
import { usersRoutes } from "./routes/users.routes";


const app = express();

app.use(express.json()); // metodo para usar json em requests 

/* ===========================================================
/*              Rotas vindas de routes 
/* ===========================================================*/
app.use("/users", usersRoutes); // importei o user routes 

app.listen(3333, () => console.log("Server is running!"));
