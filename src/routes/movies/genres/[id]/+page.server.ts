import { getGenreMoviesById } from '$lib/api/genresApi';
import type { Genre } from '$lib/components/interfaces/genres.interface';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ fetch, locals, params }) => {
	const Genres = await getAllGenres(fetch, locals);
	const Genre = Genres.filter((genre: Genre) => genre.id === Number(params.id))[0];
	const Movies = await getGenreMoviesById(1, Genre.id);
	return { Movies, Genre };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllGenres = async (fetch: any, locals: any) => {
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
