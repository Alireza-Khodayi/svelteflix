<script lang="ts">
	import PeopleCard from '$lib/components/UI/Cards/PeopleCard.svelte';
	import CardsCarousel from '$lib/components/UI/Swiper/CardsCarousel.svelte';
	export let MovieCredit;
</script>

<div class="bg-base-300 container mx-auto w-full rounded-xl my-4">
	<CardsCarousel
		CarouselTitle="Top Billed"
		CarouselType="Cast"
		DataList={MovieCredit.cast}
		Item={PeopleCard}
	/>
</div>
