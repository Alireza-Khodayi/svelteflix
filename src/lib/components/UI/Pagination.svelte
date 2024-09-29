<script lang="ts">
	import { onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let paginationType;
	export let pageStore: Writable<number>;
	let totalPages = 30;
	let visiblePages = 5;
	let pages = [];
	$: currentPage = $paginationType;

	function updatePage() {
		pages = [];
		let start = Math.max(
			1,
			Math.min(currentPage - Math.floor(visiblePages / 2), totalPages - visiblePages + 1)
		);
		let end = Math.min(totalPages, start + visiblePages - 1);
		for (let i = start; i <= end; i++) {
			pages.push(i);
		}
	}
	function setPage(page) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
		} else if (page < 1) {
			currentPage = 1;
		} else {
			currentPage = totalPages;
		}
		pageStore.set(currentPage);
		updatePage();
	}
	function goToPrevPage() {
		setPage(currentPage - 1);
	}

	function goToNextPage() {
		setPage(currentPage + 1);
	}

	onMount(() => {
		updatePage();
	});
</script>

<div class="join">
	<button on:click={goToPrevPage} disabled={currentPage === 1} class="join-item btn">«</button>
	{#each pages as Page}
		<button
			on:click={() => {
				setPage(Page);
			}}
			class="join-item btn"
			class:btn-active={currentPage === Page}>{Page}</button
		>
	{/each}
	<button on:click={goToNextPage} disabled={currentPage === totalPages} class="join-item btn"
		>»</button
	>
</div>
