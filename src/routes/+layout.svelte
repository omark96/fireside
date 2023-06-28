<script lang="ts">
	import '@picocss/pico';
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import PageTransition from './Transition.svelte';
	import { page } from '$app/stores';
	export let data;
</script>

<!-- Header -->
<Header />

<!-- Black hole for other content -->
<PageTransition url={data.url}>
	{#if $page.url.pathname === '/'}
		<main>
			<slot />
		</main>
	{:else}
		<main class="container">
			<slot />
		</main>
	{/if}
</PageTransition>
<!-- Footer -->
<Footer />

<style>
	main {
		min-height: calc(100vh - 180px);
	}
</style>
