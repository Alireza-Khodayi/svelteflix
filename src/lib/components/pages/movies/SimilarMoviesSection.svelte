<script lang="ts">
	import MovieCard from '$lib/components/UI/MovieCard.svelte';
	import CardsCarousel from '$lib/components/UI/Swiper/CardsCarousel.svelte';
	export let SimilarMovies;
</script>

<div class="bg-base-300 container mx-auto w-full rounded-xl">
	<CardsCarousel
		CarouselTitle="Related"
		CarouselType="Movies"
		DataList={SimilarMovies}
		Item={MovieCard}
	/>
</div>
