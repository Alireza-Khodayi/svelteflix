<script>
	import { goto } from '$app/navigation';

	export let Movie;

	import placeholder from '$lib/assets/placeholder.png';

	function handleImageError(event) {
		event.target.src = placeholder;
	}
</script>

<div
	on:click={() => goto(`/movies/${Movie.id}`)}
	class="bg-base-300 rounded-lg shadow-md max-w-[17rem] cursor-pointer transition-all overflow-hidden hover:scale-95 duration-300"
>
	<img
		on:error={handleImageError}
		class="w-full object-contain h-auto"
		src={Movie.poster_path ? `https://image.tmdb.org/t/p/w500${Movie.poster_path}` : placeholder}
		alt="Movie Poster"
	/>
	<div class="p-4">
		<h3 class="text-left md:text-[17px] text-sm font-semibold line-clamp-1 w-fit">{Movie.title}</h3>
		<div class="flex items-center mt-2 md:text-[15px] text-[13px]">
			<span class="flex items-center gap-1"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff9955" class="size-5">
					<path
						fill-rule="evenodd"
						d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
						clip-rule="evenodd"
					/>
				</svg>
				{Movie.vote_average.toFixed(2)}
				<span class="text-xs">({Movie.vote_count} votes)</span></span
			>
		</div>
		<div class="flex items-center mt-2 md:text-[15px] text-[13px]">
			<span class="flex items-center gap-1"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff9955" class="size-5">
					<path
						fill-rule="evenodd"
						d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z"
						clip-rule="evenodd"
					/>
				</svg>
				Language: {Movie.original_language.toUpperCase()}
			</span>
		</div>
		<div class="flex items-center mt-2 md:text-[15px] text-[13px]">
			<span class="flex items-center gap-1"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff9955" class="size-5">
					<path
						fill-rule="evenodd"
						d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
						clip-rule="evenodd"
					/>
				</svg>
				Realease: {Movie.release_date}
			</span>
		</div>
	</div>
</div>
