import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {
  getPoemsListController,
  getPoemTextController,
} from "./api/poems/get-poems-list";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express Server");
});

app.get("/poems/:author", getPoemsListController);
app.get("/poem-text/:url", getPoemTextController);

// saadiPoemsInPersian();

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at 
http://localhost:${port}`);
});

export default app;
