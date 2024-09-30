<script>
	import { afterNavigate, beforeNavigate, goto } from '$app/navigation';
	export let Data;

	import placeholder from '$lib/assets/placeholder.png';

	$: imageLoaded = false;
	$: Profile = Data?.profile_path;
	$: if (Profile) {
		imageLoaded = false; // Reset to false when the poster_path changes
	}

	function handleLoad() {
		imageLoaded = true; // Set to true when the image loads
	}
	function handleImageError(event) {
		imageLoaded = true;
		event.target.src = placeholder;
	}
	afterNavigate(() => {
		imageLoaded = false;
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={() => goto(`/people/${Data.id}`)}
	class="max-w-[17rem] cursor-pointer transition-all overflow-hidden hover:scale-95 duration-300 mx-1 lg:mx-0.5"
>
	{#if !imageLoaded}
		<div class="skeleton w-[150px] md:w-[200px] h-40 sm:h-52 md:h-60 lg:h-72"></div>
		<!-- Skeleton loader -->
	{/if}
	<img
		on:error={handleImageError}
		class="w-[200px] object-contain h-auto rounded-md"
		src={Data?.profile_path ? `https://image.tmdb.org/t/p/w500${Profile}` : placeholder}
		alt="Movie Poster"
		on:load={handleLoad}
		style:display={imageLoaded ? 'block' : 'none'}
	/>
	<h3 class="font-bold text-sm mt-2 px-2 lg:text-lg line-clamp-1">{Data?.name}</h3>
	<p class="px-3 text-xs font-semibold">{Data?.character}</p>
</div>
