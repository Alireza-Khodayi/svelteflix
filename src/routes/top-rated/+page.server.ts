import { getTopRatedMovies } from '$lib/api/topRatedApi';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
	const topRatedMovies = await getTopRatedMovies();
	return { topRatedMovies };
};

// const getTopRatedMovies = async (fetch, locals) => {
// 	try {
// 		const options = {
// 			method: 'GET',
// 			headers: {
// 				accept: 'application/json',
// 				Authorization: `Bearer ${locals.API_KEY}`
// 			}
// 		};
// 		const response = await fetch(
// 			'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2',
// 			options
// 		);
// 		const data = await response.json();
// 		return data.results;
// 	} catch (err) {
// 		console.log(err);
// 		return [];
// 	}
// };
