<script lang="ts">
	import * as config from '$lib/config';
</script>

<nav class="container">
	<!-- Title -->
	<ul class="logo">
		<img src="fireside.svg" />
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
		display: flex;
		flex-direction: row;
	}
	.logo > img {
		height: 50%;
	}
</style>
