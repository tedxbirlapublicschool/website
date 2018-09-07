<template>
	<div id="partners">
	<section class="content">
<h1>Technical Partners</h1>
<img src="@/assets/symphonylogo.png">
</section>
	<section class="content">
<h1>Ticketing Partners</h1>
<img src="@/assets/Toastmasters.png">
</section>
	<section class="content">
<h1>Radio Partners</h1>
<img src="@/assets/olive.png" height="400px" width="400px">
</section>
	<section class="content cop">
<h1>Co-Partners</h1>
<div>
<img src="@/assets/jannah.jpg" width = "150px" height="150px">
<img src="@/assets/logo-desktop.png" style="background-color:white">
<img src="@/assets/Baskin-Robbins_logo.svg.png">
<img src="@/assets/Dunkin'_Donuts_logo.svg" width="400px" height="400px">
</div>	
	</section>	
	</div>
</template>

<script>
import { trigger } from "@/index.js";

export default {
	name: "Partners",
	title: "Partners",
	mounted: function() {
		trigger("partners");
	}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
@import "../minireset.min.css";
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon");
@import url("https://fonts.googleapis.com/css?family=Anton");

#partners {
	overflow: hidden;
	min-height: 100vh;
	background-color: #ff103d;
}
.content {
	font-family: "Roboto";
	font-size: 2em;
	font-weight: 300;
	background-color: black;
	margin: 35px;
	margin-top: 45px;
	color: white;
}

h1 {
	font-family: "Do Hyeon";
	letter-spacing: 2px;
	color: white !important;
	font-size: 4em;
	font-weight: bolder;
}

img {
	margin-top: 3.5em;
	margin: 2em;
}
</style>
