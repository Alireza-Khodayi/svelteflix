export const getTopRatedMovies = async (page: number = 1) => {
	try {
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
		return data.results;
	} catch (err) {
		console.log(err);
		return [];
	}
};
