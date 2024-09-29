import { topRatedMoviesLoading } from '$lib/store/store';

export const getTopRatedMovies = async (page: number = 1) => {
	try {
		topRatedMoviesLoading.set(true);
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
			}
		};
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
			options
		);
		const data = await response.json();
		topRatedMoviesLoading.set(false);
		return data.results;
	} catch (err) {
		topRatedMoviesLoading.set(false);
		console.log(err);
		return [];
	}
};
