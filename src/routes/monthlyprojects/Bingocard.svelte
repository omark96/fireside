<script>
	export let bingoSquares;
	export let memberSquares;
	export let dir;
	let squareSize = 200;
	let current;
	function handleClick(event) {
		if (event.target.id === current) {
			current = 'none';
		} else {
			current = event.target.id;
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<img
	class="bingoSquare {current === 'img0' ? 'selected' : ''}"
	id="img0"
	src="./images/june/olle/0.jpg"
	alt="test test"
	on:click={handleClick}
/>

<div class="bingoCard">
	{#each bingoSquares as bingoSquare}
		{#if memberSquares.includes(bingoSquare.id)}
			<div class="bingoSquare">
				<img
					class="bingoSquare"
					src="./images/june/{dir}/{bingoSquare.id}.jpg"
					alt={bingoSquare.text}
				/>
			</div>
		{:else}
			<div class="bingoSquare">
				<h1>{bingoSquare.text}</h1>
			</div>
		{/if}
	{/each}
</div>

<style>
	h1 {
		font-size: 25px;
	}
	.bingoCard {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		background-color: white;
		width: 1000px;
		height: 1000px;
	}
	.bingoSquare {
		margin: 0;
		text-align: center;
		height: 198px;
		width: 198px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-style: solid;
		border-color: black;
		border-width: 1px;
	}
	.selected {
		position: relative;
		width: 500px;
		height: 500px;
	}
</style>
