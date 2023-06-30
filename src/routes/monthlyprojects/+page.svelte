<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<h1>Monthly Projects</h1>
{#each data.posts as post}
	<a href={post.slug} class="card-link contrast">
		<article>
			<img
				src="./monthlyprojects/images/{new Date(post.date)
					.toDateString()
					.slice(4, 7)
					.toLowerCase()}/card-image.jpg"
				alt={post.title}
				class="card-image"
			/>
			<div class="card-text">
				<hgroup>
					<h1>{post.title}</h1>
					<h2>{formatDate(post.date)}</h2>
				</hgroup>
				<div class="post-description"><p>{post.description}</p></div>
			</div>
		</article>
	</a>
{/each}

<style>
	article {
		border-radius: 1rem;
		padding: 0;
		padding-bottom: 1rem;
	}
	.card-link {
		text-decoration: none;
	}
	.card-text {
		display: flex;
		flex-direction: column;
		margin: 1rem;
	}
	.card-image {
		border-top-right-radius: 1rem;
		border-top-left-radius: 1rem;
		width: 100%;
		max-height: 200px;
		object-fit: cover;
		margin-bottom: 1rem;
	}

	@media (min-width: 768px) {
		article {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			padding-bottom: 0;
		}
		.card-text {
			margin-left: 2rem;
			margin-bottom: 2rem;
			width: 45%;
		}
		.card-image {
			width: 45%;
			max-height: 100%;
			border-top-left-radius: 0;
			border-bottom-right-radius: 1rem;
			margin-bottom: 0;
		}
	}
</style>
