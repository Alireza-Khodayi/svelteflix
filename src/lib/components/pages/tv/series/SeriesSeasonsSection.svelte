<script lang="ts">
	import PeopleCard from '$lib/components/UI/Cards/PeopleCard.svelte';
	import TvSeasonCard from '$lib/components/UI/Cards/TvSeasonCard.svelte';
	import CardsCarousel from '$lib/components/UI/Swiper/CardsCarousel.svelte';
	export let Seasons;
	$: lastSeason = Seasons.slice(-1)[0];
</script>

<div class="container mx-auto w-full mt-2 py-2">
	<div class="bg-base-300 shadow-2xl rounded-lg p-5 w-full">
		<h3 class="font-bold text-lg md:text-xl lg:text-2xl mb-4">
			<span
				class="bg-clip-text text-transparent bg-gradient-to-tr from-primary to-secondary via-accent animate-gradient-xy"
				>Last</span
			>
			Season
		</h3>
		<TvSeasonCard Data={lastSeason} />
	</div>
</div>
