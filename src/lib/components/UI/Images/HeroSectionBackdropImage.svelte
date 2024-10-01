<script>
	export let Backdrop;
	$: imageLoaded = false;
	$: if (Backdrop) {
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
	<div class="skeleton w-full h-full lg:h-auto min-h-[300px]"></div>
	<!-- Skeleton loader -->
{/if}
<img
	class="w-full h-full lg:h-auto min-h-[300px] object-cover brightness-50"
	src={`https://image.tmdb.org/t/p/original${Backdrop}`}
	alt="Poster"
	on:error={handleImageError}
	on:load={handleLoad}
	style:display={imageLoaded ? 'block' : 'none'}
/>
