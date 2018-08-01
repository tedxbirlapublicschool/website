<template>
    <div class="speaker">
    <figure>
        <slot name = "image"></slot>
    </figure>
    <article>
        <h1>{{name}}</h1>
        <p>
        <slot name = "content"></slot>
        </p>
    </article>
    </div>
</template>

<script>
export default {
	name: "Speaker",
	props: ["name"]
};
</script>

<style>
.speaker {
	padding: 50px;
	min-height: 100vh;
	overflow: hidden;
	color: black;
	font-size: 2em;
	font-weight: 300;
	font-family: "Roboto";
	margin: 0px;
	display: grid;
	grid-template-columns: 20% 75% auto;
}
p {
	text-align: left;
}
h1 {
	font-family: "Do Hyeon";
	letter-spacing: 2px;
	color: black;
	font-size: 4em;
	font-weight: bolder;
	line-height: 1em;
	padding: 0px;
	margin: 0px;
}
</style>
