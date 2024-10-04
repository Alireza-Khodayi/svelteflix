<script lang="ts">
	import placeholder from '$lib/assets/placeholder.png';
	export let Poster;
	export let alt;
	export let style: string | undefined = '';
	$: imageLoaded = false;
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

{#if !imageLoaded}
	<div class={`skeleton md:w-[200px] w-[150px] h-52 md:h-72 max-h-[220px] ${style}`}></div>
	<!-- Skeleton loader -->
{/if}
<img
	on:error={handleImageError}
	on:load={handleLoad}
	style:display={imageLoaded ? 'block' : 'none'}
	src={`https://image.tmdb.org/t/p/w780${Poster}`}
	{alt}
	class={`md:w-[200px] w-[150px] h-auto rounded-md ${style}`}
/>
