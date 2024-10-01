/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, locals, params }) => {
	const series = await getSeriesById(fetch, locals, params);
	const similarSeries = await getSimilarSeries(fetch, locals, params);
	// const movieTrailers = await getMovieTrailers(fetch, locals, params);
	const seriesCredit = await getSeriesCredit(fetch, locals, params);

	return { series, similarSeries, seriesCredit };
};

const getSeriesById = async (fetch: any, locals: any, params: any) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch(`https://api.themoviedb.org/3/tv/${params.id}`, options);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
		return [];
	}
};

const getSimilarSeries = async (fetch: any, locals: any, params: any) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/similar`, options);
		const data = await response.json();
		return data.results;
	} catch (err) {
		console.log(err);
		return [];
	}
};

// const getMovieTrailers = async (fetch: any, locals: any, params: any) => {
// 	try {
// 		const options = {
// 			method: 'GET',
// 			headers: {
// 				accept: 'application/json',
// 				Authorization: `Bearer ${locals.API_KEY}`
// 			}
// 		};
// 		const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos`, options);
// 		const data = await response.json();
// 		return data.results;
// 	} catch (err) {
// 		console.log(err);
// 		return [];
// 	}
// };

const getSeriesCredit = async (fetch: any, locals: any, params: any) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/credits`, options);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
		return [];
	}
};
