<script lang="ts">
	import MovieCard from '$lib/components/UI/MovieCard.svelte';
	import MovieCardsCarousel from '$lib/components/UI/Swiper/CardsCarousel.svelte';
	export let Cast;
</script>

<div class="bg-base-300 p-5 md:rounded-lg shadow-xl w-full">
	<MovieCardsCarousel
		CarouselTitle="Known For"
		CarouselType="Movies"
		DataList={Cast}
		Item={MovieCard}
	/>
</div>
