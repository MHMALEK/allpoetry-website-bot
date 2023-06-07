import puppeteerss, { Browser } from "puppeteer";
import puppeteerConfig from "./config";

// with stealth to trick vfs to not recongnize the bot
const puppeteer = require("puppeteer-extra");

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const create = async ({ headless, args } = puppeteerConfig) => {
  let browser: Browser;

  browser = await puppeteer.launch({
    headless: false,
    args,
  });

  return browser;
};

const browser = {
  create,
};

export default browser;
