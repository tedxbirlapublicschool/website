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
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../minireset.min.css";
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
#tedx {
	font-family: "Roboto";
	font-size: 1.5em;
	line-height: 2;
	color: white;

	background: #8e0e00; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#1f1c18,
		#8e0e00
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#1f1c18,
		#8e0e00
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	height: 300px;
}
h1 {
	font-size: 1.5em;
	font-weight: 700;
}
</style>
