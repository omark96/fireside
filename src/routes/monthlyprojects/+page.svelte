<script>
	import Bingocard from './Bingocard.svelte';
	import { bingoSquares } from './squaresData.js';
	import { memberSquares } from './memberData.js';

	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<svelte:head>
	<title>Monthly Projects</title>
	<meta name="description" content="Fireside's monthly projects" />
</svelte:head>

<div on:mousemove={handleMousemove}>
	The mouse position is {m.x} x {m.y}
</div>

<div>
	{#each memberSquares as { name, dir, images }}
		<h1>{name}</h1>
		<Bingocard {bingoSquares} memberSquares={images} {dir} />
	{/each}
</div>
