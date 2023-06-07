"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const get_poems_list_1 = require("./api/poems/get-poems-list");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("Express Server");
});
app.get("/poems/:author", get_poems_list_1.getPoemsListController);
app.get("/poem-text/:url", get_poems_list_1.getPoemTextController);
// saadiPoemsInPersian();
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at 
http://localhost:${port}`);
});
exports.default = app;
