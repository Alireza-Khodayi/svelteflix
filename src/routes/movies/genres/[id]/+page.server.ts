import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, locals, params }) => {
	const Genres = await getAllGenres(fetch, locals);
	const Genre = Genres.filter((genre) => genre.id === Number(params.id))[0];
	const Movies = await getGenreMoviesById(fetch, locals, params);
	return { Movies, Genre };
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
const getGenreMoviesById = async (fetch, locals, params) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch(
			`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${params.id}`,
			options
		);
		const data = await response.json();
		return data.results;
	} catch (err) {
		console.log(err);
		return [];
	}
};
