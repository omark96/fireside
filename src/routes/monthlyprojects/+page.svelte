<script>
	import Bingocard from './Bingocard.svelte';
	import Bingocard2 from './Bingocard2.svelte';
	import { bingoSquares } from './squaresData.js';
	import { memberSquares } from './memberData.js';
	let activeTabValue = 'Olle';
	const handleClick = (tabValue) => () => (activeTabValue = tabValue);

	/*let bingosquares = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
	];*/
	function testClick() {
		console.log('Test');
	}
</script>

<svelte:head>
	<title>Monthly Projects</title>
	<meta name="description" content="Fireside's monthly projects" />
</svelte:head>

<div>
	<ul>
		{#each memberSquares as { name }}
			<li class={activeTabValue === name ? 'active' : ''}>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span on:click={handleClick(name)}>{name}</span>
			</li>
		{/each}
	</ul>
	{#each memberSquares as { dir, images, name }}
		{#if activeTabValue === name}
			<Bingocard {bingoSquares} memberSquares={images} {dir} />
		{/if}
	{/each}
	<!-- {#each memberSquares as { dir, images }}
		<Bingocard {bingoSquares} memberSquares={images} {dir} />
	{/each} -->
</div>

<style>
	ul {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		list-style: none;
	}
	li {
		background-color: #eee;
		margin: 5px;
		border-style: solid;
		border-width: 1px;
		border-radius: 10px;
	}

	span {
		display: block;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}

	li.active {
		color: #495057;
		background-color: #fff;
	}
</style>
