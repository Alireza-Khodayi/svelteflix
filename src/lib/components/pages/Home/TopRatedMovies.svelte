<script lang="ts">
	import MovieCard from '$lib/components/UI/Cards/MovieCard.svelte';
	import CardsCarousel from '$lib/components/UI/Swiper/CardsCarousel.svelte';
	export let topRatedMovies;
</script>

<CardsCarousel
	CarouselTitle="Top Rated"
	CarouselType="Movies"
	DataList={topRatedMovies}
	ShowAllLink="/top-rated"
	Item={MovieCard}
/>
