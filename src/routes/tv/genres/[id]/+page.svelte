<script lang="ts">
	import { getGenreSeriesById } from '$lib/api/genresApi';
	import TvShowCard from '$lib/components/UI/Cards/TvShowCard.svelte';
	import GridView from '$lib/components/UI/GridView.svelte';
	import Pagination from '$lib/components/UI/Pagination.svelte';
	import { tvByGenreLoading, tvByGenrePage } from '$lib/store/store.js';
	import { onDestroy, onMount } from 'svelte';

	export let data;
	let Series = data.Series;
	let Genre = data.Genre;

	let topOfPage: HTMLDivElement;
	onMount(() => {
		tvByGenrePage.subscribe(async (value) => {
			Series = await getGenreSeriesById(value, Genre.id);

			if (topOfPage) {
				topOfPage.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
	onDestroy(() => {
		tvByGenrePage.set(1);
	});
</script>

<svelte:head>
	<title>SvelteFlix | TV {Genre.name} List</title>
</svelte:head>
<div bind:this={topOfPage} class="mt-10"></div>
<GridView
	SectionTitle={`${Genre.name}`}
	DataList={Series}
	LoadingState={tvByGenreLoading}
	Item={TvShowCard}
/>
<div class="flex items-center justify-center pb-5">
	<Pagination paginationType={tvByGenrePage} pageStore={tvByGenrePage} />
</div>
