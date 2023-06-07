"use strict";
// Create random user-agent to be set through plugin
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_agents_1 = __importDefault(require("user-agents"));
const createUserAgent = () => {
    const userAgent = new user_agents_1.default();
    const userAgentStr = userAgent.toString();
    return userAgentStr;
};
exports.default = createUserAgent;
