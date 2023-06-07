"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fillLoginForm = (page, captchResolved) => __awaiter(void 0, void 0, void 0, function* () {
    function getRandomItem(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    let user;
    const users = yield axios_1.default.get(`${process.env.VFS_REGISTERATION_BOT}/users/verified`);
    console.log("ssdasdasdasdsadsad", users);
    if (users.data.length > 0) {
        console.log("asdsadsadasdasdsad");
        user = getRandomItem(users.data).data.username;
        console.log("asdsadsadasdasdsad", user, getRandomItem(users.data));
    }
    yield page.type("#EmailId", user || process.env.VFS_USER_NAME);
    yield page.type("#Password", process.env.VFS_PASSWORD);
    yield page.type("#CaptchaInputText", captchResolved.toUpperCase());
});
exports.default = fillLoginForm;
