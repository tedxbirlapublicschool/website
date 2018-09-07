<template>
	<div id="partners">
		<Partner v-for="category in categoryData" v-bind:key="category.categoryId" :categoryName="category.categoryName" :categoryMembers="category.categoryMembers"></Partner>
	</div>
</template>

<script>
import { trigger } from "@/index.js";
import Partner from "@/components/Partner.vue";
import { firebase } from "@/firebase.js";
export default {
	name: "Partners",
	title: "Partners",
	components: {
		Partner
	},
	mounted: function() {
		trigger("partners");
	},
	data: function() {
		return {
			dataReceived: null,
			categoryData: [],
			categoryNum: 0
		};
	},
	beforeRouteEnter(to, from, next) {
		return firebase
			.database()
			.ref("/website/partners")
			.once("value")
			.then(function(snapshot) {
				return snapshot.val();
			})
			.then(function(data) {
				next((vm) => {
					vm.categoryNum = data.totalCategories;
					var i = 1;
					while (i <= data.totalCategories) {
						var membersData = []
						var j = 1;
						var k = data[i].categoryMembers.membersNum;
						while(j <= k){
							membersData.push({
								memberId: j,
								memberLogo: data[i].categoryMembers[j]
							});
							j++;
						}
						vm.categoryData.push({
							categoryId: i,
							categoryName: data[i].categoryName,
							categoryMembers: membersData
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
			.ref("/website/partners")
			.once("value")
			.then(function(snapshot) {
				return snapshot.val();
			})
			.then(function(data) {
				var vm = this;
				vm.categoryNum = data.totalCategories;
				var i = 1;
				while (i <= data.totalCategories) {
					var membersData = []
					var j = 1;
					var k = data[i].categoryMembers.membersNum;
					while(j <= k){
						membersData.push({
							memberId: j,
							memberLogo: data[i].categoryMembers[j]
						});
						j++;
					}
					vm.categoryData.push({
						categoryId: i,
						categoryName: data[i].categoryName,
						categoryMembers: membersData
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
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
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
