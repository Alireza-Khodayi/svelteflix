<script>
	import PosterImage from '../Images/PosterImage.svelte';

	export let DataList;
	export let GroupItem;
	export let isOpen;
	export let ItemsClickHandler;
	export let Title;
	export let ItemsBaseUrl;
</script>

<div
	class="collapse collapse-arrow bg-base-200 rounded-none bg-opacity-50 bg-transparent bg-clip-padding backdrop-filter backdrop-blur-sm"
>
	<input type="radio" name="my-accordion-2" value={GroupItem} bind:group={isOpen} />
	<div class="collapse-title text-xl font-medium">{Title}</div>
	<div class="collapse-content">
		{#each DataList as Data}
			<a href="{ItemsBaseUrl}/{Data.id}" on:click={ItemsClickHandler}>
				<div
					class="max-h-32 flex gap-4 items-center p-6 w-full cursor-pointer border-b border-gray-600 border-opacity-30 bg-base-300"
				>
					<PosterImage
						Poster={Data.poster_path ? Data.poster_path : Data.profile_path}
						alt={Data.title ? Data.title : Data.name}
						style="max-w-16 max-h-24"
					/>
					<div>
						<h3 class="text-white">{Data.title ? Data.title : Data.name}</h3>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
