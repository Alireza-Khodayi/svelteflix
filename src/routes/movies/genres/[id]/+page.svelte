<script lang="ts">
	import { getGenreMoviesById } from '$lib/api/genresApi.ts';
	import MovieCard from '$lib/components/UI/MovieCard.svelte';
	import Pagination from '$lib/components/UI/Pagination.svelte';
	import { moviesByGenrePage } from '$lib/store/store.js';
	import { onDestroy, onMount } from 'svelte';

	export let data;
	let Movies = data.Movies;
	let Genre = data.Genre;

	let topOfPage;
	onMount(() => {
		moviesByGenrePage.subscribe(async (value) => {
			Movies = await getGenreMoviesById(value, Genre.id);

			if (topOfPage) {
				topOfPage.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
</script>

<div bind:this={topOfPage} class="mt-10"></div>
<div class="py-20 container mx-auto w-full">
	<h2 class="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-5">
		<span
			class="text-primary bg-clip-text text-transparent bg-gradient-to-tr from-primary to-secondary via-accent animate-gradient-xy"
			>{Genre.name}</span
		> Movies
	</h2>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-2 md:gap-4 px-2">
		{#each Movies as Movie}
			<MovieCard {Movie} />
		{/each}
	</div>
</div>
<div class="flex items-center justify-center pb-5">
	<Pagination paginationType={moviesByGenrePage} pageStore={moviesByGenrePage} />
</div>
