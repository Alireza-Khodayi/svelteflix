import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, locals, params }) => {
	const movie = await getMovieById(fetch, locals, params);
	const similarMovies = await getSimilarMovies(fetch, locals, params);
	const movieTrailers = await getMovieTrailers(fetch, locals, params);
	const movieCredit = await getMovieCredit(fetch, locals, params);

	return { movie, similarMovies, movieTrailers, movieCredit };
};

const getMovieById = async (fetch, locals, params) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}`, options);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
		return [];
	}
};

const getSimilarMovies = async (fetch, locals, params) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}/similar`,
			options
		);
		const data = await response.json();
		return data.results;
	} catch (err) {
		console.log(err);
		return [];
	}
};

const getMovieTrailers = async (fetch, locals, params) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos`, options);
		const data = await response.json();
		return data.results;
	} catch (err) {
		console.log(err);
		return [];
	}
};

const getMovieCredit = async (fetch, locals, params) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}/credits`,
			options
		);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
		return [];
	}
};
