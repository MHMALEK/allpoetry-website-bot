import { Request, Response } from "express";
import puppeteer, { Browser, Page } from "puppeteer";
import browser from "../../../services/headless-browser";
import * as dotenv from "dotenv";
dotenv.config();

class HeadLessBrowser {
  browser: Browser | undefined;
  page: Page | undefined;

  async createBrowser() {
    this.browser = await browser.create();
    this.page = await this.browser.newPage();
    return true;
  }

  async actionsLogin() {
    try {
      const loginUrl = `${process.env.ALLPOETRY_BASE_URL as string}/login`;
      console.log("malekkk", loginUrl);

      //   await page.goto(loginUrl);
    } catch (e) {
      console.log(e);
    }
  }
}

// const PoemAPICrawler = new HeadLessBrowser();

const getPoemsListController = async (req: Request, res: Response) => {
  const author = req.params.author;
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  const loginUrl = `${process.env.ALLPOETRY_BASE_URL as string}/login`;
  // Navigate to the login page
  await page.goto(loginUrl);
  // Fill in the login form and submit
  await page.type("#user_name", "mhos.malek@gmail.com");
  await page.type("#user_password", "Haavin1993!");
  await page.click("#new_user > div:nth-child(7) > div.media-body > input");

  // Wait for navigation to complete
  await page.waitForNavigation();

  // Scrape the hafez page

  await page.goto(`${process.env.ALLPOETRY_BASE_URL as string}/${author}`);

  const elements = await page.$x(
    "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/form/div[1]/a[2]"
  );

  if (elements.length > 0) {
    // @ts-ignore
    await elements[0].click();
  }

  const xpathExpression =
    "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[4]/ul/li/a";
  await page.waitForXPath(xpathExpression, { visible: true });
  const elementss = await page.$x(xpathExpression);

  const links = await Promise.all(
    elementss.map(async (element) => {
      // @ts-ignore
      const href = await page.evaluate((el) => el.href, element);
      const text = await page.evaluate((el) => el.textContent, element);
      return { href, text };
    })
  );

  res.json(links);
};

const getPoemTextController = async (req: Request, res: Response) => {
  const poemUrl =
    req.params.url || "14372437-Absolutely-Clear-by-Hafez-Shirazi";
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  const poemPageUrl = `${
    process.env.ALLPOETRY_BASE_URL as string
  }/poem/${poemUrl}`;

  await page.goto(poemPageUrl);

  const poem = await page.evaluate(() => {
    let poemDiv = document.querySelector(".poem_body > div:nth-child(2)");
    // Remove HTML tags using a regular expression
    let poemText = poemDiv?.innerHTML.replace(/<[^>]*>/g, "");
    return poemText;
  });

  res.json({ poem: poem });
};

export { getPoemsListController, getPoemTextController };
