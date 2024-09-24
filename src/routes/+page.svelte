<script lang="ts">
	import { browser } from '$app/environment';
	import TopRatedMovies from '$lib/components/pages/Home/TopRatedMovies.svelte';
	import TrendingMovies from '$lib/components/pages/Home/TrendingMovies.svelte';
	import UpComingMovies from '$lib/components/pages/Home/UpComingMovies.svelte';

	let carousel; // for calling methods of the carousel instance
	export let data;
	let upComingMovies = data.upcomingMovies;
	let genres = data.genres;
	let trending = data.trending;
	let topRatedMovies = data.topRatedMovies;
</script>

{#if browser}
	<UpComingMovies {upComingMovies} {genres} />
	<TrendingMovies {trending} {genres} />
	<TopRatedMovies {topRatedMovies} />
{/if}
