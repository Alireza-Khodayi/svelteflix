<script>
	import Footer from '$lib/components/layout/Footer/Footer.svelte';
	import Main from '$lib/components/layout/Main/Main.svelte';
	import BottomNavigation from '$lib/components/layout/BottomNavbar/BottomNavigation.svelte';
	import Navbar from '$lib/components/layout/Navbar/Navbar.svelte';
	import '../app.css';
</script>

<Navbar />
<Main>
	<slot />
</Main>
<Footer />
<BottomNavigation />
