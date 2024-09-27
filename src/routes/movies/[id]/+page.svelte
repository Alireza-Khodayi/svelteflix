<script lang="ts">
	import { browser } from '$app/environment';
	import MovieCreditSection from '$lib/components/pages/movies/MovieCreditSection.svelte';
	import MovieHeroSection from '$lib/components/pages/movies/MovieHeroSection.svelte';
	import MovieOverviewSection from '$lib/components/pages/movies/MovieOverviewSection.svelte';
	import MovieTrailersSection from '$lib/components/pages/movies/MovieTrailersSection.svelte';
	import SimilarMoviesSection from '$lib/components/pages/movies/SimilarMoviesSection.svelte';

	export let data;
	$: Movie = data.movie;
	let SimilarMovies = data.similarMovies;
	let MovieTrailers = data.movieTrailers;
	let MovieCredit = data.movieCredit;
</script>

{#if browser}
	<MovieHeroSection {Movie} />
	<MovieOverviewSection {Movie} />
	<!-- <MovieTrailersSection {MovieTrailers} /> -->
	<MovieCreditSection {MovieCredit} />
	<SimilarMoviesSection {SimilarMovies} />
{/if}
