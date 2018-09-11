<template>
	<div id = "map">
		<div class="contact">
			<h1>Where are we?</h1>
			<p>
				Birla Public School,
				<br>
				Ras Aboud Street,
				<br>
				Opposite Religious Complex, Abu Hamour
				<br>
				Sub-Area: Mesaimeer,
				<br>
				Doha, Qatar
			</p>
		</div>
		<div class = "map">
    		<iframe :src="mapSrc" allowfullscreen>
			</iframe>
		</div>
	</div>
</template>
<script>
export default {
	name: "Map",
	props: ["mapSrc"]
};
</script>

<style scoped>
@import "../minireset.min.css";
.map {
	float: right;
	width: 80%;
}
.contact {
	float: left;
	margin: 0px;
}
iframe {
	margin: 0px;
	overflow: hidden;
	max-width: 100%;
	width: 100%;
	height: 100%;
	border: 0;
}
#map {
	background-color: black;
	display: flex;
}

h1 {
	font-family: "Do Hyeon";
	letter-spacing: 2px;
	color: white !important;
	font-size: 4em;
	font-weight: bolder;
}
</style>
