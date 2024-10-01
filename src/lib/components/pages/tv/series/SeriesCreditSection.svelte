<script lang="ts">
	import PeopleCard from '$lib/components/UI/Cards/PeopleCard.svelte';
	import CardsCarousel from '$lib/components/UI/Swiper/CardsCarousel.svelte';
	export let SeriesCredit;
</script>

<div class="container mx-auto w-full mt-2 py-2">
	<div class="bg-base-300 shadow-2xl rounded-lg w-full">
		<CardsCarousel
			CarouselTitle="Top Billed"
			CarouselType="Cast"
			DataList={SeriesCredit.cast}
			Item={PeopleCard}
		/>
	</div>
</div>
