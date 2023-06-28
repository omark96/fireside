<script lang="ts">
	export let data;
	import { page } from '$app/stores';

	let currentPath = $page.url.pathname.split('/');
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<!-- Title -->

	<h1>{data.meta.title}</h1>

	<!-- Post -->
	<div>
		<svelte:component this={data.content} />
	</div>
</article>
