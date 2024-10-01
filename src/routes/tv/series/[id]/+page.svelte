<script lang="ts">
	import { browser } from '$app/environment';
	import SeriesCreditSection from '$lib/components/pages/tv/series/SeriesCreditSection.svelte';
	import SeriesHeroSection from '$lib/components/pages/tv/series/SeriesHeroSection.svelte';
	import SeriesOverviewSection from '$lib/components/pages/tv/series/SeriesOverviewSection.svelte';
	import SeriesSeasonsSection from '$lib/components/pages/tv/series/SeriesSeasonsSection.svelte';
	import SimilarSeriesSection from '$lib/components/pages/tv/series/SimilarSeriesSection.svelte';

	export let data;
	$: Series = data.series;
	$: SimilarSeries = data.similarSeries;
	// let MovieTrailers = data.movieTrailers;
	$: SeriesCredit = data.seriesCredit;
</script>

<svelte:head>
	<title>SvelteFlix | {Series.name}</title>
</svelte:head>
{#if browser}
	<SeriesHeroSection {Series} />
	<SeriesOverviewSection {Series} />
	<SeriesSeasonsSection Seasons={Series.seasons} />
	<!-- <MovieTrailersSection {MovieTrailers} /> -->
	<SeriesCreditSection {SeriesCredit} />
	<SimilarSeriesSection {SimilarSeries} />
{/if}
