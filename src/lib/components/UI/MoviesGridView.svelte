<script lang="ts">
	import MovieCard from '$lib/components/UI/MovieCard.svelte';
	import MovieCardLoader from './Cards/MovieCardLoader.svelte';
	export let Movies;
	export let SectionTitle;
	export let LoadingState;
</script>

<div class="py-20 container mx-auto w-full">
	<h2 class="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-5">
		{SectionTitle}
	</h2>
	<div
		class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-2 md:gap-4 px-2 place-items-center"
	>
		{#if $LoadingState === true}
			<MovieCardLoader />
		{:else}
			{#each Movies as Movie}
				<MovieCard {Movie} />
			{/each}
		{/if}
	</div>
</div>
