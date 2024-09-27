<script lang="ts">
	import { getTopRatedMovies } from '$lib/api/topRatedApi.ts';
	import MovieCard from '$lib/components/UI/MovieCard.svelte';
	import Pagination from '$lib/components/UI/Pagination.svelte';
	import { topRatedMoviesPage } from '$lib/store/topRatedMoviesPage.ts';
	import { onDestroy, onMount } from 'svelte';

	export let data;
	let topRatedMovies = data.topRatedMovies;

	let topOfPage;

	onMount(() => {
		topRatedMoviesPage.subscribe(async (value) => {
			topRatedMovies = await getTopRatedMovies(value);

			if (topOfPage) {
				topOfPage.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
</script>

<div bind:this={topOfPage}></div>
<div class="mt-10 py-10 container mx-auto w-full">
	<h2 class="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-5">
		<span
			class="text-primary bg-clip-text text-transparent bg-gradient-to-tr from-primary to-secondary via-accent animate-gradient-xy"
			>Top Rated</span
		> Movies
	</h2>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-2 md:gap-4 px-2">
		{#each topRatedMovies as Movie}
			<MovieCard {Movie} />
		{/each}
	</div>
</div>
<div class="flex items-center justify-center pb-5">
	<Pagination paginationType={topRatedMoviesPage} pageStore={topRatedMoviesPage} />
</div>
