"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserAgent = require("user-agents");
const randomUserAgent = new UserAgent();
console.log(process.env.NODE_ENV, "process.env.NODE_ENV");
console.log(";randomUserAgent", randomUserAgent.data.userAgent);
const puppeteerConfig = {
    headless: process.env.NODE_ENV != "production" ? false : true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
};
exports.default = puppeteerConfig;
