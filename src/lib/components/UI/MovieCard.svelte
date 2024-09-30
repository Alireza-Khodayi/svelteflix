<script>
	import { goto } from '$app/navigation';

	export let Data;
	import placeholder from '$lib/assets/placeholder.png';

	$: imageLoaded = false;
	$: Poster = Data.poster_path;
	$: if (Poster) {
		imageLoaded = false; // Reset to false when the poster_path changes
	}
	function handleLoad() {
		imageLoaded = true; // Set to true when the image loads
	}
	function handleImageError(event) {
		imageLoaded = true;
		event.target.src = placeholder;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={() => goto(`/movies/${Data.id}`)}
	class="max-w-[17rem] cursor-pointer transition-all overflow-hidden hover:scale-95 duration-300 mx-1 lg:mx-0.5"
>
	{#if !imageLoaded}
		<div class="skeleton w-[150px] md:w-[200px] h-40 sm:h-52 md:h-60 lg:h-72"></div>
		<!-- Skeleton loader -->
	{/if}
	<img
		on:error={handleImageError}
		on:load={handleLoad}
		style:display={imageLoaded ? 'block' : 'none'}
		class="w-[150px] md:w-[200px] object-contain h-auto rounded-md"
		src={Poster ? `https://image.tmdb.org/t/p/w500${Poster}` : placeholder}
		alt="Movie Poster"
	/>
	<h3 class="font-bold text-sm mt-2 px-2 lg:text-lg line-clamp-2">{Data.title}</h3>
</div>
