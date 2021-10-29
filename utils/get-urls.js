"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrls = void 0;
const getUrls = (str) => {
    const regex = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[A-Z0-9+&@#/%=~_|$])/gim;
    return [...str.matchAll(regex)].map(url => url[0]);
};
exports.getUrls = getUrls;
