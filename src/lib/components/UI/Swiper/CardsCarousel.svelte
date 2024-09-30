<script lang="ts">
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();

	export let DataList;
	export let CarouselTitle;
	export let CarouselType;
	export let ShowAllLink = undefined;
	export let Item;

	const spaceBetween = 5;
</script>

<div class="container mx-auto w-full py-10 px-4">
	<div class="flex items-center justify-between w-full mb-6">
		<h3 class="font-bold text-lg md:text-xl lg:text-2xl cursor-pointer">
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
		slides-per-view={2}
		space-between={spaceBetween}
		autoplay={true}
		breakpoints={{
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
		}}
	>
		{#each DataList as Data, index}
			<swiper-slide>
				<svelte:component this={Item} {Data} />
			</swiper-slide>
		{/each}
	</swiper-container>
</div>
