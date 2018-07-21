<template>
	<div id="app">
		<div id="nav" class="w3-top w3-bar navbar w3-xlarge">
			<div class="w3-bar-item menubar">
				<router-link class="w3-bar-item w3-button" to="/" onclick="manualscrollfn(0);">Home</router-link>
				<router-link class="w3-bar-item w3-button" to="/events" onclick="manualscrollfn(1);">Events</router-link>
				<router-link class="w3-bar-item w3-button" to="/speakers" onclick="manualscrollfn(1);">Speakers</router-link>
				<router-link class="w3-bar-item w3-button" to="/blog" onclick="manualscrollfn(1);">Blog</router-link>
				<router-link class="w3-bar-item w3-button" to="/partners" onclick="manualscrollfn(1);">Partners</router-link>
				<router-link class="w3-bar-item w3-button" to="/team" onclick="manualscrollfn(1);">Team</router-link>
			</div>
			<div class="w3-bar-item w3-center">
				<img id="navbarlogo" src="./assets/logo_singleLine_white.svg" onload="scrollfn();"/>
			</div>
		</div>
		<router-view/>
	</div>
</template>

<script>
export default {
	name: "App"
};
</script>


<style>
@import "w3.css";

#app {
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

.navbar {
	background-color: rgba(29, 29, 29, 0);
	color: white;
}

.menubar {
	position: absolute;
	z-index: 100;
	top: 0px;
	right: 0px;
}

/* width */
::-webkit-scrollbar {
	width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
	background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #555;
}
</style>
