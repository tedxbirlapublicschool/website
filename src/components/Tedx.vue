<template>
    <div id = "tedx">
		<h1 data-aos="fade-left">What is <b>TEDx</b> ?</h1>
		<p data-aos="fade-right">
		In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a
		program of local, self-organized events that bring people together to share a TED-like
		experience. Our event is called TEDx Birla Public School, where x = independently organized TED event.
		At our TEDx Birla Public School event, TEDTalks video and live speakers will combine to spark deep
		discussion and connection in a small group. The TED Conference provides general guidance
		for the TEDx program, but individual TEDx events, including ours, are self-organized.
		</p>
		<div class="center">
			<button class = "button" data-aos="fade-right">Learn More</button>
			<button class = "button" data-aos="fade-left">Visit TEDx Programme</button>
		</div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../minireset.min.css";
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon");
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
#tedx {
	z-index: 1;
	font-size: 1.5em;
	line-height: 2;
	color: white;
	padding: 5em;

	background-image: url("../assets/skyline-blurred.jpg");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-color: rgb(255, 0, 0);
	background-blend-mode: multiply;

	width: 100vw;
	height: 90vh;
	margin-top: auto;
	text-align: left;
}
h1 {
	text-align: center;
	font-size: 2em;
	font-weight: 400;
	font-family: "Do Hyeon";
}

button {
	margin: 10px;
	display: inline block;
	border-radius: 12px;
	border: 0px;
	width: 250px;
	background-color: black;
	color: white;
}

.center {
	width: 550px;
	margin: auto;
	display: block;
}
</style>
