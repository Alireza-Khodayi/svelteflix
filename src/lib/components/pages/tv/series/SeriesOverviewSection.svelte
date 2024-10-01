<script>
	export let Series;
</script>

<div class="container w-full mx-auto flex flex-col lg:flex-row gap-4 sm:py-4">
	<div class="bg-base-300 shadow-2xl rounded-lg p-5 w-full">
		<h3 class="font-bold text-lg md:text-xl lg:text-2xl mb-4">Overview</h3>
		<p class="text-zinc-400">
			{Series.overview ? Series.overview : 'No description or overview provided!'}
		</p>
	</div>
	<div class="bg-base-300 shadow-2xl rounded-lg p-5 w-full lg:w-1/3">
		<h3 class="font-bold text-lg md:text-xl lg:text-2xl mb-4">Genres</h3>
		<div class="text-zinc-400 flex flex-wrap gap-2">
			{#each Series?.genres as Genre}
				<a class="btn btn-sm btn-secondary" href="/tv/genres/{Genre.id}">{Genre.name}</a>
			{/each}
		</div>
	</div>
</div>
