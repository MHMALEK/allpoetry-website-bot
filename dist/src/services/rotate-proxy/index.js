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
exports.getProxyFromRotatingProxyServer = void 0;
const request = require("request-promise");
const getProxyFromRotatingProxyServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const proxy = yield request({
        url: "http://ipv4.webshare.io/",
        proxy: "http://jkwivzej-rotate:yf18u54hfjfx@p.webshare.io:80",
    });
    return proxy;
});
exports.getProxyFromRotatingProxyServer = getProxyFromRotatingProxyServer;
const handleProxyForPuppeteer = ({}) => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer.launch(Object.assign(Object.assign({}, options), { args: [...options.args, "--proxy-server=http://p.webshare.io:80"] }));
    const page = yield browser.newPage();
    yield page.authenticate({
        username: process.env.ROTATE_PROXY_USER,
        password: process.env.ROTATE_PROXY_PASSWORD,
    });
    return browser;
});
exports.default = handleProxyForPuppeteer;
