<script lang="ts">
	import { browser } from '$app/environment';
	import TopRatedMovies from '$lib/components/pages/home/TopRatedMovies.svelte';
	import TrendingMovies from '$lib/components/pages/home/TrendingMovies.svelte';
	import UpComingMovies from '$lib/components/pages/home/UpComingMovies.svelte';

	export let data;
	let upComingMovies = data.upcomingMovies;
	let genres = data.genres;
	let trending = data.trending;
	let topRatedMovies = data.topRatedMovies;
</script>

<svelte:head>
	<title>SvelteFlix | Home</title>
</svelte:head>

{#if browser}
	<UpComingMovies {upComingMovies} {genres} />
	<TrendingMovies {trending} {genres} />
	<TopRatedMovies {topRatedMovies} />
{/if}
