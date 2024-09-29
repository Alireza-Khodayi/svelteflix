import type { Genre } from '$lib/components/interfaces/genres.interface';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ fetch, locals }) => {
	const Genres: Genre[] = await getAllGenres(fetch, locals);
	return { Genres };
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
