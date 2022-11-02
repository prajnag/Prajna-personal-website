<script>
	import MediaQuery from '../components/MediaQuery.svelte';

	import MobileNavbar from '../components/MobileNavbar.svelte';

	import Content from './../components/Content.svelte';
	import Navbar from './../components/Navbar.svelte';
</script>

<MediaQuery query="(max-width: 480px)" let:matches>
	{#if matches}
		<MobileNavbar />
	{:else}
		<Navbar />
	{/if}
</MediaQuery>

<Content />
