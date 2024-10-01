<script lang="ts">
	import TvShowCard from '$lib/components/UI/Cards/TvShowCard.svelte';
	import CardsCarousel from '$lib/components/UI/Swiper/CardsCarousel.svelte';
	export let SimilarSeries;
</script>

<div class="bg-base-300 container mx-auto w-full rounded-xl">
	<CardsCarousel
		CarouselTitle="Related"
		CarouselType="Series"
		DataList={SimilarSeries}
		Item={TvShowCard}
	/>
</div>
