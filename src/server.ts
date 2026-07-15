import exprss from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import helmet from "helmet";
import mainRouter from "./routes/index";

dotenv.config();
const server = exprss();
server.use(helmet());
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(exprss.static(path.join(__dirname, "../public")));

server.use(mainRouter);

server.use((req, res) => {
  res.send("pagina não encontrada." );
});

server.listen(process.env.PORT);
