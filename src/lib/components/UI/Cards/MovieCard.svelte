<script lang="ts">
	import PosterImage from '../Images/PosterImage.svelte';

	export let Data;
	export let AditionalData: any | undefined = undefined;

	if (AditionalData) {
		console.log(AditionalData);
	}
</script>

<a href="/movies/{Data.id}">
	<div
		class="max-w-40 lg:max-w-52 transition-all overflow-hidden hover:scale-95 duration-300 mx-1 lg:mx-0.5"
	>
		<PosterImage Poster={Data.poster_path} alt={Data.title} style="max-h-72" />
		<h3 class="font-bold text-sm mt-2 px-2 lg:text-lg line-clamp-1">{Data.title}</h3>
	</div>
</a>
