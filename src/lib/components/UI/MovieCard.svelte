<script>
	import { goto } from '$app/navigation';

	export let Movie;

	import placeholder from '$lib/assets/placeholder.png';

	function handleImageError(event) {
		event.target.src = placeholder;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={() => goto(`/movies/${Movie.id}`)}
	class="max-w-[17rem] cursor-pointer transition-all overflow-hidden hover:scale-95 duration-300 mx-1 lg:mx-0.5"
>
	<img
		on:error={handleImageError}
		class="w-[200px] object-contain h-auto rounded-md"
		src={Movie.poster_path ? `https://image.tmdb.org/t/p/w500${Movie.poster_path}` : placeholder}
		alt="Movie Poster"
	/>
	<h3 class="font-bold text-sm mt-2 px-2 lg:text-lg">{Movie.title}</h3>
</div>
