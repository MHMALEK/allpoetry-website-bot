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
Object.defineProperty(exports, "__esModule", { value: true });
exports.goToLoginPage = void 0;
const goToLoginPage = (page) => __awaiter(void 0, void 0, void 0, function* () {
    // go to login page
    try {
        return yield page.goto(process.env.VFS_BASE_URL, {
            waitUntil: "load",
            timeout: 0,
        });
    }
    catch (e) {
        console.log("vvvvv", e);
    }
});
exports.goToLoginPage = goToLoginPage;
