<script lang="ts">
	import { browser } from '$app/environment';
	import BiographySection from '$lib/components/pages/people/BiographySection.svelte';
	import KnownForSection from '$lib/components/pages/people/KnownForSection.svelte';

	export let data;
	let Person = data.person;
	let Casts = data.credits.cast;
</script>

{#if browser}
	<div class="container mx-auto w-full py-24">
		<div class=" flex flex-col md:flex-row gap-4 w-full mt-8">
			<div class="flex flex-col justify-start items-center w-full">
				<img
					src={`https://image.tmdb.org/t/p/w780${Person.profile_path}`}
					alt={`${Person.profile_path} Poster`}
					class="mb-2 rounded-md transition-transform duration-500 hover:-rotate-1 hover:scale-105 shadow-xl w-[200px] md:w-[300px] xl:w-[350px] h-auto object-cover"
				/>
			</div>
			<div class="md:w-3/4 flex gap-4 flex-col">
				<h1 class="font-bold text-2xl md:text-3xl lg:text-4xl text-white mx-4">
					{Person.name}
				</h1>
				<BiographySection {Person} />
				<KnownForSection {Casts} />
			</div>
		</div>
	</div>
{/if}
