<template>
	<div id="speakers">
		<canvas id="dotty"></canvas>
		<speaker v-if="dataReceived" v-for="sp in speakers" :key="sp.speakerId" :name="sp.speakerName" :content="sp.speakerIntro" :img="sp.speakerIcon" :align="sp.speakerId"></speaker>
	</div>
</template>

<script>
import Velocity from "velocity-animate";
import { trigger } from "@/index.js";
import Speaker from "@/components/Speaker.vue";
import { firebase } from "@/firebase.js";
export default {
	name: "Speakers",
	title: "Speakers",
	components: {
		Speaker
	},
	mounted: function() {
		trigger("speakers");
	},
	data: function() {
		return {
			dataReceived: null,
			speakers: [],
			speakerNum: 0
		};
	},
	beforeRouteEnter(to, from, next) {
		return firebase
			.database()
			.ref("/website/speakers")
			.once("value")
			.then(function(snapshot) {
				return snapshot.val();
			})
			.then(function(speakerData) {
				next((vm) => {
					vm.speakerNum = speakerData.totalNum;
					var i = 1;
					while (i <= speakerData.totalNum) {
						vm.speakers.push({
							speakerId: i,
							speakerName: speakerData[i].speakerName,
							speakerIntro: speakerData[i].speakerIntro,
							speakerIcon: speakerData[i].speakerIcon
						});
						i++;
					}
					document.getElementById("app").style.display = "block";
					vm.dataReceived = "true";
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
			})
			.catch((err) => {
				console.log(err);
			});
	},
	beforeRouteUpdate(to, from, next) {
		this.data = null;
		return firebase
			.database()
			.ref("/website/speakers")
			.once("value")
			.then(function(snapshot) {
				return snapshot.val();
			})
			.then(function(speakerData) {
				var vm = this;
				vm.speakerNum = speakerData.totalNum;
				var i = 1;
				while (i <= speakerData.totalNum) {
					vm.speakers.push({
						speakerId: i,
						speakerName: speakerData[i].speakerName,
						speakerIntro: speakerData[i].speakerIntro,
						speakerIcon: speakerData[i].speakerIcon
					});
					i++;
				}
				document.getElementById("app").style.display = "block";
				vm.dataReceived = "true";
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
				next();
			})
			.catch((err) => {
				console.log(err);
			});
	}
};
</script>

<style scoped>
.speakers {
	margin-top: 0px;
}
speaker {
	z-index: 10;
}
#dotty {
	z-index: -10;
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
}
</style>
