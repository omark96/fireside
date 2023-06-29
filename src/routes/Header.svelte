<script lang="ts">
	import * as config from '$lib/config';
</script>

<nav class="container">
	<!-- Title -->
	<ul class="logo">
		<li><a href="/"><img src="fireside.svg" alt="Fireside logo" /></a></li>
		<li><a href="/"><strong> {config.title} </strong> </a></li>
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
	.logo img {
		height: 2.5rem;
		width: auto;
	}
</style>
