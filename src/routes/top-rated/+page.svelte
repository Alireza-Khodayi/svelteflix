<script lang="ts">
	import { getTopRatedMovies } from '$lib/api/topRatedApi';
	import MoviesGridView from '$lib/components/UI/MoviesGridView.svelte';
	import Pagination from '$lib/components/UI/Pagination.svelte';
	import { topRatedMoviesLoading, topRatedMoviesPage } from '$lib/store/store.js';
	import { onDestroy, onMount } from 'svelte';

	export let data;
	$: Movies = data.topRatedMovies;

	let topOfPage: HTMLDivElement;

	onMount(() => {
		topRatedMoviesPage.subscribe(async (value) => {
			Movies = await getTopRatedMovies(value);

			if (topOfPage) {
				topOfPage.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
	onDestroy(() => {
		topRatedMoviesPage.set(1);
	});
</script>

<div bind:this={topOfPage}></div>
<MoviesGridView SectionTitle={'Top Rated Movies'} {Movies} LoadingState={topRatedMoviesLoading} />
<div class="flex items-center justify-center pb-5">
	<Pagination paginationType={topRatedMoviesPage} pageStore={topRatedMoviesPage} />
</div>
