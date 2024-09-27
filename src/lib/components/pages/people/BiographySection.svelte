<script>
	export let Person;
</script>

<div class="bg-base-300 p-5 md:rounded-lg shadow-xl w-full">
	<div class="flex flex-col gap-2">
		<h3 class="text-lg font-bold text-zinc-200">Biography</h3>
		<p class="text-zinc-400">{Person.biography}</p>
	</div>
</div>
