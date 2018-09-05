<template>
	<div class="home">
		<div id="herodiv" class="sectiondiv1 w3-center">
			<div style="position: absolute; bottom: 0px; width:100%;" class="w3-center">
				<p class="w3-text-white w3-center address">{{month}} {{date}}<sup>{{superscript}}</sup>, {{year}}</p>
				<p class="w3-text-white w3-center address">{{loc1}}</p>
				<p class="w3-text-white w3-center address">{{loc2}}</p>
			</div>
		</div>
		<tedx></tedx>
		<Hex></Hex>
		<Map></Map>
	</div>
</template>

<script>
import Velocity from "velocity-animate";
import AOS from "aos";
import Tedx from "@/components/Tedx.vue";
import Map from "@/components/Map.vue";
import Hex from "@/components/Hex.vue";
import { trigger } from "@/index.js";
import { firebase } from "@/firebase.js";
export default {
	name: "Home",
	title: "Home",
	components: {
		Tedx,
		Map,
		Hex
	},
	mounted: function() {
		trigger("home");
	},
	data: function() {
		return {
			date: "",
			month: "",
			year: "",
			superscript: "",
			loc1: "",
			loc2: ""
		};
	},
	beforeCreate: function() {
		var vm = this;
		return firebase
			.database()
			.ref("/website/home")
			.on("value", function(snapshot) {
				var homeData = snapshot.val();
				vm.date = homeData.eventDate;
				const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				vm.month = monthNames[homeData.eventMonth -1];
				vm.year = homeData.eventYear;
				if ( homeData.eventDate == 1 || homeData.eventDate == 21 || homeData.eventDate == 31 ){
					vm.superscript = "st";
				} else if ( homeData.eventDate == 2 || homeData.eventDate == 22 ){
					vm.superscript = "nd";
				} else if ( homeData.eventDate == 3 || homeData.eventDate == 23 ){
					vm.superscript = "rd";
				} else {
					vm.superscript = "th";
				}
				vm.loc1 = homeData.locLine1;
				vm.loc2 = homeData.locLine2;
				document.getElementById("app").style.display = "block";
				AOS.init();
				Velocity(
					document.getElementById("particles-foreground"),
					{ opacity: 0 },
					{ duration: "1000" }
				);
				Velocity(
					document.getElementById("particles-background"),
					{ opacity: 0 },
					{ duration: "1000" }
				);
				Velocity(
					document.getElementById("particles-center"),
					{ opacity: 0 },
					{ duration: "1000" }
				);
			});
	}
};
</script>

<style scoped>
#herodiv {
	background-image: url("../assets/skyline.jpg");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-color: red;
	background-blend-mode: multiply;
}

.address {
	font-size: 40px;
	padding: 0px;
	margin: 0px;
}

.sectiondiv1 {
	padding: 0px;
	margin: 0px;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
.sectiondiv2 {
	padding: 0px;
	margin: 0px;
	width: 100vw;
}
</style>
