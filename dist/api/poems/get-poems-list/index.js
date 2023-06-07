"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getPoemTextController = exports.getPoemsListController = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const headless_browser_1 = __importDefault(require("../../../services/headless-browser"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class HeadLessBrowser {
    createBrowser() {
        return __awaiter(this, void 0, void 0, function* () {
            this.browser = yield headless_browser_1.default.create();
            this.page = yield this.browser.newPage();
            return true;
        });
    }
    actionsLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const loginUrl = `${process.env.ALLPOETRY_BASE_URL}/login`;
                console.log("malekkk", loginUrl);
                //   await page.goto(loginUrl);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
// const PoemAPICrawler = new HeadLessBrowser();
const getPoemsListController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const author = req.params.author;
    const browser = yield puppeteer_1.default.launch({
        headless: true,
    });
    const page = yield browser.newPage();
    const loginUrl = `${process.env.ALLPOETRY_BASE_URL}/login`;
    // Navigate to the login page
    yield page.goto(loginUrl);
    // Fill in the login form and submit
    yield page.type("#user_name", "mhos.malek@gmail.com");
    yield page.type("#user_password", "Haavin1993!");
    yield page.click("#new_user > div:nth-child(7) > div.media-body > input");
    // Wait for navigation to complete
    yield page.waitForNavigation();
    // Scrape the hafez page
    yield page.goto(`${process.env.ALLPOETRY_BASE_URL}/${author}`);
    const elements = yield page.$x("/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/form/div[1]/a[2]");
    if (elements.length > 0) {
        // @ts-ignore
        yield elements[0].click();
    }
    const xpathExpression = "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[4]/ul/li/a";
    yield page.waitForXPath(xpathExpression, { visible: true });
    const elementss = yield page.$x(xpathExpression);
    const links = yield Promise.all(elementss.map((element) => __awaiter(void 0, void 0, void 0, function* () {
        // @ts-ignore
        const href = yield page.evaluate((el) => el.href, element);
        const text = yield page.evaluate((el) => el.textContent, element);
        return { href, text };
    })));
    res.json(links);
});
exports.getPoemsListController = getPoemsListController;
const getPoemTextController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const poemUrl = req.params.url || "14372437-Absolutely-Clear-by-Hafez-Shirazi";
    const browser = yield puppeteer_1.default.launch({
        headless: true,
    });
    const page = yield browser.newPage();
    const poemPageUrl = `${process.env.ALLPOETRY_BASE_URL}/poem/${poemUrl}`;
    yield page.goto(poemPageUrl);
    const poem = yield page.evaluate(() => {
        let poemDiv = document.querySelector(".poem_body > div:nth-child(2)");
        // Remove HTML tags using a regular expression
        let poemText = poemDiv === null || poemDiv === void 0 ? void 0 : poemDiv.innerHTML.replace(/<[^>]*>/g, "");
        return poemText;
    });
    res.json({ poem: poem });
});
exports.getPoemTextController = getPoemTextController;
