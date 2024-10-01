// @ts-noCheck
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ fetch, locals }) {
	const tvShows = await getTvShows(fetch, locals);
	return { tvShows };
};

const getTvShows = async (fetch, locals) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch(
			'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
			options
		);
		const data = await response.json();
		return data.results;
	} catch (err) {
		console.log(err);
		return [];
	}
};
