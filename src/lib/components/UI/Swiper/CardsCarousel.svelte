<script lang="ts">
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();

	export let DataList;
	export let AditionalData: any | undefined = undefined;
	export let CarouselTitle;
	export let CarouselType;
	export let ShowAllLink: string | undefined = undefined;
	export let Item;
	export let CardSize: 'small' | 'medium' | 'large' | 'extraLarge' = 'small';

	const spaceBetween = 5;
	let BreakPoints: any;
	if (CardSize === 'small') {
		BreakPoints = {
			300: {
				slidesPerView: 2
			},
			400: {
				slidesPerView: 3
			},
			700: {
				slidesPerView: 4
			},
			1024: {
				slidesPerView: 5
			},
			1280: {
				slidesPerView: 6
			},
			1400: {
				slidesPerView: 7
			}
		};
	} else if (CardSize === 'large') {
		BreakPoints = {
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
		};
	} else if (CardSize === 'extraLarge') {
		BreakPoints = { 100: { slidesPerView: 1 }, 1280: { slidesPerView: 2 } };
	}
</script>

<div class="container mx-auto w-full py-6 px-4">
	<div class="flex items-center justify-between w-full">
		<h3 class="font-bold text-lg md:text-xl lg:text-2xl mb-4">
			<span
				class="bg-clip-text text-transparent bg-gradient-to-tr from-primary to-secondary via-accent animate-gradient-xy"
				>{CarouselTitle}</span
			>
			{CarouselType}
		</h3>
		{#if ShowAllLink}
			<a
				href={ShowAllLink}
				class="btn btn-primary bg-gradient-to-tr from-primary to-secondary via-accent animate-gradient-xy"
				>Show All</a
			>
		{/if}
	</div>
	<swiper-container
		free-mode={true}
		minimumVelocity={1}
		slides-per-view={1}
		space-between={spaceBetween}
		autoplay={true}
		breakpoints={BreakPoints}
	>
		{#each DataList as Data, index}
			<swiper-slide>
				<svelte:component this={Item} {Data} {AditionalData} />
			</swiper-slide>
		{/each}
	</swiper-container>
</div>
