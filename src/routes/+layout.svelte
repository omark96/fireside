<script lang="ts">
	import '@picocss/pico';
	import '../app.css';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
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
