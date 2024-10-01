<script lang="ts">
	import MovieAndGenreCard from '$lib/components/UI/Cards/MovieAndGenreCard.svelte';
	import CardsCarousel from '$lib/components/UI/Swiper/CardsCarousel.svelte';

	export let trending;
	export let genres;
</script>

<CardsCarousel
	CarouselTitle="Trending"
	CarouselType="Movies"
	DataList={trending}
	Item={MovieAndGenreCard}
	AditionalData={{ genres }}
	CardSize="large"
/>
