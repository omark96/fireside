<script lang="ts">
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->

{#each data.posts as post}
	<a href={post.slug} class="card-link contrast">
		<article>
			<h1>{post.title}</h1>
			{post.description}
			<!-- svelte-ignore a11y-missing-content -->
		</article>
	</a>
{/each}

<style>
	.card-link {
		text-decoration: none;
	}
</style>
