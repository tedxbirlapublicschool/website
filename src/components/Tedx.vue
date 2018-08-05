<template>
    <div id = "tedx">
        <h1>What is <b>TEDx</b> ?</h1>
        <p>
        In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a 
        program of local, self-organized events that bring people together to share a TED-like 
        experience. Our event is called TEDx Birla Public School, where x = independently organized TED event. 
        At our TEDx Birla Public School event, TEDTalks video and live speakers will combine to spark deep 
        discussion and connection in a small group. The TED Conference provides general guidance 
        for the TEDx program, but individual TEDx events, including ours, are self-organized.       
        </p>
		<button class = "button">Learn More</button>
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
	font-size: 1.5em;
	line-height: 2;
	color: black;

	background: #e52d27;
	background: -moz-linear-gradient(top, #e52d27 1%, #b31217 100%);
	background: -webkit-linear-gradient(top, #e52d27 1%, #b31217 100%);
	background: linear-gradient(to bottom, #e52d27 1%, #b31217 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e52d27', endColorstr='#b31217',GradientType=0 );

	width: 100%;
	height: 100%;
	padding-bottom: 2em;
	padding-left: 1.5em;
	padding-right: 1.5em;
	text-align: left;
}
h1 {
	text-align: center;
	font-size: 2em;
	font-weight: 400;
	font-family: "Do Hyeon";
}

button {
	position: relative;
	top: 50%;
	left: 45%;
	border-radius: 12px;
	border: 0px;
	width: 150px;
	background-color: black;
	color: white;
}
</style>
