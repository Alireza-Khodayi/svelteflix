<script lang="ts">
	export let data;
	let Movie = data.movie;
	let SimilarMovie = data.similarMovies;
	let MovieTrailers = data.movieTrailers;
</script>

<div class="flex flex-col gap-8">
	<div class="relative w-full overflow-hidden">
		<div class="relative w-full h-[80vh] lg:h-[90vh]">
			<img
				class="w-full h-full sm:h-auto min-h-[300px] object-cover"
				src={`https://image.tmdb.org/t/p/original${Movie.backdrop_path}`}
				alt="Poster"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
			<div
				class="absolute sm:bottom-[8rem] bottom-0 left-0 sm:flex gap-4 px-4 cursor-pointer mt-40"
			>
				<img src={`https://image.tmdb.org/t/p/original${Movie.poster_path}`} alt="Movie Cover" />
				<h2 class="text-3xl">{Movie.title}</h2>
			</div>
		</div>
	</div>
</div>
