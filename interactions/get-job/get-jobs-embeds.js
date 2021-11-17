"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobsEmbeds = void 0;
const images_1 = require("../../assets/images");
const getJobsEmbeds = (jobs) => jobs.map(job => ({
    title: `${job.title.slice(0, 253)}...`,
    thumbnail: {
        url: job.thumbnail,
    },
    description: job.description,
    url: job.url,
    author: {
        name: "Techmmunity",
        url: "https://techmmunity.com.br",
        iconURL: images_1.IMAGES.techmmunityLogo,
    },
    fields: [
        {
            name: "Empresa",
            value: job.companyName,
        },
        {
            name: "Local",
            value: job.location,
        },
        {
            name: "Salário",
            value: job.salary,
        },
    ],
}));
exports.getJobsEmbeds = getJobsEmbeds;
