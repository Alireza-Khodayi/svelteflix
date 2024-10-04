<script>
	import HeroSectionBackdropImage from '$lib/components/UI/Images/HeroSectionBackdropImage.svelte';
	import PosterImage from '$lib/components/UI/Images/PosterImage.svelte';
	import { getCountryName } from '$lib/utils/get-country-name';

	export let Series;
</script>

<div class="flex flex-col gap-8">
	<div class="relative w-full overflow-hidden">
		<div class="relative w-full h-[70vh] lg:h-[60vh] xl:h-[70vh]">
			<HeroSectionBackdropImage Backdrop={Series.backdrop_path} />
			<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
			<div class="absolute bottom-0 left-0 sm:flex gap-4 px-4 mt-40 w-full">
				<div class="flex flex-col md:flex-row md:items-end gap-4 container w-full mx-auto pb-4">
					<PosterImage Poster={Series.poster_path} alt={Series.name} />
					<div class="max-w-[450px]">
						<div class="flex flex-col justify-center font-semibold gap-2 mb-3">
							<h1 class="text-2xl font-bold text-white">
								{Series?.name} ({Series.first_air_date?.split('-')[0]})
							</h1>
							<p class="text-zinc-400 md:text-lg lg:text-xl">{Series?.tagline}</p>
						</div>
						<div
							class="md:min-w-96 flex gap-2 justify-between rounded-md p-4 border border-gray-700 border-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 hover:bg-opacity-50 bg-base-300"
						>
							<span class="flex flex-col justify-center items-center gap-1"
								><span class="text-sm"> Rating</span>
								<span class="text-amber-500 font-semibold flex gap-1"
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
									</svg>{Series.vote_average?.toFixed(2)}</span
								>
							</span>
							<span class="flex flex-col justify-center items-center gap-1"
								><span class="text-sm">Seasons</span>
								<span class="text-white font-semibold line-clamp-1">{Series.number_of_seasons}</span
								>
							</span>

							<span class="flex flex-col justify-center items-center gap-1"
								><span class="text-sm"> Episodes</span>
								<span class="text-white font-semibol line-clamp-1">{Series.number_of_episodes}</span
								>
							</span>
							<span class="flex flex-col justify-center items-center gap-1">
								<span class="text-sm">Country</span>
								<span class="text-white font-semibold">{getCountryName(Series)}</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
