<script lang="ts">
	import '@picocss/pico';
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { page } from '$app/stores';
</script>

<!-- Header -->
<Header />

<!-- Black hole for other content -->
{#if $page.url.pathname === '/'}
	<main>
		<slot />
	</main>
{:else}
	<main class="container">
		<slot />
	</main>
{/if}
<!-- Footer -->
<Footer />

<style>
	main {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
