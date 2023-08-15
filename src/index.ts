import express, { Request, Response, json, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";

import bookRouter from "./routes/book-router";

const app: express.Application = express();
const port: number = 8080;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/books", bookRouter);

app.listen(port, () => {
  console.log(`App is listening on port ${port}! \n`);
});
