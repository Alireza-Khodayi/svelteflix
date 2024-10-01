<script lang="ts">
	import TvShowCard from '$lib/components/UI/Cards/TvShowCard.svelte';
	import CardsCarousel from '$lib/components/UI/Swiper/CardsCarousel.svelte';
	export let tvShows;
</script>

<CardsCarousel
	CarouselTitle="TV"
	CarouselType="Shows"
	DataList={tvShows}
	ShowAllLink="/tv-shows"
	Item={TvShowCard}
/>
