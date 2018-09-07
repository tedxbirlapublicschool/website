<template>
	<section class="content">
		<h1>{{categoryName}}</h1>
		<div>
			<img v-for="member in categoryMembers" v-bind:key="member.memberId" :src="member.memberLogo">
		</div>
	</section>
</template>
<script>
export default {
	name: "Partner",
	props: ["categoryName", "categoryMembers"]
}
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
	max-height: 50vh;
	min-height: 15vh;
	max-width: 40vw;
	min-width: 15vw;
}
</style>
