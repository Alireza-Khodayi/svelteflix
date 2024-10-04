<script lang="ts">
	import placeholder from '$lib/assets/placeholder.png';
	export let Backdrop;
	export let Style: string | undefined = '';
	$: imageLoaded = false;
	$: if (Backdrop) {
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

{#if !imageLoaded}
	<div class="skeleton w-full h-full min-h-52 {Style}"></div>
	<!-- Skeleton loader -->
{/if}
<img
	class="w-full h-full lg:h-auto object-cover brightness-50 {Style}"
	src={`https://image.tmdb.org/t/p/original${Backdrop}`}
	alt="Poster"
	on:error={handleImageError}
	on:load={handleLoad}
	style:display={imageLoaded ? 'block' : 'none'}
/>
