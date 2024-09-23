// @ts-noCheck
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ fetch, locals }) {
	const upcomingMovies = await getAllUpComingMovies(fetch, locals);
	const genres = await getAllGenres(fetch, locals);
	const trending = await getTrendingMovies(fetch, locals);
	return { upcomingMovies, genres, trending };
};

const getAllUpComingMovies = async (fetch, locals) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=10', options);
		const data = await response.json();
		return data.results;
	} catch (err) {
		console.log(err);
		return [];
	}
};

const getAllGenres = async (fetch, locals) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch('https://api.themoviedb.org/3/genre/movie/list', options);
		const data = await response.json();
		return data.genres;
	} catch (err) {
		console.log(err);
		return [];
	}
};

const getTrendingMovies = async (fetch, locals) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch(
			'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
			options
		);
		const data = await response.json();
		return data.results;
	} catch (err) {
		console.log(err);
		return [];
	}
};
//
