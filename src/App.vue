<template>
	<div id="app">
		<div id="nav" class="w3-top w3-bar navbar w3-xlarge">
			<div class="w3-bar-item menubar">
				<router-link class="w3-bar-item w3-button" to="/">Home</router-link>
				<router-link class="w3-bar-item w3-button" to="/about">About</router-link>
				<router-link class="w3-bar-item w3-button" to="/events">Events</router-link>
				<router-link class="w3-bar-item w3-button" to="/speakers">Speakers</router-link>
				<router-link class="w3-bar-item w3-button" to="/blog">Blog</router-link>
				<router-link class="w3-bar-item w3-button" to="/partners">Partners</router-link>
				<router-link class="w3-bar-item w3-button" to="/team">Team</router-link>
			</div>
			<div class="w3-bar-item w3-center">
				<img id="navbarlogo" src="./assets/logo_singleLine_white.svg"/>
			</div>
		</div>
		<router-view/>
	</div>
</template>

<script>
import { trigger } from "./index";
export default {
	name: "App",
	mounted: function() {
		trigger("initialLoad");
	}
};
</script>

<style>
@import "w3.css";
@import url("https://use.fontawesome.com/releases/v5.2.0/css/all.css");
#app {
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	display: none;
}

.navbar {
	background-color: #1d1d1d;
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
