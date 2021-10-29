"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTitle = void 0;
const get_title_at_url_1 = __importDefault(require("get-title-at-url"));
const util_1 = require("util");
const getTitleAtUrl = (0, util_1.promisify)(get_title_at_url_1.default);
const getTitle = (url) => getTitleAtUrl(url).catch(result => result);
exports.getTitle = getTitle;
