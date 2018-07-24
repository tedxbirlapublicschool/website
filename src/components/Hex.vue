<template>
<div class = "container-grid">
<div class="container">
  <img src = "../assets/HexPics/am.png" alt="Avatar" class="image">
  <div class="middle">
    <button class="text">Learn More</button>
  </div>
  </div>
<div class="container">
  <img src = "../assets/HexPics/ca.png" alt="Avatar" class="image">
  <div class="middle">
    <button class="text">Learn More</button>
  </div>
  </div>
<div class="container">
  <img src = "../assets/HexPics/ks.png" alt="Avatar" class="image">
  <div class="middle">
    <button class="text">Learn More</button>
  </div>
  </div>
<div class="container">
  <img src = "../assets/HexPics/na.png" alt="Avatar" class="image">
  <div class="middle">
    <button class="text">Learn More</button>
  </div>
  </div>
<div class="container">
  <img src = "../assets/HexPics/rk.png" alt="Avatar" class="image">
  <div class="middle">
    <button class="text">Learn More</button>
  </div>
  </div>
</div>
</template>
<script>
export default {
	name: "Hex"
};
</script>

<style>
@import "../minireset.min.css";
.container-grid {
	display: grid;
	grid-template-columns: 500px 500px 500px;
	grid-template-rows: 300px 300px 300px;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	background-color: black;
}
.container {
	position: relative;
	width: 50%;
	margin: 0px;
}

.image {
	opacity: 1;
	display: block;
	width: 100%;
	height: auto;
	transition: 0.5s ease;
	backface-visibility: hidden;
}

.middle {
	transition: 0.5s ease;
	opacity: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	text-align: center;
}

.container:hover .image {
	opacity: 0.3;
}

.container:hover .middle {
	opacity: 1;
}

.button {
	background-color: white;
	color: black;
	font-size: 16px;
	padding: 15x 15px;
	border: 0px;
	border-radius: 30%;
}
</style>
