<script>
	import MovieCard from '$lib/components/UI/MovieCard.svelte';

	export let data;
	let Movies = data.Movies;
	let Genre = data.Genre;
</script>

<div class="mt-10 py-10 container mx-auto w-full">
	<h2 class="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-5">
		<span
			class="text-primary bg-clip-text text-transparent bg-gradient-to-tr from-primary to-secondary via-accent animate-gradient-xy"
			>{Genre.name}</span
		> Movies
	</h2>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4 px-2">
		{#each Movies as Movie}
			<MovieCard {Movie} />
		{/each}
	</div>
</div>
