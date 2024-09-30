<script lang="ts">
	import { goto } from '$app/navigation';
	import { getGenresForMovie } from '$lib/utils/generate-genre-names';
	// @ts-ignore

	export let trending;
	export let genres;
	const spaceBetween = 5;
</script>

<div class="container mx-auto w-full py-10 px-4 cursor-pointer">
	<h3 class="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5">
		<span
			class="bg-clip-text text-transparent bg-gradient-to-tr from-primary to-secondary via-accent animate-gradient-xy"
			>Trending</span
		> Movies
	</h3>
	<swiper-container
		slides-per-view={1}
		space-between={spaceBetween}
		autoplay={true}
		breakpoints={{
			400: {
				slidesPerView: 1
			},
			700: {
				slidesPerView: 2
			},
			1024: {
				slidesPerView: 3
			},
			1280: {
				slidesPerView: 4
			}
		}}
	>
		{#each trending as Movie, index}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<swiper-slide lazy="true">
				<div class="px-2 relative rounded-lg" on:click={() => goto(`/movies/${Movie.id}`)}>
					<div class="absolute z-40 bottom-0 mx-4 mb-2">
						<h3 class="font-extrabold">{Movie.title}</h3>
						<div class="flex gap-3 text-xs opacity-60">
							<div class="flex gap-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="#ff9955"
									class="size-5"
								>
									<path
										fill-rule="evenodd"
										d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625Zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5A.375.375 0 0 0 3 5.625Zm16.125-.375a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0 0 21 7.125v-1.5a.375.375 0 0 0-.375-.375h-1.5ZM21 9.375A.375.375 0 0 0 20.625 9h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5ZM4.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5ZM3.375 15h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h1.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 4.875 9h-1.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Zm4.125 0a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
										clip-rule="evenodd"
									/>
								</svg>

								<span class="text-sm">{getGenresForMovie(Movie, genres)}</span>
							</div>
						</div>
						<div class="flex flex-col sm:flex-row items-start justify-between"></div>
					</div>
					<div
						class="absolute z-30 inset-0 bg-gradient-to-t opacity-100 from-black to-transparent rounded-lg mx-2 transition-all duration-500 ease-in-out transform hover:opacity-65"
					></div>
					<img
						class="w-full h-auto object-cover rounded-lg"
						src={`https://image.tmdb.org/t/p/original${Movie.backdrop_path}`}
						alt={Movie.title}
					/>
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>
</div>
