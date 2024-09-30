<script lang="ts">
	import placeholder from '$lib/assets/placeholder.png';

	const arr = new Array(20).fill(0);
</script>

{#each arr as item}
	<div class="max-w-40 mx-auto bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
		<div class="relative skeleton flex items-center justify-center">
			<img class="w-full opacity-50" src={placeholder} alt="placeholder" />
		</div>
		<div class="p-4 space-y-2">
			<div class="h-4 skeleton w-full"></div>
			<div class="h-4 skeleton w-2/4"></div>
		</div>
	</div>
{/each}
