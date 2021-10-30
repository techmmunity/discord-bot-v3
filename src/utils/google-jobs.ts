/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */

import SearchApi from "google-search-results-nodejs";

const search = new SearchApi.GoogleSearch(process.env.SERP_API_SECRET_KEY);

interface SearchJobsOutput {
	title: string;
	companyName: string;
	location: string;
	description: string;
	thumbnail?: string;
	salary: string;
	id: string;
}

// eslint-disable-next-line import/exports-last
export interface JobsOutput {
	title: string;
	companyName: string;
	location: string;
	description: string;
	thumbnail?: string;
	salary: string;
	id: string;
	url: string;
}

const formatDescription = (description: string) => {
	if (description.length <= 4000) {
		return description;
	}

	return `${description.slice(0, 4000)}...`;
};

const searchJobs = (query: string): Promise<Array<SearchJobsOutput>> =>
	new Promise(resolve => {
		search.json(
			{
				engine: "google_jobs",
				google_domain: "google.com.br",
				q: query,
				gl: "br",
				hl: "pt",
				location: "Brazil",
			},
			(data: any) => {
				resolve(
					data.jobs_results.map(job => ({
						title: job.title,
						companyName: job.company_name,
						location: job.location,
						thumbnail: job.thumbnail,
						description: formatDescription(job.description),
						salary: job?.detected_extensions?.salary || "Não informado",
						id: job.job_id,
					})),
				);
			},
		);
	});

const getJobsDetails = (jobId: string): Promise<string> =>
	new Promise(resolve => {
		search.json(
			{
				engine: "google_jobs_listing",
				q: jobId,
			},
			(data: any) => {
				resolve(data.search_metadata.google_jobs_listing_url);
			},
		);
	});

export const getJobs = async (query: string, maxJobs?: number) => {
	const rawJobs = await searchJobs(query);

	const jobs = maxJobs ? rawJobs.slice(0, maxJobs) : rawJobs;

	const jobsDetails = await Promise.all(
		jobs.map(job => getJobsDetails(job.id)),
	);

	return jobs.map((job, idx) => ({
		...job,
		url: jobsDetails[idx],
	})) as Array<JobsOutput>;
};
