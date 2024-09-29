import { moviesByGenreLoading } from '$lib/store/store';

export const getGenreMoviesById = async (page: number = 1, id: string) => {
	try {
		moviesByGenreLoading.set(true);
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
			}
		};
		const response = await fetch(
			`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${Number(id)}`,
			options
		);
		const data = await response.json();
		moviesByGenreLoading.set(false);
		return data.results;
	} catch (err) {
		moviesByGenreLoading.set(false);
		console.log(err);
		return [];
	}
};
