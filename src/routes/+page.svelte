<script lang="ts">
	import { browser } from '$app/environment';
	import UpComingMovies from '$lib/components/pages/Home/UpComingMovies.svelte';

	let carousel; // for calling methods of the carousel instance
	export let data;
	let upComingMovies = data.upcomingMovies;
	let genres = data.genres;
</script>

{#if browser}
	<UpComingMovies {upComingMovies} {genres} />
{/if}
