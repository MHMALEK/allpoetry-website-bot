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
const headless_browser_1 = __importDefault(require("../../../services/headless-browser"));
class HeadLessBrowser {
    constructor() {
        this.createBrowser();
    }
    createBrowser() {
        return __awaiter(this, void 0, void 0, function* () {
            this.browser = yield headless_browser_1.default.create();
            this.page = yield this.browser.newPage();
        });
    }
    actionsLogin() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            (_a = this.page) === null || _a === void 0 ? void 0 : _a.goto(process.env.ALLPOETRY_BASE_URL);
        });
    }
}
const PoemAPICrawler = new HeadLessBrowser();
const getPoemsListController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const headlessBrowser = await browser.create();
    //   const page = await headlessBrowser.newPage();
    // Navigate to the login page
    //   await page.goto(process.env.ALLPOETRY_BASE_URL as string);
    //   await loginAction(page);
    PoemAPICrawler.actionsLogin();
});
exports.default = getPoemsListController;
