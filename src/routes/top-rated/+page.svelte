<script>
	import MovieCard from '$lib/components/UI/MovieCard.svelte';

	export let data;
	let topRatedMovies = data.topRatedMovies;
</script>

<div class="mt-20 container mx-auto w-full">
	<h2 class="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-5">
		<span class="text-primary">Top Rated</span> Movies
	</h2>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4 px-2">
		{#each topRatedMovies as Movie}
			<MovieCard {Movie} />
		{/each}
	</div>
</div>
