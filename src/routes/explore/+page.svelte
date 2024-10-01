<script>
	import TvShowsSection from '$lib/components/pages/explore/TVShowsSection.svelte';
	export let data;

	$: tvShows = data.tvShows;
</script>

<TvShowsSection {tvShows} />
