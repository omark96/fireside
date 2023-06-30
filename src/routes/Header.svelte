<script lang="ts">
	import * as config from '$lib/config';
	import Firesidelogo from './Firesidelogo.svelte';
</script>

<nav class="container">
	<!-- Title -->
	<ul class="logo">
		<li>
			<a href="/"
				><Firesidelogo />
				<div class="logo-text">{config.title}</div></a
			>
		</li>
	</ul>
	<!-- Navigation -->
	<ul class="links">
		<li>
			<a href="/monthlyprojects">Monthly Projects</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
	</ul>
</nav>

<style>
	.logo {
		font-size: 1.5rem;
	}
	.logo > li {
		padding: 0;
	}
	.logo a {
		display: flex;
		align-items: center;
		flex-direction: row;
		font-weight: bold;
	}
</style>
