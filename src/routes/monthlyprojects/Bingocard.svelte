<script>
	export let bingoSquares;
	export let memberSquares;
	export let dir;
	let squareSize = 200;
	let current;
	const handleClick = (event) => {
		current = event.target.id === current ? 'none' : event.target.id;
	};
</script>

<div class="bingoCard">
	{#each bingoSquares as bingoSquare}
		{#if memberSquares.includes(bingoSquare.id)}
			<div class="bingoSquare">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img
					class="bingoImage {current === 'img' + bingoSquare.id
						? 'selected'
						: 'not-selected'}"
					id="img{bingoSquare.id}"
					src="./images/june/{dir}/{bingoSquare.id}.jpg"
					alt={bingoSquare.text}
					on:click={handleClick}
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
		position: relative;
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
		height: calc(20% - 2px);
		width: calc(20% - 2px);
		display: flex;
		align-items: center;
		justify-content: center;
		border-style: solid;
		border-color: black;
		border-width: 1px;
	}
	.not-selected {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.selected {
		position: absolute;
		max-width: 900px;
		max-height: 900px;
		height: auto;
		width: auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		border-style: solid;
		border-color: black;
	}
</style>
