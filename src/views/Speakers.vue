<template>
	<div id="speakers" v-if="dataReceived">
		<canvas id="dotty"></canvas>

	</div>
</template>

<script>
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
	created: function() {
		this.fetchData();
	},
	watch: {
		"$route": "fetchData"
	},
	methods: {
		fetchData() {
			var vm = this;
			console.log("hi");
			return firebase
				.database()
				.ref("/website/speakers")
				.once("value")
				.then(function(snapshot) {
					var speakerData = snapshot.val();
					vm.speakerNum = speakerData.totalNum;
					// var i = 1;
					// while (i <= speakerData.totalNum) {
					// 	vm.speakers.push(speakerData[i]);
					// 	vm.speakers[i].speakerId = i;
					// 	i++;
					// }
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
		}
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
