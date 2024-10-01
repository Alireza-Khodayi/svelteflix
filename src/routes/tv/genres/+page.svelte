<script>
	export let data;
	let Genres = data.Genres;
</script>

<svelte:head>
	<title>SvelteFlix | TV Genres</title>
</svelte:head>
<div class="py-20 container mx-auto w-full h-screen">
	<h2 class="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-5">
		TV Genres List
	</h2>
	<div
		class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-2 md:gap-4 px-2 place-items-center"
	>
		{#each Genres as Genre}
			<a
				class="btn btn-neutral w-full h-auto min-h-20 text-xl font-bold p-10"
				href="/tv/genres/{Genre.id}">{Genre.name}</a
			>
		{/each}
	</div>
</div>
