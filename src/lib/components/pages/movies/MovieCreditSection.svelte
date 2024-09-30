<script lang="ts">
	import PeopleCard from '$lib/components/UI/PeopleCard.svelte';
	import CardsCarousel from '$lib/components/UI/Swiper/CardsCarousel.svelte';
	export let MovieCredit;
</script>

<div class="container mx-auto w-full mt-2 py-2">
	<div class="bg-base-300 shadow-2xl rounded-lg p-5 w-full">
		<CardsCarousel
			CarouselTitle="Top Billed"
			CarouselType="Cast"
			DataList={MovieCredit.cast}
			Item={PeopleCard}
		/>
	</div>
</div>
