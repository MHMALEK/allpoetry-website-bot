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
exports.selectVisaCategoryDropwdown = exports.selectLogOutButton = exports.selectLocationIdDropdown = exports.selectScheduleMenuItem = exports.selectCaptchaImage = void 0;
const selectCaptchaImage = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const encoding = "base64";
    const captchaScreenShotConfig = {
        encoding,
    };
    yield page.waitForSelector("#CaptchaImage", { timeout: 180000 });
    const captchImage = yield page.$("#CaptchaImage");
    const captchaImageBase64ScreenShot = yield captchImage.screenshot(captchaScreenShotConfig);
    return captchaImageBase64ScreenShot;
});
exports.selectCaptchaImage = selectCaptchaImage;
const selectScheduleMenuItem = (page) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield page.$("#Accordion1 > div > div.AccordionPanelContent > div > ul > li:nth-child(2) > a");
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.selectScheduleMenuItem = selectScheduleMenuItem;
const selectLocationIdDropdown = () => "select[name='LocationId']";
exports.selectLocationIdDropdown = selectLocationIdDropdown;
const selectVisaCategoryDropwdown = () => "select[name='VisaCategoryId']";
exports.selectVisaCategoryDropwdown = selectVisaCategoryDropwdown;
const selectLogOutButton = (page) => "#logoutForm  > a > span";
exports.selectLogOutButton = selectLogOutButton;
