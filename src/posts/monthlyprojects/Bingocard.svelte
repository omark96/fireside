<script>
	export let bingoSquares;
	export let memberSquares;
	export let dir;
	let current;
	function handleClick(event) {
		current = event.target.id === current ? 'none' : event.target.id;
	}
</script>

<div class="bingoCard">
	{#each bingoSquares as bingoSquare}
		{#if memberSquares.includes(bingoSquare.id)}
			<div class="bingoSquare">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img
					class="bingoImage {current === 'img' + bingoSquare.id ? 'selected' : 'not-selected'}"
					id="img{bingoSquare.id}"
					src="./images/june/{dir}/{bingoSquare.id}.jpg"
					alt={bingoSquare.text}
					on:click={handleClick}
				/>
			</div>
		{:else}
			<div class="bingoSquare">
				<small>{bingoSquare.text}</small>
			</div>
		{/if}
	{/each}
</div>

<style>
	h1 {
		font-size: 25px;
	}
	.bingoCard {
		margin: 0;
		position: relative;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		background-color: #111111;
		width: 100%;
		aspect-ratio: 1;
	}

	.bingoSquare {
		margin: 0;
		text-align: center;
		font-size: 10px;
		font-weight: bold;
		height: calc(20%);
		width: calc(20%);
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
		max-width: 100%;
		max-height: 100%;
		height: auto;
		width: auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	@media (min-width: 768px) {
		small {
			font-size: 1rem;
		}
	}
</style>
