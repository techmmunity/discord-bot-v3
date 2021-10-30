"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobs = void 0;
const google_search_results_nodejs_1 = __importDefault(require("google-search-results-nodejs"));
const search = new google_search_results_nodejs_1.default.GoogleSearch(process.env.SERP_API_SECRET_KEY);
const formatDescription = (description) => {
    if (description.length <= 4000) {
        return description;
    }
    return `${description.slice(0, 4000)}...`;
};
const searchJobs = (query) => new Promise(resolve => {
    search.json({
        engine: "google_jobs",
        google_domain: "google.com.br",
        q: query,
        gl: "br",
        hl: "pt",
        location: "Brazil",
    }, (data) => {
        resolve(data.jobs_results.map(job => {
            var _a;
            return ({
                title: job.title,
                companyName: job.company_name,
                location: job.location,
                thumbnail: job.thumbnail,
                description: formatDescription(job.description),
                salary: ((_a = job === null || job === void 0 ? void 0 : job.detected_extensions) === null || _a === void 0 ? void 0 : _a.salary) || "Não informado",
                id: job.job_id,
            });
        }));
    });
});
const getJobsDetails = (jobId) => new Promise(resolve => {
    search.json({
        engine: "google_jobs_listing",
        q: jobId,
    }, (data) => {
        resolve(data.search_metadata.google_jobs_listing_url);
    });
});
const getJobs = async (query, maxJobs) => {
    const rawJobs = await searchJobs(query);
    const jobs = maxJobs ? rawJobs.slice(0, maxJobs) : rawJobs;
    const jobsDetails = await Promise.all(jobs.map(job => getJobsDetails(job.id)));
    return jobs.map((job, idx) => (Object.assign(Object.assign({}, job), { url: jobsDetails[idx] })));
};
exports.getJobs = getJobs;
