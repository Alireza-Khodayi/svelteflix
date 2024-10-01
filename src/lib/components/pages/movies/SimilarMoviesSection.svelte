<script lang="ts">
	import MovieCard from '$lib/components/UI/Cards/MovieCard.svelte';
	import CardsCarousel from '$lib/components/UI/Swiper/CardsCarousel.svelte';
	export let SimilarMovies;
</script>

<div class="bg-base-300 container mx-auto w-full rounded-xl my-4">
	<CardsCarousel
		CarouselTitle="Related"
		CarouselType="Movies"
		DataList={SimilarMovies}
		Item={MovieCard}
	/>
</div>
