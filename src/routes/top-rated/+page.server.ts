import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ fetch, locals }) {
	const genres = await getAllGenres(fetch, locals);
	const topRatedMovies = await getTopRatedMovies(fetch, locals);
	return { genres, topRatedMovies };
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

const getTopRatedMovies = async (fetch, locals) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch(
			'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2',
			options
		);
		const data = await response.json();
		console.log(data.results);
		return data.results;
	} catch (err) {
		console.log(err);
		return [];
	}
};
