import { Page } from "puppeteer";
import createUserAgent from "./create";

const cerateAndSetRandomUserAgent = async (page: Page) => {
  const userAgent = createUserAgent();
  await page.setUserAgent(userAgent);
};

export default cerateAndSetRandomUserAgent;
