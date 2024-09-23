<script lang="ts">
	import { browser } from '$app/environment';
	import TrendingMovies from '$lib/components/pages/Home/TrendingMovies.svelte';
	import UpComingMovies from '$lib/components/pages/Home/UpComingMovies.svelte';

	let carousel; // for calling methods of the carousel instance
	export let data;
	let upComingMovies = data.upcomingMovies;
	let genres = data.genres;
	let trending = data.trending;
</script>

{#if browser}
	<UpComingMovies {upComingMovies} {genres} />
	<TrendingMovies {trending} {genres} />
{/if}
