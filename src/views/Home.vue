<template>
	<div class="home">
		<div id="herodiv" class="sectiondiv1 w3-center">
			<div style="position: absolute; bottom: 0px; width:100%;" class="w3-center">
				<p class="w3-text-white w3-center address">September 28<sup>th</sup>, 2018</p>
				<p class="w3-text-white w3-center address">Basant Kumar Birla Auditorium</p>
				<p class="w3-text-white w3-center address">Birla Public School, Doha-Qatar</p>
			</div>
		</div>
		<!-- <div class="sectiondiv1">
			<h1>TEDxBirlaPublicSchool</h1>
		</div> -->
		<tedx></tedx>
	</div>
</template>

<script>
import Tedx from "@/components/Tedx.vue";
export default {
	name: "Home",
	components: {
		Tedx
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
