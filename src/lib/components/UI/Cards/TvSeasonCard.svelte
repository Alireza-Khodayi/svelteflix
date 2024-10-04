<script>
	import PosterImage from '../Images/PosterImage.svelte';

	export let Data;
</script>

<div class="card card-side my-4 flex-col sm:flex-row">
	<figure class="overflow-visible">
		<PosterImage Poster={Data.poster_path} alt={Data.name} />
	</figure>
	<div class="card-body">
		<div class="flex flex-col gap-3">
			<h2 class="card-title">
				{Data.name}
				{Data.air_date ? `(${Data.air_date?.split('-')[0]})` : ''}
			</h2>
			<p class="text-zinc-500">{Data.episode_count} Episodes</p>
			<p class="text-amber-500 font-semibold flex gap-1 items-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff9955" class="size-5">
					<path
						fill-rule="evenodd"
						d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
						clip-rule="evenodd"
					/>
				</svg>
				{Data.vote_average?.toFixed(2)}
			</p>
			<p class="text-zinc-400 line-clamp-5">
				{Data.overview ? Data.overview : 'No description or overview provided!'}
			</p>
		</div>
	</div>
</div>
