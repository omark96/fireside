<div class="fireflies">
	<!-- Quantity should be the same in Sass-->
	<div class="firefly" />
	<div class="firefly" />
	<div class="firefly" />
	<div class="firefly" />
	<div class="firefly" />
	<div class="firefly" />
	<div class="firefly" />
	<div class="firefly" />
	<div class="firefly" />
	<div class="firefly" />
	<div class="firefly" />
	<div class="firefly" />
	<div class="firefly" />
	<div class="firefly" />
	<div class="firefly" />
	<div class="welcome-text">Welcome to <br /> Fireside</div>
</div>

<style>
	.fireflies {
		height: calc(100vh - 70px);
		background: url(https://cdn.discordapp.com/attachments/1093144733049696296/1122991506408607894/olge.gg_campfire_at_night_cozy_tent_forest_drawing_0ccf5fdf-1607-4d40-87cc-4f592d95eb9a.png);
		background-position: center;
		background-size: cover;
		overflow: hidden;
	}
	.welcome-text {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		font-size: 3rem;
		font-weight: bold;
		color: white;
	}
	.firefly {
		position: fixed;
		left: 50%;
		top: 50%;
		width: 0.4vw;
		height: 0.4vw;
		margin: -0.2vw 0 0 9.8vw;
		animation: ease 200s alternate infinite;
		pointer-events: none;
	}
	.firefly::before,
	.firefly::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		transform-origin: -10vw;
	}
	.firefly::before {
		background: black;
		opacity: 0.4;
		animation: drift ease alternate infinite;
	}
	.firefly::after {
		background: white;
		opacity: 0;
		box-shadow: 0 0 0vw 0vw yellow;
		animation: drift ease alternate infinite, flash ease infinite;
	}

	.firefly:nth-child(1) {
		animation-name: move1;
	}
	.firefly:nth-child(1)::before {
		animation-duration: 11s;
	}
	.firefly:nth-child(1)::after {
		animation-duration: 11s, 9229ms;
		animation-delay: 0ms, 4776ms;
	}

	@media screen and (min-width: 768px) {
		.welcome-text {
			font-size: 6rem;
		}
	}

	@keyframes move1 {
		0% {
			transform: translateX(-44vw) translateY(42vh) scale(0.71);
		}
		4.347826087% {
			transform: translateX(42vw) translateY(-22vh) scale(0.91);
		}
		8.6956521739% {
			transform: translateX(29vw) translateY(37vh) scale(0.82);
		}
		13.0434782609% {
			transform: translateX(7vw) translateY(-6vh) scale(0.75);
		}
		17.3913043478% {
			transform: translateX(47vw) translateY(8vh) scale(0.62);
		}
		21.7391304348% {
			transform: translateX(0vw) translateY(-16vh) scale(0.83);
		}
		26.0869565217% {
			transform: translateX(-22vw) translateY(-27vh) scale(0.8);
		}
		30.4347826087% {
			transform: translateX(47vw) translateY(-47vh) scale(0.77);
		}
		34.7826086957% {
			transform: translateX(46vw) translateY(-35vh) scale(0.26);
		}
		39.1304347826% {
			transform: translateX(7vw) translateY(20vh) scale(0.69);
		}
		43.4782608696% {
			transform: translateX(21vw) translateY(32vh) scale(0.94);
		}
		47.8260869565% {
			transform: translateX(-26vw) translateY(-9vh) scale(0.9);
		}
		52.1739130435% {
			transform: translateX(-8vw) translateY(-7vh) scale(0.47);
		}
		56.5217391304% {
			transform: translateX(-34vw) translateY(-33vh) scale(0.65);
		}
		60.8695652174% {
			transform: translateX(41vw) translateY(-11vh) scale(0.6);
		}
		65.2173913043% {
			transform: translateX(-31vw) translateY(43vh) scale(0.52);
		}
		69.5652173913% {
			transform: translateX(-6vw) translateY(-37vh) scale(0.94);
		}
		73.9130434783% {
			transform: translateX(-44vw) translateY(37vh) scale(0.39);
		}
		78.2608695652% {
			transform: translateX(45vw) translateY(49vh) scale(0.45);
		}
		82.6086956522% {
			transform: translateX(-10vw) translateY(-49vh) scale(0.79);
		}
		86.9565217391% {
			transform: translateX(10vw) translateY(-42vh) scale(0.36);
		}
		91.3043478261% {
			transform: translateX(40vw) translateY(46vh) scale(0.54);
		}
		95.652173913% {
			transform: translateX(-17vw) translateY(1vh) scale(0.82);
		}
		100% {
			transform: translateX(21vw) translateY(42vh) scale(0.58);
		}
	}
	.firefly:nth-child(2) {
		animation-name: move2;
	}
	.firefly:nth-child(2)::before {
		animation-duration: 14s;
	}
	.firefly:nth-child(2)::after {
		animation-duration: 14s, 6031ms;
		animation-delay: 0ms, 2846ms;
	}

	@keyframes move2 {
		0% {
			transform: translateX(17vw) translateY(-24vh) scale(0.97);
		}
		5% {
			transform: translateX(48vw) translateY(39vh) scale(0.98);
		}
		10% {
			transform: translateX(-41vw) translateY(-45vh) scale(0.49);
		}
		15% {
			transform: translateX(-28vw) translateY(23vh) scale(0.61);
		}
		20% {
			transform: translateX(12vw) translateY(-40vh) scale(0.38);
		}
		25% {
			transform: translateX(-7vw) translateY(26vh) scale(0.88);
		}
		30% {
			transform: translateX(-1vw) translateY(-4vh) scale(0.58);
		}
		35% {
			transform: translateX(15vw) translateY(8vh) scale(0.87);
		}
		40% {
			transform: translateX(0vw) translateY(42vh) scale(0.82);
		}
		45% {
			transform: translateX(2vw) translateY(-35vh) scale(0.71);
		}
		50% {
			transform: translateX(-11vw) translateY(10vh) scale(1);
		}
		55% {
			transform: translateX(32vw) translateY(40vh) scale(0.89);
		}
		60% {
			transform: translateX(20vw) translateY(-1vh) scale(0.41);
		}
		65% {
			transform: translateX(46vw) translateY(10vh) scale(0.78);
		}
		70% {
			transform: translateX(-19vw) translateY(-15vh) scale(0.54);
		}
		75% {
			transform: translateX(19vw) translateY(-16vh) scale(0.54);
		}
		80% {
			transform: translateX(14vw) translateY(17vh) scale(0.41);
		}
		85% {
			transform: translateX(7vw) translateY(16vh) scale(0.39);
		}
		90% {
			transform: translateX(16vw) translateY(45vh) scale(0.68);
		}
		95% {
			transform: translateX(43vw) translateY(-2vh) scale(0.7);
		}
		100% {
			transform: translateX(6vw) translateY(44vh) scale(0.81);
		}
	}
	.firefly:nth-child(3) {
		animation-name: move3;
	}
	.firefly:nth-child(3)::before {
		animation-duration: 16s;
	}
	.firefly:nth-child(3)::after {
		animation-duration: 16s, 6230ms;
		animation-delay: 0ms, 2592ms;
	}

	@keyframes move3 {
		0% {
			transform: translateX(-38vw) translateY(42vh) scale(0.37);
		}
		3.8461538462% {
			transform: translateX(15vw) translateY(1vh) scale(0.62);
		}
		7.6923076923% {
			transform: translateX(42vw) translateY(-43vh) scale(0.49);
		}
		11.5384615385% {
			transform: translateX(-43vw) translateY(11vh) scale(0.93);
		}
		15.3846153846% {
			transform: translateX(-34vw) translateY(19vh) scale(0.95);
		}
		19.2307692308% {
			transform: translateX(-42vw) translateY(13vh) scale(0.93);
		}
		23.0769230769% {
			transform: translateX(-34vw) translateY(-25vh) scale(0.99);
		}
		26.9230769231% {
			transform: translateX(-18vw) translateY(-39vh) scale(0.57);
		}
		30.7692307692% {
			transform: translateX(38vw) translateY(-25vh) scale(0.68);
		}
		34.6153846154% {
			transform: translateX(21vw) translateY(45vh) scale(0.37);
		}
		38.4615384615% {
			transform: translateX(18vw) translateY(-7vh) scale(0.29);
		}
		42.3076923077% {
			transform: translateX(-8vw) translateY(-10vh) scale(0.8);
		}
		46.1538461538% {
			transform: translateX(-3vw) translateY(-25vh) scale(0.62);
		}
		50% {
			transform: translateX(0vw) translateY(-4vh) scale(0.45);
		}
		53.8461538462% {
			transform: translateX(-26vw) translateY(-40vh) scale(0.99);
		}
		57.6923076923% {
			transform: translateX(23vw) translateY(49vh) scale(0.93);
		}
		61.5384615385% {
			transform: translateX(6vw) translateY(-38vh) scale(0.47);
		}
		65.3846153846% {
			transform: translateX(-42vw) translateY(-45vh) scale(0.46);
		}
		69.2307692308% {
			transform: translateX(-38vw) translateY(35vh) scale(0.57);
		}
		73.0769230769% {
			transform: translateX(-47vw) translateY(-39vh) scale(0.32);
		}
		76.9230769231% {
			transform: translateX(-40vw) translateY(-22vh) scale(0.55);
		}
		80.7692307692% {
			transform: translateX(-16vw) translateY(-29vh) scale(0.79);
		}
		84.6153846154% {
			transform: translateX(30vw) translateY(-17vh) scale(0.51);
		}
		88.4615384615% {
			transform: translateX(25vw) translateY(39vh) scale(0.34);
		}
		92.3076923077% {
			transform: translateX(35vw) translateY(31vh) scale(0.66);
		}
		96.1538461538% {
			transform: translateX(48vw) translateY(-27vh) scale(0.57);
		}
		100% {
			transform: translateX(1vw) translateY(39vh) scale(0.92);
		}
	}
	.firefly:nth-child(4) {
		animation-name: move4;
	}
	.firefly:nth-child(4)::before {
		animation-duration: 15s;
	}
	.firefly:nth-child(4)::after {
		animation-duration: 15s, 5382ms;
		animation-delay: 0ms, 4983ms;
	}

	@keyframes move4 {
		0% {
			transform: translateX(1vw) translateY(-30vh) scale(0.86);
		}
		4.347826087% {
			transform: translateX(36vw) translateY(-15vh) scale(0.7);
		}
		8.6956521739% {
			transform: translateX(-21vw) translateY(23vh) scale(0.63);
		}
		13.0434782609% {
			transform: translateX(42vw) translateY(31vh) scale(0.65);
		}
		17.3913043478% {
			transform: translateX(-13vw) translateY(34vh) scale(0.72);
		}
		21.7391304348% {
			transform: translateX(35vw) translateY(-27vh) scale(0.72);
		}
		26.0869565217% {
			transform: translateX(11vw) translateY(27vh) scale(0.58);
		}
		30.4347826087% {
			transform: translateX(-32vw) translateY(34vh) scale(0.82);
		}
		34.7826086957% {
			transform: translateX(13vw) translateY(-40vh) scale(0.42);
		}
		39.1304347826% {
			transform: translateX(22vw) translateY(31vh) scale(0.55);
		}
		43.4782608696% {
			transform: translateX(27vw) translateY(-11vh) scale(0.63);
		}
		47.8260869565% {
			transform: translateX(-10vw) translateY(40vh) scale(0.95);
		}
		52.1739130435% {
			transform: translateX(28vw) translateY(-27vh) scale(0.71);
		}
		56.5217391304% {
			transform: translateX(-47vw) translateY(-40vh) scale(0.88);
		}
		60.8695652174% {
			transform: translateX(-3vw) translateY(-3vh) scale(0.6);
		}
		65.2173913043% {
			transform: translateX(-30vw) translateY(6vh) scale(0.45);
		}
		69.5652173913% {
			transform: translateX(18vw) translateY(-13vh) scale(0.89);
		}
		73.9130434783% {
			transform: translateX(-23vw) translateY(-1vh) scale(0.61);
		}
		78.2608695652% {
			transform: translateX(12vw) translateY(24vh) scale(0.78);
		}
		82.6086956522% {
			transform: translateX(-1vw) translateY(-40vh) scale(1);
		}
		86.9565217391% {
			transform: translateX(42vw) translateY(0vh) scale(0.54);
		}
		91.3043478261% {
			transform: translateX(25vw) translateY(48vh) scale(0.88);
		}
		95.652173913% {
			transform: translateX(-38vw) translateY(44vh) scale(0.34);
		}
		100% {
			transform: translateX(34vw) translateY(33vh) scale(0.89);
		}
	}
	.firefly:nth-child(5) {
		animation-name: move5;
	}
	.firefly:nth-child(5)::before {
		animation-duration: 12s;
	}
	.firefly:nth-child(5)::after {
		animation-duration: 12s, 6863ms;
		animation-delay: 0ms, 2593ms;
	}

	@keyframes move5 {
		0% {
			transform: translateX(-25vw) translateY(-22vh) scale(0.72);
		}
		3.5714285714% {
			transform: translateX(46vw) translateY(29vh) scale(0.76);
		}
		7.1428571429% {
			transform: translateX(38vw) translateY(21vh) scale(0.37);
		}
		10.7142857143% {
			transform: translateX(-33vw) translateY(49vh) scale(0.66);
		}
		14.2857142857% {
			transform: translateX(-7vw) translateY(26vh) scale(0.41);
		}
		17.8571428571% {
			transform: translateX(16vw) translateY(-6vh) scale(0.58);
		}
		21.4285714286% {
			transform: translateX(42vw) translateY(47vh) scale(0.61);
		}
		25% {
			transform: translateX(-44vw) translateY(-48vh) scale(0.85);
		}
		28.5714285714% {
			transform: translateX(49vw) translateY(-17vh) scale(0.94);
		}
		32.1428571429% {
			transform: translateX(40vw) translateY(-34vh) scale(0.29);
		}
		35.7142857143% {
			transform: translateX(35vw) translateY(15vh) scale(0.54);
		}
		39.2857142857% {
			transform: translateX(-45vw) translateY(8vh) scale(0.97);
		}
		42.8571428571% {
			transform: translateX(6vw) translateY(2vh) scale(0.76);
		}
		46.4285714286% {
			transform: translateX(-15vw) translateY(9vh) scale(0.41);
		}
		50% {
			transform: translateX(-45vw) translateY(21vh) scale(0.61);
		}
		53.5714285714% {
			transform: translateX(17vw) translateY(5vh) scale(0.76);
		}
		57.1428571429% {
			transform: translateX(-36vw) translateY(-26vh) scale(0.73);
		}
		60.7142857143% {
			transform: translateX(-21vw) translateY(-28vh) scale(0.77);
		}
		64.2857142857% {
			transform: translateX(-18vw) translateY(-14vh) scale(0.61);
		}
		67.8571428571% {
			transform: translateX(-30vw) translateY(19vh) scale(0.55);
		}
		71.4285714286% {
			transform: translateX(19vw) translateY(47vh) scale(0.79);
		}
		75% {
			transform: translateX(29vw) translateY(42vh) scale(0.59);
		}
		78.5714285714% {
			transform: translateX(40vw) translateY(-20vh) scale(0.61);
		}
		82.1428571429% {
			transform: translateX(-35vw) translateY(15vh) scale(0.88);
		}
		85.7142857143% {
			transform: translateX(-41vw) translateY(25vh) scale(0.55);
		}
		89.2857142857% {
			transform: translateX(30vw) translateY(31vh) scale(0.9);
		}
		92.8571428571% {
			transform: translateX(-43vw) translateY(44vh) scale(0.97);
		}
		96.4285714286% {
			transform: translateX(18vw) translateY(-47vh) scale(0.36);
		}
		100% {
			transform: translateX(33vw) translateY(-22vh) scale(0.95);
		}
	}
	.firefly:nth-child(6) {
		animation-name: move6;
	}
	.firefly:nth-child(6)::before {
		animation-duration: 9s;
	}
	.firefly:nth-child(6)::after {
		animation-duration: 9s, 8723ms;
		animation-delay: 0ms, 4506ms;
	}

	@keyframes move6 {
		0% {
			transform: translateX(42vw) translateY(1vh) scale(0.93);
		}
		3.5714285714% {
			transform: translateX(34vw) translateY(1vh) scale(0.98);
		}
		7.1428571429% {
			transform: translateX(-37vw) translateY(49vh) scale(0.73);
		}
		10.7142857143% {
			transform: translateX(-32vw) translateY(4vh) scale(0.9);
		}
		14.2857142857% {
			transform: translateX(-21vw) translateY(47vh) scale(0.9);
		}
		17.8571428571% {
			transform: translateX(-33vw) translateY(-18vh) scale(0.27);
		}
		21.4285714286% {
			transform: translateX(-32vw) translateY(-3vh) scale(0.81);
		}
		25% {
			transform: translateX(-40vw) translateY(21vh) scale(0.61);
		}
		28.5714285714% {
			transform: translateX(28vw) translateY(-8vh) scale(0.74);
		}
		32.1428571429% {
			transform: translateX(-28vw) translateY(-23vh) scale(0.95);
		}
		35.7142857143% {
			transform: translateX(49vw) translateY(35vh) scale(0.29);
		}
		39.2857142857% {
			transform: translateX(16vw) translateY(7vh) scale(0.61);
		}
		42.8571428571% {
			transform: translateX(44vw) translateY(-48vh) scale(0.33);
		}
		46.4285714286% {
			transform: translateX(22vw) translateY(-6vh) scale(0.76);
		}
		50% {
			transform: translateX(0vw) translateY(-47vh) scale(0.59);
		}
		53.5714285714% {
			transform: translateX(1vw) translateY(23vh) scale(0.49);
		}
		57.1428571429% {
			transform: translateX(45vw) translateY(12vh) scale(0.6);
		}
		60.7142857143% {
			transform: translateX(30vw) translateY(-14vh) scale(0.54);
		}
		64.2857142857% {
			transform: translateX(26vw) translateY(28vh) scale(0.75);
		}
		67.8571428571% {
			transform: translateX(48vw) translateY(38vh) scale(0.65);
		}
		71.4285714286% {
			transform: translateX(-29vw) translateY(39vh) scale(1);
		}
		75% {
			transform: translateX(-10vw) translateY(39vh) scale(0.69);
		}
		78.5714285714% {
			transform: translateX(-35vw) translateY(2vh) scale(0.58);
		}
		82.1428571429% {
			transform: translateX(34vw) translateY(3vh) scale(0.42);
		}
		85.7142857143% {
			transform: translateX(-12vw) translateY(-14vh) scale(0.91);
		}
		89.2857142857% {
			transform: translateX(-41vw) translateY(31vh) scale(0.55);
		}
		92.8571428571% {
			transform: translateX(8vw) translateY(46vh) scale(0.95);
		}
		96.4285714286% {
			transform: translateX(23vw) translateY(-17vh) scale(0.52);
		}
		100% {
			transform: translateX(-4vw) translateY(19vh) scale(0.65);
		}
	}
	.firefly:nth-child(7) {
		animation-name: move7;
	}
	.firefly:nth-child(7)::before {
		animation-duration: 17s;
	}
	.firefly:nth-child(7)::after {
		animation-duration: 17s, 9161ms;
		animation-delay: 0ms, 7447ms;
	}

	@keyframes move7 {
		0% {
			transform: translateX(24vw) translateY(-20vh) scale(1);
		}
		4.5454545455% {
			transform: translateX(31vw) translateY(7vh) scale(0.63);
		}
		9.0909090909% {
			transform: translateX(7vw) translateY(-43vh) scale(0.61);
		}
		13.6363636364% {
			transform: translateX(-40vw) translateY(47vh) scale(0.27);
		}
		18.1818181818% {
			transform: translateX(-41vw) translateY(-7vh) scale(0.88);
		}
		22.7272727273% {
			transform: translateX(-21vw) translateY(14vh) scale(0.41);
		}
		27.2727272727% {
			transform: translateX(-49vw) translateY(5vh) scale(0.85);
		}
		31.8181818182% {
			transform: translateX(-46vw) translateY(-32vh) scale(0.99);
		}
		36.3636363636% {
			transform: translateX(40vw) translateY(35vh) scale(0.79);
		}
		40.9090909091% {
			transform: translateX(-22vw) translateY(20vh) scale(0.38);
		}
		45.4545454545% {
			transform: translateX(47vw) translateY(50vh) scale(0.93);
		}
		50% {
			transform: translateX(39vw) translateY(-27vh) scale(0.78);
		}
		54.5454545455% {
			transform: translateX(-16vw) translateY(-14vh) scale(0.78);
		}
		59.0909090909% {
			transform: translateX(49vw) translateY(-48vh) scale(1);
		}
		63.6363636364% {
			transform: translateX(44vw) translateY(46vh) scale(0.9);
		}
		68.1818181818% {
			transform: translateX(-35vw) translateY(-14vh) scale(0.54);
		}
		72.7272727273% {
			transform: translateX(-35vw) translateY(39vh) scale(0.59);
		}
		77.2727272727% {
			transform: translateX(-8vw) translateY(49vh) scale(0.46);
		}
		81.8181818182% {
			transform: translateX(17vw) translateY(-42vh) scale(0.63);
		}
		86.3636363636% {
			transform: translateX(-4vw) translateY(-25vh) scale(0.54);
		}
		90.9090909091% {
			transform: translateX(-47vw) translateY(-24vh) scale(0.35);
		}
		95.4545454545% {
			transform: translateX(33vw) translateY(-23vh) scale(0.33);
		}
		100% {
			transform: translateX(-11vw) translateY(-43vh) scale(0.54);
		}
	}
	.firefly:nth-child(8) {
		animation-name: move8;
	}
	.firefly:nth-child(8)::before {
		animation-duration: 11s;
	}
	.firefly:nth-child(8)::after {
		animation-duration: 11s, 8339ms;
		animation-delay: 0ms, 7766ms;
	}

	@keyframes move8 {
		0% {
			transform: translateX(31vw) translateY(-42vh) scale(0.78);
		}
		3.5714285714% {
			transform: translateX(-4vw) translateY(35vh) scale(0.73);
		}
		7.1428571429% {
			transform: translateX(-7vw) translateY(21vh) scale(0.64);
		}
		10.7142857143% {
			transform: translateX(-33vw) translateY(-48vh) scale(0.39);
		}
		14.2857142857% {
			transform: translateX(-36vw) translateY(15vh) scale(0.88);
		}
		17.8571428571% {
			transform: translateX(-15vw) translateY(-35vh) scale(0.44);
		}
		21.4285714286% {
			transform: translateX(-29vw) translateY(34vh) scale(0.86);
		}
		25% {
			transform: translateX(24vw) translateY(11vh) scale(0.26);
		}
		28.5714285714% {
			transform: translateX(25vw) translateY(8vh) scale(0.98);
		}
		32.1428571429% {
			transform: translateX(-15vw) translateY(48vh) scale(0.89);
		}
		35.7142857143% {
			transform: translateX(-39vw) translateY(45vh) scale(0.95);
		}
		39.2857142857% {
			transform: translateX(15vw) translateY(-4vh) scale(0.66);
		}
		42.8571428571% {
			transform: translateX(34vw) translateY(-7vh) scale(0.84);
		}
		46.4285714286% {
			transform: translateX(4vw) translateY(-5vh) scale(0.75);
		}
		50% {
			transform: translateX(-5vw) translateY(38vh) scale(0.9);
		}
		53.5714285714% {
			transform: translateX(21vw) translateY(13vh) scale(0.68);
		}
		57.1428571429% {
			transform: translateX(-44vw) translateY(16vh) scale(0.81);
		}
		60.7142857143% {
			transform: translateX(-2vw) translateY(-34vh) scale(0.54);
		}
		64.2857142857% {
			transform: translateX(-14vw) translateY(-5vh) scale(0.39);
		}
		67.8571428571% {
			transform: translateX(-27vw) translateY(-38vh) scale(0.88);
		}
		71.4285714286% {
			transform: translateX(21vw) translateY(-31vh) scale(0.93);
		}
		75% {
			transform: translateX(30vw) translateY(33vh) scale(0.88);
		}
		78.5714285714% {
			transform: translateX(17vw) translateY(1vh) scale(0.59);
		}
		82.1428571429% {
			transform: translateX(41vw) translateY(11vh) scale(0.66);
		}
		85.7142857143% {
			transform: translateX(-17vw) translateY(11vh) scale(0.57);
		}
		89.2857142857% {
			transform: translateX(32vw) translateY(38vh) scale(0.29);
		}
		92.8571428571% {
			transform: translateX(5vw) translateY(20vh) scale(0.93);
		}
		96.4285714286% {
			transform: translateX(-38vw) translateY(-28vh) scale(0.36);
		}
		100% {
			transform: translateX(-44vw) translateY(40vh) scale(0.9);
		}
	}
	.firefly:nth-child(9) {
		animation-name: move9;
	}
	.firefly:nth-child(9)::before {
		animation-duration: 17s;
	}
	.firefly:nth-child(9)::after {
		animation-duration: 17s, 8408ms;
		animation-delay: 0ms, 6548ms;
	}

	@keyframes move9 {
		0% {
			transform: translateX(32vw) translateY(22vh) scale(0.97);
		}
		4.5454545455% {
			transform: translateX(42vw) translateY(22vh) scale(0.62);
		}
		9.0909090909% {
			transform: translateX(50vw) translateY(0vh) scale(0.57);
		}
		13.6363636364% {
			transform: translateX(-37vw) translateY(11vh) scale(0.34);
		}
		18.1818181818% {
			transform: translateX(47vw) translateY(44vh) scale(0.32);
		}
		22.7272727273% {
			transform: translateX(24vw) translateY(-7vh) scale(0.57);
		}
		27.2727272727% {
			transform: translateX(26vw) translateY(47vh) scale(0.39);
		}
		31.8181818182% {
			transform: translateX(-39vw) translateY(-21vh) scale(0.74);
		}
		36.3636363636% {
			transform: translateX(-28vw) translateY(-39vh) scale(0.51);
		}
		40.9090909091% {
			transform: translateX(-49vw) translateY(11vh) scale(0.47);
		}
		45.4545454545% {
			transform: translateX(-43vw) translateY(7vh) scale(0.36);
		}
		50% {
			transform: translateX(14vw) translateY(-7vh) scale(0.65);
		}
		54.5454545455% {
			transform: translateX(-30vw) translateY(-6vh) scale(0.34);
		}
		59.0909090909% {
			transform: translateX(-9vw) translateY(3vh) scale(0.34);
		}
		63.6363636364% {
			transform: translateX(-38vw) translateY(25vh) scale(0.95);
		}
		68.1818181818% {
			transform: translateX(44vw) translateY(13vh) scale(0.92);
		}
		72.7272727273% {
			transform: translateX(47vw) translateY(30vh) scale(0.97);
		}
		77.2727272727% {
			transform: translateX(-28vw) translateY(3vh) scale(0.62);
		}
		81.8181818182% {
			transform: translateX(34vw) translateY(-15vh) scale(0.65);
		}
		86.3636363636% {
			transform: translateX(25vw) translateY(-27vh) scale(0.85);
		}
		90.9090909091% {
			transform: translateX(4vw) translateY(31vh) scale(0.54);
		}
		95.4545454545% {
			transform: translateX(-45vw) translateY(45vh) scale(0.71);
		}
		100% {
			transform: translateX(37vw) translateY(-23vh) scale(0.75);
		}
	}
	.firefly:nth-child(10) {
		animation-name: move10;
	}
	.firefly:nth-child(10)::before {
		animation-duration: 13s;
	}
	.firefly:nth-child(10)::after {
		animation-duration: 13s, 8083ms;
		animation-delay: 0ms, 5963ms;
	}

	@keyframes move10 {
		0% {
			transform: translateX(27vw) translateY(21vh) scale(0.59);
		}
		4.347826087% {
			transform: translateX(0vw) translateY(16vh) scale(0.3);
		}
		8.6956521739% {
			transform: translateX(-41vw) translateY(34vh) scale(0.96);
		}
		13.0434782609% {
			transform: translateX(-41vw) translateY(-32vh) scale(0.28);
		}
		17.3913043478% {
			transform: translateX(41vw) translateY(8vh) scale(0.41);
		}
		21.7391304348% {
			transform: translateX(-27vw) translateY(-40vh) scale(0.71);
		}
		26.0869565217% {
			transform: translateX(-7vw) translateY(-34vh) scale(0.88);
		}
		30.4347826087% {
			transform: translateX(-30vw) translateY(-30vh) scale(0.44);
		}
		34.7826086957% {
			transform: translateX(4vw) translateY(-4vh) scale(0.57);
		}
		39.1304347826% {
			transform: translateX(11vw) translateY(-28vh) scale(0.99);
		}
		43.4782608696% {
			transform: translateX(46vw) translateY(15vh) scale(0.97);
		}
		47.8260869565% {
			transform: translateX(43vw) translateY(-10vh) scale(0.43);
		}
		52.1739130435% {
			transform: translateX(29vw) translateY(21vh) scale(0.89);
		}
		56.5217391304% {
			transform: translateX(17vw) translateY(-7vh) scale(0.5);
		}
		60.8695652174% {
			transform: translateX(-8vw) translateY(-5vh) scale(0.96);
		}
		65.2173913043% {
			transform: translateX(-8vw) translateY(-46vh) scale(0.33);
		}
		69.5652173913% {
			transform: translateX(-13vw) translateY(44vh) scale(0.8);
		}
		73.9130434783% {
			transform: translateX(5vw) translateY(9vh) scale(0.63);
		}
		78.2608695652% {
			transform: translateX(49vw) translateY(43vh) scale(0.95);
		}
		82.6086956522% {
			transform: translateX(29vw) translateY(-44vh) scale(0.99);
		}
		86.9565217391% {
			transform: translateX(-7vw) translateY(-6vh) scale(0.9);
		}
		91.3043478261% {
			transform: translateX(50vw) translateY(0vh) scale(0.86);
		}
		95.652173913% {
			transform: translateX(-44vw) translateY(49vh) scale(0.73);
		}
		100% {
			transform: translateX(27vw) translateY(-29vh) scale(0.67);
		}
	}
	.firefly:nth-child(11) {
		animation-name: move11;
	}
	.firefly:nth-child(11)::before {
		animation-duration: 10s;
	}
	.firefly:nth-child(11)::after {
		animation-duration: 10s, 5021ms;
		animation-delay: 0ms, 2305ms;
	}

	@keyframes move11 {
		0% {
			transform: translateX(-22vw) translateY(-45vh) scale(0.78);
		}
		4.7619047619% {
			transform: translateX(46vw) translateY(-41vh) scale(0.71);
		}
		9.5238095238% {
			transform: translateX(-32vw) translateY(30vh) scale(0.62);
		}
		14.2857142857% {
			transform: translateX(1vw) translateY(-17vh) scale(0.91);
		}
		19.0476190476% {
			transform: translateX(-7vw) translateY(-45vh) scale(0.61);
		}
		23.8095238095% {
			transform: translateX(1vw) translateY(18vh) scale(0.91);
		}
		28.5714285714% {
			transform: translateX(28vw) translateY(31vh) scale(0.66);
		}
		33.3333333333% {
			transform: translateX(-15vw) translateY(-27vh) scale(0.77);
		}
		38.0952380952% {
			transform: translateX(-12vw) translateY(-39vh) scale(0.52);
		}
		42.8571428571% {
			transform: translateX(-18vw) translateY(49vh) scale(0.56);
		}
		47.619047619% {
			transform: translateX(3vw) translateY(-14vh) scale(0.42);
		}
		52.380952381% {
			transform: translateX(14vw) translateY(-9vh) scale(0.86);
		}
		57.1428571429% {
			transform: translateX(-49vw) translateY(43vh) scale(0.3);
		}
		61.9047619048% {
			transform: translateX(19vw) translateY(22vh) scale(0.78);
		}
		66.6666666667% {
			transform: translateX(45vw) translateY(-25vh) scale(0.95);
		}
		71.4285714286% {
			transform: translateX(-36vw) translateY(22vh) scale(0.92);
		}
		76.1904761905% {
			transform: translateX(-40vw) translateY(20vh) scale(0.42);
		}
		80.9523809524% {
			transform: translateX(9vw) translateY(-11vh) scale(0.67);
		}
		85.7142857143% {
			transform: translateX(24vw) translateY(-20vh) scale(0.6);
		}
		90.4761904762% {
			transform: translateX(14vw) translateY(39vh) scale(0.3);
		}
		95.2380952381% {
			transform: translateX(-45vw) translateY(48vh) scale(0.67);
		}
		100% {
			transform: translateX(33vw) translateY(-45vh) scale(0.63);
		}
	}
	.firefly:nth-child(12) {
		animation-name: move12;
	}
	.firefly:nth-child(12)::before {
		animation-duration: 15s;
	}
	.firefly:nth-child(12)::after {
		animation-duration: 15s, 8106ms;
		animation-delay: 0ms, 1839ms;
	}

	@keyframes move12 {
		0% {
			transform: translateX(-35vw) translateY(50vh) scale(0.27);
		}
		4.1666666667% {
			transform: translateX(-15vw) translateY(-13vh) scale(0.75);
		}
		8.3333333333% {
			transform: translateX(10vw) translateY(15vh) scale(0.5);
		}
		12.5% {
			transform: translateX(-17vw) translateY(16vh) scale(0.65);
		}
		16.6666666667% {
			transform: translateX(42vw) translateY(33vh) scale(0.51);
		}
		20.8333333333% {
			transform: translateX(6vw) translateY(-44vh) scale(0.75);
		}
		25% {
			transform: translateX(37vw) translateY(-27vh) scale(0.68);
		}
		29.1666666667% {
			transform: translateX(26vw) translateY(-13vh) scale(0.96);
		}
		33.3333333333% {
			transform: translateX(-14vw) translateY(9vh) scale(0.72);
		}
		37.5% {
			transform: translateX(-23vw) translateY(17vh) scale(0.57);
		}
		41.6666666667% {
			transform: translateX(17vw) translateY(-7vh) scale(0.35);
		}
		45.8333333333% {
			transform: translateX(47vw) translateY(-2vh) scale(0.72);
		}
		50% {
			transform: translateX(-6vw) translateY(-35vh) scale(0.84);
		}
		54.1666666667% {
			transform: translateX(50vw) translateY(23vh) scale(0.36);
		}
		58.3333333333% {
			transform: translateX(-22vw) translateY(40vh) scale(0.85);
		}
		62.5% {
			transform: translateX(37vw) translateY(30vh) scale(0.74);
		}
		66.6666666667% {
			transform: translateX(-2vw) translateY(-27vh) scale(0.37);
		}
		70.8333333333% {
			transform: translateX(42vw) translateY(-33vh) scale(0.84);
		}
		75% {
			transform: translateX(-3vw) translateY(13vh) scale(0.46);
		}
		79.1666666667% {
			transform: translateX(-14vw) translateY(7vh) scale(0.8);
		}
		83.3333333333% {
			transform: translateX(-41vw) translateY(47vh) scale(0.69);
		}
		87.5% {
			transform: translateX(-11vw) translateY(36vh) scale(0.58);
		}
		91.6666666667% {
			transform: translateX(34vw) translateY(18vh) scale(0.53);
		}
		95.8333333333% {
			transform: translateX(50vw) translateY(38vh) scale(0.37);
		}
		100% {
			transform: translateX(44vw) translateY(-12vh) scale(0.35);
		}
	}
	.firefly:nth-child(13) {
		animation-name: move13;
	}
	.firefly:nth-child(13)::before {
		animation-duration: 18s;
	}
	.firefly:nth-child(13)::after {
		animation-duration: 18s, 7859ms;
		animation-delay: 0ms, 697ms;
	}

	@keyframes move13 {
		0% {
			transform: translateX(-42vw) translateY(-32vh) scale(0.44);
		}
		5.5555555556% {
			transform: translateX(-33vw) translateY(44vh) scale(0.97);
		}
		11.1111111111% {
			transform: translateX(36vw) translateY(24vh) scale(0.99);
		}
		16.6666666667% {
			transform: translateX(0vw) translateY(-41vh) scale(0.44);
		}
		22.2222222222% {
			transform: translateX(-43vw) translateY(15vh) scale(0.84);
		}
		27.7777777778% {
			transform: translateX(-37vw) translateY(-13vh) scale(0.32);
		}
		33.3333333333% {
			transform: translateX(14vw) translateY(-19vh) scale(0.44);
		}
		38.8888888889% {
			transform: translateX(48vw) translateY(-30vh) scale(0.26);
		}
		44.4444444444% {
			transform: translateX(20vw) translateY(7vh) scale(0.93);
		}
		50% {
			transform: translateX(33vw) translateY(-36vh) scale(0.45);
		}
		55.5555555556% {
			transform: translateX(-45vw) translateY(-33vh) scale(0.52);
		}
		61.1111111111% {
			transform: translateX(10vw) translateY(3vh) scale(0.65);
		}
		66.6666666667% {
			transform: translateX(41vw) translateY(28vh) scale(0.6);
		}
		72.2222222222% {
			transform: translateX(8vw) translateY(-44vh) scale(0.47);
		}
		77.7777777778% {
			transform: translateX(-8vw) translateY(-4vh) scale(0.4);
		}
		83.3333333333% {
			transform: translateX(-6vw) translateY(-9vh) scale(0.79);
		}
		88.8888888889% {
			transform: translateX(44vw) translateY(33vh) scale(0.96);
		}
		94.4444444444% {
			transform: translateX(-27vw) translateY(49vh) scale(0.32);
		}
		100% {
			transform: translateX(37vw) translateY(-4vh) scale(0.37);
		}
	}
	.firefly:nth-child(14) {
		animation-name: move14;
	}
	.firefly:nth-child(14)::before {
		animation-duration: 13s;
	}
	.firefly:nth-child(14)::after {
		animation-duration: 13s, 9987ms;
		animation-delay: 0ms, 2513ms;
	}

	@keyframes move14 {
		0% {
			transform: translateX(1vw) translateY(50vh) scale(0.57);
		}
		4% {
			transform: translateX(-30vw) translateY(-49vh) scale(0.4);
		}
		8% {
			transform: translateX(0vw) translateY(26vh) scale(0.36);
		}
		12% {
			transform: translateX(34vw) translateY(6vh) scale(0.99);
		}
		16% {
			transform: translateX(11vw) translateY(29vh) scale(0.93);
		}
		20% {
			transform: translateX(-49vw) translateY(-37vh) scale(0.94);
		}
		24% {
			transform: translateX(-29vw) translateY(9vh) scale(0.41);
		}
		28% {
			transform: translateX(43vw) translateY(-31vh) scale(0.78);
		}
		32% {
			transform: translateX(-24vw) translateY(3vh) scale(0.73);
		}
		36% {
			transform: translateX(-45vw) translateY(-7vh) scale(0.74);
		}
		40% {
			transform: translateX(40vw) translateY(19vh) scale(0.63);
		}
		44% {
			transform: translateX(5vw) translateY(1vh) scale(0.38);
		}
		48% {
			transform: translateX(36vw) translateY(-45vh) scale(0.81);
		}
		52% {
			transform: translateX(-23vw) translateY(3vh) scale(0.55);
		}
		56% {
			transform: translateX(43vw) translateY(34vh) scale(0.48);
		}
		60% {
			transform: translateX(-18vw) translateY(50vh) scale(0.5);
		}
		64% {
			transform: translateX(41vw) translateY(32vh) scale(0.79);
		}
		68% {
			transform: translateX(-33vw) translateY(11vh) scale(0.75);
		}
		72% {
			transform: translateX(38vw) translateY(-39vh) scale(0.83);
		}
		76% {
			transform: translateX(48vw) translateY(-12vh) scale(0.94);
		}
		80% {
			transform: translateX(18vw) translateY(27vh) scale(0.95);
		}
		84% {
			transform: translateX(-6vw) translateY(1vh) scale(0.96);
		}
		88% {
			transform: translateX(0vw) translateY(3vh) scale(0.72);
		}
		92% {
			transform: translateX(46vw) translateY(49vh) scale(0.26);
		}
		96% {
			transform: translateX(-44vw) translateY(1vh) scale(0.7);
		}
		100% {
			transform: translateX(29vw) translateY(39vh) scale(0.74);
		}
	}
	.firefly:nth-child(15) {
		animation-name: move15;
	}
	.firefly:nth-child(15)::before {
		animation-duration: 10s;
	}
	.firefly:nth-child(15)::after {
		animation-duration: 10s, 10780ms;
		animation-delay: 0ms, 7002ms;
	}

	@keyframes move15 {
		0% {
			transform: translateX(-48vw) translateY(-45vh) scale(0.42);
		}
		4.5454545455% {
			transform: translateX(50vw) translateY(36vh) scale(0.65);
		}
		9.0909090909% {
			transform: translateX(-18vw) translateY(-6vh) scale(0.63);
		}
		13.6363636364% {
			transform: translateX(-36vw) translateY(-7vh) scale(0.3);
		}
		18.1818181818% {
			transform: translateX(9vw) translateY(-13vh) scale(0.79);
		}
		22.7272727273% {
			transform: translateX(37vw) translateY(47vh) scale(0.67);
		}
		27.2727272727% {
			transform: translateX(12vw) translateY(-26vh) scale(0.41);
		}
		31.8181818182% {
			transform: translateX(22vw) translateY(37vh) scale(0.55);
		}
		36.3636363636% {
			transform: translateX(29vw) translateY(-20vh) scale(0.65);
		}
		40.9090909091% {
			transform: translateX(-4vw) translateY(13vh) scale(0.98);
		}
		45.4545454545% {
			transform: translateX(-20vw) translateY(-36vh) scale(0.64);
		}
		50% {
			transform: translateX(-7vw) translateY(3vh) scale(0.46);
		}
		54.5454545455% {
			transform: translateX(-4vw) translateY(-21vh) scale(0.73);
		}
		59.0909090909% {
			transform: translateX(-20vw) translateY(-48vh) scale(0.92);
		}
		63.6363636364% {
			transform: translateX(-44vw) translateY(-29vh) scale(0.34);
		}
		68.1818181818% {
			transform: translateX(-24vw) translateY(-1vh) scale(0.36);
		}
		72.7272727273% {
			transform: translateX(26vw) translateY(-24vh) scale(0.42);
		}
		77.2727272727% {
			transform: translateX(49vw) translateY(15vh) scale(0.93);
		}
		81.8181818182% {
			transform: translateX(-48vw) translateY(-16vh) scale(0.74);
		}
		86.3636363636% {
			transform: translateX(-18vw) translateY(32vh) scale(0.65);
		}
		90.9090909091% {
			transform: translateX(-41vw) translateY(8vh) scale(0.83);
		}
		95.4545454545% {
			transform: translateX(-8vw) translateY(19vh) scale(0.54);
		}
		100% {
			transform: translateX(-2vw) translateY(-1vh) scale(0.89);
		}
	}
	@keyframes drift {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes flash {
		0%,
		30%,
		100% {
			opacity: 0;
			box-shadow: 0 0 0vw 0vw yellow;
		}
		5% {
			opacity: 1;
			box-shadow: 0 0 4vw 0.8vw yellow;
		}
	}
</style>
