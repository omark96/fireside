<script>
	export let bingoSquares;
	export let memberSquares;
	export let dir;
	let squareSize = 200;
	let current = 'foo';
</script>

<div class="bingoSquare">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<img class="bingoSquare" src="./images/june/olle/13.jpg" alt="test" />
</div>
<div class="bingoCard">
	{#each bingoSquares as bingoSquare}
		{#if memberSquares.includes(bingoSquare.id)}
			<div class="bingoSquare">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
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
		background-color: #ff3e00;
		color: white;
	}
</style>
