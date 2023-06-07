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
exports.getErrorText = void 0;
const isErrorScreen = (page) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, exports.getErrorText)()
        .then(() => true)
        .catch(() => false);
});
const getErrorText = (page) => __awaiter(void 0, void 0, void 0, function* () {
    return yield page
        .waitForXPath('//*[contains(text(), "Your estimated wait time")]', {
        timeout: 10000,
    })
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        if (queueText !== null) {
            const estimatedTimeText = yield queueText.evaluate((el) => el.innerHTML);
            return estimatedTimeText;
        }
    }))
        .catch((e) => new Error());
});
exports.getErrorText = getErrorText;
exports.default = isErrorScreen;
