<script lang="ts">
	export let data;
	import { page } from '$app/stores';
	import { formatDate } from '$lib/utils';

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
	<hgroup>
		<h1>{data.meta.title}</h1>
		<h2>{formatDate(data.meta.date)}</h2>
	</hgroup>
	<!-- Post -->
	<div>
		<svelte:component this={data.content} />
	</div>
</article>
