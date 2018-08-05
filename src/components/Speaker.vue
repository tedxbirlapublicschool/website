<template>
	<div v-if="align == 'true'" class="speaker">
		<img :src="img"/>
		<article>
			<h1>{{name}}</h1>
			<p>
			{{content}}
			</p>
		</article>
    </div>
	<div v-else class="speaker">
		<article>
			<h1>{{name}}</h1>
			<p>
			{{content}}
			</p>
		</article>
		<img :src="img"/>
    </div>
</template>

<script>
export default {
	name: "Speaker",
	props: ["name", "content", "img", "align"]
};
</script>

<style scoped>
.speaker {
	padding: 50px;
	padding-top: 0px;
	min-width: 100vw;
	width: 100vw;
	max-width: 100vw;
	overflow: hidden;
	color: white;
	font-size: 2em;
	font-weight: 300;
	font-family: "Roboto";
	margin: 0px;
	display: flex;
	align-items: center;
}
.hidden {
	display: none;
}
p {
	text-align: justify;
}
h1 {
	font-family: "Do Hyeon";
	letter-spacing: 2px;
	color: white;
	font-size: 4em;
	font-weight: bolder;
	line-height: 1em;
	padding: 0px;
	margin: 0px;
}
img {
	padding: 10px;
	width: 25vw;
	min-width: 150px;
	max-width: 500px;
	vertical-align: middle;
}
article {
	padding: 15px;
	width: 70vw;
}
</style>
