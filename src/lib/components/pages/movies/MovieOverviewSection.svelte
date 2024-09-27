<script>
	export let Movie;
</script>

<div class="container w-full mx-auto flex flex-col lg:flex-row gap-4 sm:py-4">
	<div class="bg-base-300 shadow-2xl rounded-lg p-5 w-full">
		<h3 class="text-xl font-bold mb-2">Overview</h3>
		<p class="text-zinc-400">{Movie.overview}</p>
	</div>
	<div class="bg-base-300 shadow-2xl rounded-lg p-5 w-full lg:w-1/3">
		<h3 class="text-xl font-bold">Genres</h3>
		<div class="text-zinc-400 flex flex-wrap gap-2">
			{#each Movie.genres as Genre}
				<a class="btn btn-sm btn-secondary" href="/movies/genres/{Genre.id}">{Genre.name}</a>
			{/each}
		</div>
	</div>
</div>
<!-- https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=53%2C -->
