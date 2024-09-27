<script lang="ts">
	import MovieCard from '$lib/components/UI/MovieCard.svelte';
	import Carousel from 'svelte-carousel';
	export let Casts;

	let carousel: Carousel;

	function handlePrev() {
		carousel.goToPrev();
	}
	function handleNext() {
		carousel.goToNext();
	}

	let innerWidth = 0;
	$: particlesToShow =
		innerWidth >= 1480
			? 5
			: innerWidth >= 1280
				? 4
				: innerWidth >= 1000
					? 4
					: innerWidth >= 768
						? 4
						: 2;
</script>

<svelte:window bind:innerWidth />
<div class="bg-base-300 p-5 md:rounded-lg shadow-xl w-full">
	<div class="flex flex-col gap-2">
		<h3 class="text-lg font-bold text-zinc-200">Known For</h3>
		<Carousel
			bind:this={carousel}
			autoplay
			timingFunction="ease-in-out"
			dots={false}
			particlesToScroll={1}
			duration={300}
			pauseOnFocus={true}
			{particlesToShow}
		>
			<button
				slot="prev"
				class="custom-arrow custom-arrow-prev rounded-md absolute top-1/3 -left-3 z-40 p-4 cursor-pointer border border-gray-700 border-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 hover:bg-opacity-50 bg-base-300"
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
			{#each Casts as Movie, index}
				<MovieCard {Movie} />
			{/each}
			<button
				slot="next"
				class="custom-arrow custom-arrow-next rounded-md absolute top-1/3 z-40 -right-3 p-4 cursor-pointer border border-gray-700 border-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 hover:bg-opacity-50 bg-base-300"
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
		</Carousel>
	</div>
</div>
