<template>
	<div id="team">
	<h1>Team</h1>
	<h2>
		The People Behind the TEDxBirlaPublicSchool
	</h2>
	<section>
		<h1>TEDx Licensee | Primary Organizer</h1>
		<h2>Anand Prakash Sharma | The Principal | Birla Public School</h2>
	</section>
	<section>
		<h1>Core Executives</h1>
		<section id="corexec">
		  <member name="Saadiya Rafiq" image="" post="Lead Organizer"/>
		  <member name="Rutaj Dash" image="" post="Co-Organizer | Head Of Finance"/>
		  <member name="Varad Angadi" image="" post="Curator"/>
		</section>
	</section>
	<section>
		<h1>Head Of Departments</h1>
		<member name="" image="" post=""/>
		<member name="" image=""/>
		<member name="" image=""/>
		<member name="" image=""/>
		<member name="" image=""/>
		<member name="" image=""/>
		<member name="" image=""/>
	</section>
	</div>
</template>

<script>
import Velocity from "velocity-animate";
import { trigger } from "@/index.js";
import Member from "@/components/Member.vue";
import { firebase } from "@/firebase.js";
export default {
	name: "Team",
	title: "Team",
	mounted: function() {
		trigger("team");
	},
	components:{
		Member
	}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
@import "../minireset.min.css";
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon");
@import url("https://fonts.googleapis.com/css?family=Anton");

#team {
	overflow: hidden;
	min-height: 100vh;
	width: 100%;
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

h1,
h2 {
	font-family: "Do Hyeon";
	letter-spacing: 2px;
	color: white !important;
	font-size: 3.2em;
	font-weight: bolder;
}

h2 {
	font-size: 2em;
}

#corexec {
	display: flex;
	min-width: 100vw;
}
</style>
