<script lang="ts">
	import PosterImage from '../Images/PosterImage.svelte';

	export let Data;
	export let AditionalData: any | undefined = undefined;

	if (AditionalData) {
		console.log(AditionalData);
	}
</script>

<a href="/people/{Data.id}">
	<div
		class="max-w-[17rem] cursor-pointer transition-all overflow-hidden hover:scale-95 duration-300 mx-1 lg:mx-0.5"
	>
		<PosterImage Poster={Data.profile_path} alt={Data.name} />
		<h3 class="font-bold text-sm mt-2 px-2 lg:text-lg line-clamp-1">{Data?.name}</h3>
		<p class="px-3 text-xs font-semibold">{Data?.character}</p>
	</div>
</a>
