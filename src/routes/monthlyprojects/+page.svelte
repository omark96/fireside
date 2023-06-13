<script>
	import Bingocard from './Bingocard.svelte';
	import { bingoSquares } from './squaresData.js';
	import { memberSquares } from './memberData.js';

	function test() {
		console.log('test test');
	}
</script>

<svelte:head>
	<title>Monthly Projects</title>
	<meta name="description" content="Fireside's monthly projects" />
</svelte:head>

<button
	on:click={(e) => {
		console.log(e.target);
	}}>Test</button
>

<div>
	{#each memberSquares as { name, dir, images }}
		<h1>{name}</h1>
		<Bingocard {bingoSquares} memberSquares={images} {dir} />
	{/each}
</div>
