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
	<div class="bingoGrid">
		{#each bingoSquares as bingoSquare}
			{#if memberSquares.includes(bingoSquare.id)}
				<div
					class="bingoSquare {current === 'img' + bingoSquare.id
						? 'selected'
						: 'not-selected'}"
				>
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
					<div class="textWrapper">
						<h1>{bingoSquare.text}</h1>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	h1 {
		font-size: 25px;
	}
	.bingoCard {
		border: 1px solid black;
		height: 0;
		padding-bottom: 100%;
		position: relative;
		background-color: black;
	}
	.bingoGrid {
		display: grid;
		grid-template-columns: repeat(5, calc(20% - 4px));
		grid-gap: 5px;
	}
	.bingoSquare {
		display: flex;
		justify-content: center;
		overflow: hidden;
		position: relative;
		background-color: white;
		height: 0;
		width: 100%;
		padding-bottom: 100%;
	}
	div.selected {
		z-index: 100;
		position: absolute;
		background-color: #222;
	}
	img.selected {
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
	}
	img.not-selected {
		width: 100px;
		height: 100px;
		object-fit: cover;
	}
	.textWrapper {
		display: block;
		align-items: center;
		height: 100%;
	}
</style>
