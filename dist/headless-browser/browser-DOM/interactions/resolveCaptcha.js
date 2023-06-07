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
exports.resolveCaptcha = void 0;
const selectors_1 = require("../selectors");
const captcha_resolver_1 = require("../../../captcha-resolver");
const resolveCaptcha = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const captchaBase64 = yield (0, selectors_1.selectCaptchaImage)(page);
    console.log('99999', captchaBase64);
    const captchResolved = yield (0, captcha_resolver_1.resolveCaptchaService)(captchaBase64);
    console.log('100000', captchResolved);
    return captchResolved;
});
exports.resolveCaptcha = resolveCaptcha;
