export const search = async (term: string) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
		}
	};
	try {
		const movieResponse = await fetch(
			`https://api.themoviedb.org/3/search/movie?query=${term}&include_adult=false&language=en-US&page=1`,
			options
		);
		const tvResponse = await fetch(
			`https://api.themoviedb.org/3/search/tv?query=${term}&include_adult=false&language=en-US&page=1`,
			options
		);
		const personResponse = await fetch(
			`https://api.themoviedb.org/3/search/person?query=${term}&include_adult=false&language=en-US&page=1`,
			options
		);

		const movieResults = await movieResponse.json();
		const tvResults = await tvResponse.json();
		const personResults = await personResponse.json();

		return {
			movies: movieResults.results,
			tvShows: tvResults.results,
			persons: personResults.results
		};
	} catch (error) {
		console.log(error);
		return {
			movies: [],
			tvShows: [],
			persons: []
		};
	}
};
