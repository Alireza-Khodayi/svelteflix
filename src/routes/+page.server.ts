import type { PageServerLoad } from './$types';

// export const load: PageServerLoad = async ({ fetch, locals }) => {
// 	await getAllUpComingMovies(fetch, locals);
// };

export const load: PageServerLoad = async function ({ fetch, locals }) {
	const upcomingMovies = await getAllUpComingMovies(fetch, locals);
	const genres = await getAllGenres(fetch, locals);
	return { upcomingMovies, genres };
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
		const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options);
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
//
