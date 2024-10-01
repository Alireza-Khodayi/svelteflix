<script>
	export let Poster;
	export let alt;
	$: imageLoaded = false;
	$: if (Poster) {
		imageLoaded = false; // Reset to false when the poster_path changes
	}
	function handleLoad() {
		imageLoaded = true; // Set to true when the image loads
	}
	function handleImageError(event) {
		imageLoaded = true;
	}
</script>

{#if !imageLoaded}
	<div class="skeleton md:w-[200px] w-[150px] h-52 md:h-72"></div>
	<!-- Skeleton loader -->
{/if}
<img
	on:error={handleImageError}
	on:load={handleLoad}
	style:display={imageLoaded ? 'block' : 'none'}
	src={`https://image.tmdb.org/t/p/w780${Poster}`}
	{alt}
	class="md:w-[200px] w-[150px] h-auto rounded-md"
/>
