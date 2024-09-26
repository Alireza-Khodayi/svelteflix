<script lang="ts">
	import Carousel from 'svelte-carousel';

	export let MovieTrailers;

	let carousel: Carousel;

	function handlePrev() {
		carousel.goToPrev();
	}
	function handleNext() {
		carousel.goToNext();
	}

	let innerWidth = 0;
	$: particlesToShow = innerWidth >= 1280 ? 3 : innerWidth >= 1024 ? 2 : 1;
</script>

<svelte:window bind:innerWidth />
<div class="container mx-auto w-full mt-4 md:mt-0">
	<div class="bg-base-300 p-5 rounded-lg shadow-xl flex flex-col">
		<h3 class="text-xl font-bold mb-2">Trailers</h3>
		<Carousel
			bind:this={carousel}
			autoplay
			timingFunction="ease-in-out"
			dots={false}
			particlesToScroll={1}
			duration={300}
			pauseOnFocus={true}
			{particlesToShow}
			><button
				slot="prev"
				class="custom-arrow custom-arrow-prev rounded-xl absolute top-2/4 md:top-2/3 lg:top-3/4 left-0 z-40 p-2 lg:p-3 cursor-pointer border border-gray-700 border-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 hover:bg-opacity-50 bg-base-300"
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
			</button>{#each MovieTrailers as Trailer}
				<div class="rounded-lg flex-col w-full mx-1">
					<iframe
						width="100%"
						class="rounded-lg"
						src={`https://www.youtube.com/embed/${Trailer.key}`}
						allowfullscreen
						title={Trailer.name}
					></iframe>
					<p class="px-3">{Trailer.name}</p>
				</div>
			{/each}<button
				slot="next"
				class="custom-arrow custom-arrow-next rounded-xl absolute top-2/4 md:top-2/3 lg:top-3/4 z-40 right-0 p-2 lg:p-3 cursor-pointer border border-gray-700 border-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 hover:bg-opacity-50 bg-base-300"
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
			</button></Carousel
		>
	</div>
</div>
