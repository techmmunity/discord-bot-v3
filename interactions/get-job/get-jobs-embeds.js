"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobsEmbeds = void 0;
const getJobsEmbeds = (jobs) => jobs.map(job => ({
    title: job.title,
    thumbnail: {
        url: job.thumbnail,
    },
    description: job.description,
    url: job.url,
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
