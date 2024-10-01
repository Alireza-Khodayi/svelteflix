<script lang="ts">
	import MovieCardLoader from './Cards/MovieCardLoader.svelte';
	export let DataList;
	export let SectionTitle;
	export let LoadingState;
	export let Item;
	export let AditionalData: any | undefined = undefined;
</script>

<div class="py-20 container mx-auto w-full">
	<h2 class="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-5">
		{SectionTitle}
	</h2>
	<div
		class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-2 px-2 place-items-center"
	>
		{#if $LoadingState === true}
			<MovieCardLoader />
		{:else}
			{#each DataList as Data}
				<svelte:component this={Item} {Data} {AditionalData} />
			{/each}
		{/if}
	</div>
</div>
