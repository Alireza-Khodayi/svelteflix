<script>
	import DropDownMenu from './DropDownMenu.svelte';
	import Logo from './Logo.svelte';
	import NavMenu from './NavMenu.svelte';
	import SearchInput from './SearchInput.svelte';
</script>

<header
	class="w-full border-b border-opacity-60 border-primary bg-base-300 fixed top-0 z-50 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10"
>
	<div class="navbar container mx-auto">
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
