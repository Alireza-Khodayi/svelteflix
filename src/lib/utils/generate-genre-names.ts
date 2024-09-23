import type { Genre } from '$lib/components/interfaces/genres.interface';
import type { UpComingMovie } from '$lib/components/interfaces/upComingMovie.interface';

export function getGenresForMovie(movie: UpComingMovie, genres: Genre[]) {
	const genreNames = genres
		.filter((genre) => movie.genre_ids.includes(genre.id))
		.map((genre) => genre.name);

	return genreNames.join(', ');
}
