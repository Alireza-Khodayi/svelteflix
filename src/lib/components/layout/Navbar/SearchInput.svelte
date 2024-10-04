<script lang="ts">
	import { search } from '$lib/api/searchApi';
	import PosterImage from '$lib/components/UI/Images/PosterImage.svelte';
	import SearchItemsAcordian from '$lib/components/UI/Search/SearchItemsAcordian.svelte';

	let debounceTimeOut: any;
	let searchQuery = '';
	let searchResults: { movies: any[]; tvShows: any[]; persons: any[] } = {
		movies: [],
		tvShows: [],
		persons: []
	};

	let showDropDown = false;
	async function handleChange(event) {
		clearTimeout(debounceTimeOut);
		searchQuery = event.target.value;
		debounceTimeOut = setTimeout(async () => {
			if (searchQuery.trim().length > 0) {
				searchResults = await search(searchQuery);
				showDropDown = true;
				console.log(searchResults);
			} else {
				searchResults = { movies: [], tvShows: [], persons: [] };
				showDropDown = false;
			}
		}, 300);
	}

	function handleClickItems() {
		showDropDown = false;
		searchQuery = '';
		searchResults = { movies: [], tvShows: [], persons: [] };
	}

	let isOpen = 1;
</script>

<div class="w-full">
	<input
		on:input={handleChange}
		bind:value={searchQuery}
		type="text"
		placeholder="Search"
		class="bg-transparent bg-clip-padding backdrop-filter backdrop-blur-sm border border-gray-400 border-opacity-50 input input-bordered w-[90%] md:w-full focus:ring-1 focus:ring-secondary focus:shadow-secondary focus:shadow-sm"
	/>
	{#if searchQuery && showDropDown && (searchResults.movies.length > 0 || searchResults.tvShows.length > 0 || searchResults.persons.length > 0)}
		<div
			class="absolute top-full left-0 lg:left-40 xl:left-52 z-50 w-full rounded-lg border-opacity-60 border-b border-gray-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-90 bg-base-100 animate-fadeInDown md:max-w-screen-lg overflow-y-auto h-[90vh]"
		>
			<div
				class="mb-4 pb-10 border-opacity-60 border-b border-gray-400 bg-base-300 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50"
			>
				{#if searchResults.movies.length > 0}
					<SearchItemsAcordian
						DataList={searchResults.movies}
						GroupItem={1}
						{isOpen}
						ItemsClickHandler={handleClickItems}
						Title="Movies"
						ItemsBaseUrl="/movies"
					/>
				{/if}

				{#if searchResults.tvShows.length > 0}
					<SearchItemsAcordian
						DataList={searchResults.tvShows}
						GroupItem={2}
						{isOpen}
						ItemsClickHandler={handleClickItems}
						Title="TV Shows"
						ItemsBaseUrl="/tv/series"
					/>
				{/if}

				{#if searchResults.persons.length > 0}<SearchItemsAcordian
						DataList={searchResults.persons}
						GroupItem={3}
						{isOpen}
						ItemsClickHandler={handleClickItems}
						Title="People"
						ItemsBaseUrl="/people"
					/>
				{/if}
			</div>
		</div>
	{/if}
</div>
