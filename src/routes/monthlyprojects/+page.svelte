<script>
	import Bingocard from './Bingocard.svelte';
	import { bingoSquares } from './squaresData.js';
	import { memberSquares } from './memberData.js';

	/*let bingosquares = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
	];*/
</script>

<svelte:head>
	<title>Monthly Projects</title>
	<meta name="description" content="Fireside's monthly projects" />
</svelte:head>
<div>
	{#each memberSquares as { name, dir, images }}
		<h1>{name}</h1>
		<Bingocard {bingoSquares} memberSquares={images} {dir} />
	{/each}
</div>
