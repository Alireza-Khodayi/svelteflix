<script lang="ts">
	import { browser } from '$app/environment';
	import TopRatedMovies from '$lib/components/pages/Home/TopRatedMovies.svelte';
	import TrendingMovies from '$lib/components/pages/Home/TrendingMovies.svelte';
	import UpComingMovies from '$lib/components/pages/Home/UpComingMovies.svelte';
	import MovieCard from '$lib/components/UI/MovieCard.svelte';
	import CardsCarousel from '$lib/components/UI/Swiper/CardsCarousel.svelte';
	// import function to register Swiper custom elements

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
	<CardsCarousel
		CarouselTitle="Now Playing"
		CarouselType="Movies"
		DataList={topRatedMovies}
		ShowAllLink="/top-rated"
		Item={MovieCard}
	/>
{/if}
