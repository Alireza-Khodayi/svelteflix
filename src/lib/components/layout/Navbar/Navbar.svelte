<script>
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';
	import DropDownMenu from './DropDownMenu.svelte';
	import Logo from './Logo.svelte';
	import NavMenu from './NavMenu.svelte';
	import SearchInput from './SearchInput.svelte';
</script>

<header
	class="w-full fixed top-0 z-50 border-opacity-60 border-b border-gray-400 bg-base-300 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50"
>
	<ProgressBar class="text-secondary" />
	<div class="navbar container mx-auto relative">
		<div class="navbar-start gap-2">
			<DropDownMenu />
			<Logo />
		</div>
		<div class="navbar-center w-[50%]">
			<SearchInput />
		</div>
		<nav class="navbar-end hidden lg:flex">
			<NavMenu />
		</nav>
	</div>
</header>
