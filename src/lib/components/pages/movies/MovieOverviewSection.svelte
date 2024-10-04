<script>
	export let Movie;
</script>

<div class="container w-full mx-auto flex flex-col lg:flex-row gap-4 my-4">
	<div class="bg-base-300 shadow-2xl rounded-lg p-5 w-full">
		<h3 class="text-xl font-bold mb-2">Overview</h3>
		<p class="text-zinc-400">
			{Movie.overview ? Movie.overview : 'No description or overview provided!'}
		</p>
	</div>
	<div class="bg-base-300 shadow-2xl rounded-lg p-5 w-full lg:w-1/3">
		<h3 class="text-xl font-bold">Genres</h3>
		<div class="text-zinc-400 flex flex-wrap gap-2">
			{#if Movie.genres}
				{#each Movie.genres as Genre}
					<a class="btn btn-sm btn-secondary" href="/movies/genres/{Genre.id}">{Genre.name}</a>
				{/each}
			{:else}
				No genre provided!
			{/if}
		</div>
	</div>
</div>
