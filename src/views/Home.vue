<template>
	<div v-if="dataReceived" class="home">
		<div id="herodiv" class="sectiondiv1 w3-center">
			<div style="position: absolute; bottom: 0px; width:100%;" class="w3-center">
				<p class="w3-text-white w3-center address">{{month}} {{date}}<sup>{{superscript}}</sup>, {{year}}</p>
				<p class="w3-text-white w3-center address">{{loc1}}</p>
				<p class="w3-text-white w3-center address">{{loc2}}</p>
			</div>
		</div>
		<tedx></tedx>
		<Timer :date="date" :month="monthNum" :year="year" :youtube="youtube"></Timer>
	</div>
</template>

<script>
import Velocity from "velocity-animate";
import AOS from "aos";
import Tedx from "@/components/Tedx.vue";
import Timer from "@/components/Timer.vue";
import { trigger } from "@/index.js";
import { firebase } from "@/firebase.js";
export default {
	name: "Home",
	title: "Home",
	components: {
		Tedx,
		Timer
	},
	mounted: function() {
		trigger("home");
	},
	data: function() {
		return {
			date: 0,
			month: "",
			year: 0,
			superscript: "",
			loc1: "",
			loc2: "",
			monthNum: 0,
			youtube: "",
			dataReceived: null
		};
	},
	created: function() {
		this.fetchData();
	},
	watch: {
		$route: "fetchData"
	},
	methods: {
		fetchData() {
			var vm = this;
			return firebase
				.database()
				.ref("/website/home")
				.on("value", function(snapshot) {
					var homeData = snapshot.val();
					vm.date = homeData.eventDate;
					const monthNames = [
						"January",
						"February",
						"March",
						"April",
						"May",
						"June",
						"July",
						"August",
						"September",
						"October",
						"November",
						"December"
					];
					vm.monthNum = homeData.eventMonth;
					vm.month = monthNames[homeData.eventMonth - 1];
					vm.year = homeData.eventYear;
					if (
						homeData.eventDate == 1 ||
						homeData.eventDate == 21 ||
						homeData.eventDate == 31
					) {
						vm.superscript = "st";
					} else if (
						homeData.eventDate == 2 ||
						homeData.eventDate == 22
					) {
						vm.superscript = "nd";
					} else if (
						homeData.eventDate == 3 ||
						homeData.eventDate == 23
					) {
						vm.superscript = "rd";
					} else {
						vm.superscript = "th";
					}
					vm.loc1 = homeData.locLine1;
					vm.loc2 = homeData.locLine2;
					vm.youtube = homeData.youtube;
					document.getElementById("app").style.display = "block";
					vm.dataReceived = "true";
					AOS.init();
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
				});
		}
	}
};
</script>

<style scoped>
#herodiv {
	background-image: url("https://firebasestorage.googleapis.com/v0/b/tedxbps.appspot.com/o/website%2Fimages%2Fskyline.jpg?alt=media&token=d34a2dbb-a193-4ab9-b57e-ae1c1b193418");
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
