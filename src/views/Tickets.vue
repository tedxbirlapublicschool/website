<template>
    <div id="tickets">
    <img src="../assets/tedxevent.jpeg">
	<div class="content">
		<section>
		<p>
			<ul>
				<li>
						<b>Adult (Standard) : QAR 70 *</b>

				</li>
				<li>
						<b>Student (Only discount):  QAR 40 ** </b>
				</li>
			</ul>
		</p>
		<p id="cont">
			<ul>
				<li>
					*Inclusive of complimentary Food and Beverages + Notepad & Pens + Special Souveniers.
				</li>
				<li>
					**Inclusive of complimetary food and beverages. ID cards of the students will be checked at the front desk
				</li>
				<li>
					*Tickets are not refundable
				</li>
			</ul>
		</p>	
				
				<button v-on:click="qtickets" class="w3-btn w3-round-xxlarge w3-blue" style="z-index:9999;">Get Tickets</button>
				
	</section>
	</div>

    </div>
</template>

<script>
import { trigger } from "@/index.js";
import Velocity from "velocity-animate";
export default {
	name: "Tickets",
	title: "Tickets",
	mounted: function(){
		trigger("tickets");
		document.getElementById("app").style.display = "block";
					Velocity(
						document.getElementById("particles-foreground"),
						{ opacity: 0 },
						{ duration: "800" }
					);
					Velocity(
						document.getElementById("particles-background"),
						{ opacity: 0 },
						{ duration: "800" }
					);
					Velocity(
						document.getElementById("particles-center"),
						{ opacity: 0 },
						{ duration: "800" }
					);
	},
	methods: {
		qtickets() {
			window.location = "https://www.q-tickets.com/eventslist.aspx";
		}
	}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
@import "../minireset.min.css";
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon");
@import url("https://fonts.googleapis.com/css?family=Anton");
@import url('https://fonts.googleapis.com/css?family=Lato');

@import "../w3.css";
#tickets {
	height: 100vh;
	display: grid;
	grid-template-columns: 40% 60% ;
	overflow: hidden;
	min-width: 80vh;
	background-color: #ff103d;
	margin-right: 1em;
}


.content {
	height: 100% ;
	font-family: 'Lato', sans-serif;
	font-size: 1.5em;
	font-weight: 300;
	text-align: center;
	color: black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 9999;
}

#cont {
	font-family: 'Lato', sans-serif;

	font-size: 0.8em;
	font-weight: 300;
	
	vertical-align: bottom;
	color: black;

}

h1 {
	font-family: "Do Hyeon";
	letter-spacing: 2px;
	color: white !important;
	font-size: 4em;
	font-weight: bolder;
}

img {
	padding-top: 3em;
	width: 700px;
	height: 800px;
}

a {
	font-size: 1.5em;
	color: white;
	text-decoration: none;
	font-family: "Do Hyeon";
}

ul{
	list-style-type: none;
}
</style>
