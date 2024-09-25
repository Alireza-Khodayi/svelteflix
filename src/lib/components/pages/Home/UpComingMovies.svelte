<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Genre } from '$lib/components/interfaces/genres.interface';
	import type { UpComingMovie } from '$lib/components/interfaces/upComingMovie.interface';
	import { getGenresForMovie } from '$lib/utils/generate-genre-names';
	// @ts-ignore
	import Carousel from 'svelte-carousel';

	export let upComingMovies: UpComingMovie[];
	export let genres: Genre[];

	let carousel: Carousel;

	function handlePrev() {
		carousel.goToPrev();
	}
	function handleNext() {
		carousel.goToNext();
	}
</script>

<div class="w-full flex justify-center items-center gap-8">
	<div class="relative w-full">
		<Carousel
			bind:this={carousel}
			autoplay
			duration={700}
			autoplayDuration={4000}
			timingFunction="ease-in-out"
			dots={false}
		>
			<button
				slot="prev"
				class="custom-arrow custom-arrow-prev rounded-r-xl absolute top-2/4 md:top-2/3 lg:top-3/4 left-0 z-40 p-2 lg:p-3 cursor-pointer border border-gray-700 border-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 hover:bg-opacity-50 bg-base-300"
				on:click={handlePrev}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="size-6"
				>
					<path
						fill-rule="evenodd"
						d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			{#each upComingMovies as Movie}
				<div class="relative w-full h-screen container mx-auto">
					<img
						class="h-full sm:h-auto w-full object-cover blur-[1px]"
						src={`https://image.tmdb.org/t/p/original${Movie.backdrop_path}`}
						alt={Movie.title}
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
					<div
						class="max-w-[850px] absolute container mx-auto sm:bottom-[6rem] md:bottom-[10rem] bottom-0 left-0 xl:left-96 sm:flex gap-4 items-end p-5 md:rounded-lg border border-gray-700 border-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg-base-300"
					>
						<img
							src={`https://image.tmdb.org/t/p/w780${Movie.poster_path}`}
							alt={`${Movie.title} Poster`}
							class="md:w-[250px] sm:w-[250px] w-[150px] opacity-80 rounded-lg transition-transform duration-500 hover:-rotate-1 hover:scale-105"
						/>
						<div class="flex flex-col gap-2 container mx-auto">
							<h3 class="font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl max-w-[450px]">
								{Movie.title}
							</h3>
							<p
								class="lg:text-xl md:text-l line-clamp-3 overflow-hidden max-w-[750px] text-zinc-400"
							>
								{Movie.overview}
							</p>
							<div class="flex items-center sm:items-start sm:flex-col sm:justify-center gap-3">
								<span class="flex items-center gap-1"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="#ff9955"
										class="size-5"
									>
										<path
											fill-rule="evenodd"
											d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
											clip-rule="evenodd"
										/>
									</svg>
									{Movie.vote_average.toFixed(2)}
									<span class="text-xs">({Movie.vote_count} votes)</span></span
								>
								<span class="flex items-center gap-1"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="#ff9955"
										class="size-5"
									>
										<path
											fill-rule="evenodd"
											d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
											clip-rule="evenodd"
										/>
									</svg>
									<span class="text-sm">{Movie.release_date}</span>
								</span>
							</div>
							<div class="flex flex-col sm:flex-row items-start justify-between">
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
								<div class="text-right px-4">
									<button
										on:click={() => goto(`/movies/${Movie.id}`)}
										class="btn btn-xs sm:btn-sm md:btn-md btn-primary w-36">Show details...</button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
			<button
				slot="next"
				class="custom-arrow custom-arrow-next rounded-l-xl absolute top-2/4 md:top-2/3 lg:top-3/4 z-40 right-0 p-2 lg:p-3 cursor-pointer border border-gray-700 border-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 hover:bg-opacity-50 bg-base-300"
				on:click={handleNext}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="size-6"
				>
					<path
						fill-rule="evenodd"
						d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>

			<!-- <div slot="next" on:click={showNextPage} class="custom-arrow custom-arrow-next">
				<i />
			</div> -->
		</Carousel>
	</div>
</div>
