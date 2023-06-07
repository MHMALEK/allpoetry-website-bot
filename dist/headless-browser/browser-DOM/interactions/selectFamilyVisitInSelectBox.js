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
exports.selectFamilyVisitInSelectBox = void 0;
const selectors_1 = require("../selectors");
const selectFamilyVisitInSelectBox = (page) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scheduleMenuItem = yield (0, selectors_1.selectScheduleMenuItem)(page);
        return yield Promise.all([
            scheduleMenuItem.click(),
            page.waitForNavigation({ waitUntil: "networkidle2" }),
        ]);
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.selectFamilyVisitInSelectBox = selectFamilyVisitInSelectBox;
