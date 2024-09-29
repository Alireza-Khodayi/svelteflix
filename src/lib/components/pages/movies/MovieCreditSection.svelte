<script lang="ts">
	import PeopleCard from '$lib/components/UI/PeopleCard.svelte';
	import Carousel from 'svelte-carousel';
	export let MovieCredit;

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
			? 7
			: innerWidth >= 1280
				? 6
				: innerWidth >= 1000
					? 5
					: innerWidth >= 768
						? 4
						: 3;
</script>

<svelte:window bind:innerWidth />
<div class="container mx-auto w-full mt-2 py-2">
	<div class="bg-base-300 shadow-2xl rounded-lg p-5 w-full">
		<h3 class="text-xl font-bold mb-4">Top Billed Cast</h3>
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
			{#each MovieCredit.cast as Actor}
				<PeopleCard People={Actor} />
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
