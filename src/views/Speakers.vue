<template>
	<div id="speakers">
    <div class="speaker">
		<figure>
		<img src="../assets/HexPics/am.png" alt="">
		</figure>
		<article>
		<h1>Aditya Maheswaran</h1>
		<p>
			An engineer and an MBA graduate by qualification, Aditya Maheswaran has represented India in the reputed
			World Championship of Public Speaking (WCPS) twice and ranked second out of more than forty
			thousand candidates globally. He has been awarded the prestigious ‘Best Public Speaker Award’ by
 			Toastmasters International. As an exceptional orator, regular TEDx speaker and one who has overcome
			many challenges in life, he is role model for today's youth.
		</p>
		</article>
	</div>
	<div class="speaker" id = "">
		<h1>Speaker-2</h1>
	</div>
	</div>

</template>

<script>
export default {
	name: "Speakers",
	title: "Speakers"
};
</script>

<style>
@import "../minireset.min.css";
body,
html {
	height: 100%;
}
img {
	float: left;
	width: 300px;
}
.speakers {
	margin-top: 0px;
}
.speaker {
	display: flex;
	padding: 0px;
	min-height: 100vh;
	overflow: hidden;
	color: black;
	font-size: 2em;
	font-weight: 300;

	background-color: #ff103d;
	font-family: "Roboto";
	margin: 0px;
	display: grid;
	grid-template-areas: 30% auto;
}

h1 {
	font-family: "Do Hyeon";
	letter-spacing: 2px;
	color: black;
	font-size: 4em;
	font-weight: bolder;
	line-height: 2.5em;
	padding: 0px;
	margin: 0px;
}
</style>
