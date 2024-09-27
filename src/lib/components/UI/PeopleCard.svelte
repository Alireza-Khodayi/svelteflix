<script>
	import { goto } from '$app/navigation';

	export let People;

	import placeholder from '$lib/assets/placeholder.png';

	function handleImageError(event) {
		event.target.src = placeholder;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={() => goto(`/people/${People.id}`)}
	class="max-w-[17rem] cursor-pointer transition-all overflow-hidden hover:scale-95 duration-300 mx-1 lg:mx-0.5"
>
	<img
		on:error={handleImageError}
		class="w-[200px] object-contain h-auto rounded-md"
		src={People.profile_path
			? `https://image.tmdb.org/t/p/w500${People.profile_path}`
			: placeholder}
		alt="Movie Poster"
	/>
	<h3 class="font-bold text-sm mt-2 px-2 lg:text-lg line-clamp-1">{People.name}</h3>
	<p class="px-3 text-xs font-semibold">{People.character}</p>
</div>
