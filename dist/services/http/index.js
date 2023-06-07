"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_1 = __importDefault(require("../../utils/http-client"));
const HttpClientService = new http_client_1.default(process.env.ALLPOETRY_BASE_URL);
exports.default = HttpClientService;
