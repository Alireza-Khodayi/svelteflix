<script lang="ts">
	export let data;
	let Movie = data.movie;
	let SimilarMovie = data.similarMovies;
	let MovieTrailers = data.movieTrailers;
</script>

<div class="flex flex-col gap-8">
	<div class="relative w-full overflow-hidden">
		<div class="relative w-full h-[50vh] lg:h-[60vh] xl:h-[50vh]">
			<img
				class="w-full h-full lg:h-auto min-h-[300px] object-cover brightness-50"
				src={`https://image.tmdb.org/t/p/original${Movie.backdrop_path}`}
				alt="Poster"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
			<div class="absolute bottom-0 left-0 sm:flex gap-4 px-4 cursor-pointer mt-40 w-full">
				<div class="flex flex-col md:flex-row md:items-end gap-4 container w-full mx-auto pb-4">
					<img
						src={`https://image.tmdb.org/t/p/w780${Movie.poster_path}`}
						alt={`${Movie.title} Poster`}
						class="md:w-[200px] sm:w-[150px] w-[100px] h-auto rounded-md transition-transform duration-500 hover:-rotate-1 hover:scale-105"
					/>
					<div>
						<div class="flex flex-col md:flex-row justify-center font-semibold">
							<h2 class="text-2xl font-bold">{Movie.title}</h2>
						</div>
						<div
							class="md:min-w-96 flex gap-2 justify-between rounded-md p-4 cursor-pointer border border-gray-700 border-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 hover:bg-opacity-50 bg-base-300"
						>
							<span class="flex flex-col justify-center items-center gap-1"
								><span class="text-sm"> Rating</span>
								<span class="text-amber-500 font-semibold">{Movie.vote_average.toFixed(2)}</span>
							</span>
							<span class="flex flex-col justify-center items-center gap-1">
								<span class="text-sm">Year</span>
								<span class="text-white font-semibold">{Movie.release_date.split('-')[0]}</span>
							</span>
							<span class="flex flex-col justify-center items-center gap-1"
								><span class="text-sm">Runtime</span>
								<span class="text-white font-semibold line-clamp-1">{Movie.runtime} Min</span>
							</span>

							<span class="flex flex-col justify-center items-center gap-1"
								><span class="text-sm"> Country</span>
								<span class="text-white font-semibol line-clamp-1"
									>{Movie.production_countries[0].name}</span
								>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
