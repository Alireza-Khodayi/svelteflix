<script lang="ts">
	import { browser } from '$app/environment';
	import MovieHeroSection from '$lib/components/pages/movies/MovieHeroSection.svelte';
	import MovieOverviewSection from '$lib/components/pages/movies/MovieOverviewSection.svelte';
	import MovieTrailersSection from '$lib/components/pages/movies/MovieTrailersSection.svelte';

	export let data;
	let Movie = data.movie;
	let SimilarMovie = data.similarMovies;
	let MovieTrailers = data.movieTrailers;
</script>

{#if browser}
	<MovieHeroSection {Movie} />
	<MovieOverviewSection {Movie} />
	<!-- <MovieTrailersSection {MovieTrailers} /> -->
{/if}
