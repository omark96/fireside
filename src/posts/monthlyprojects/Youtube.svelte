<script>
	export let link;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<iframe
	src="https://www.youtube.com/embed/{link}"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
/>

<style>
	iframe {
		height: 160px;
		width: 300px;
	}
	@media screen and (min-width: 768px) {
		iframe {
			height: 360px;
			width: 640px;
		}
	}
</style>
