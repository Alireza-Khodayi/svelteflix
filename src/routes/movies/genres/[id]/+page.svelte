<script lang="ts">
	import { getGenreMoviesById } from '$lib/api/genresApi';
	import MovieCard from '$lib/components/UI/Cards/MovieCard.svelte';
	import MoviesGridView from '$lib/components/UI/GridView.svelte';
	import Pagination from '$lib/components/UI/Pagination.svelte';
	import { moviesByGenreLoading, moviesByGenrePage } from '$lib/store/store.js';
	import { onDestroy, onMount } from 'svelte';

	export let data;
	let Movies = data.Movies;
	let Genre = data.Genre;

	let topOfPage: HTMLDivElement;
	onMount(() => {
		moviesByGenrePage.subscribe(async (value) => {
			Movies = await getGenreMoviesById(value, Genre.id);

			if (topOfPage) {
				topOfPage.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
	onDestroy(() => {
		moviesByGenrePage.set(1);
	});
</script>

<svelte:head>
	<title>SvelteFlix | {Genre.name}</title>
</svelte:head>
<div bind:this={topOfPage} class="mt-10"></div>
<MoviesGridView
	SectionTitle={`${Genre.name}`}
	DataList={Movies}
	Item={MovieCard}
	LoadingState={moviesByGenreLoading}
/>
<div class="flex items-center justify-center pb-5">
	<Pagination paginationType={moviesByGenrePage} pageStore={moviesByGenrePage} />
</div>
