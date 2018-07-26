<template>
<div style="width: 100vw; background-color:black;text-align: center;">
<div class = "hexagon">
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


</div>
<div class = "hexagon-2">
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
</div>
</template>
<script>
export default {
	name: "Hex"
};
</script>

<style>
@import "../minireset.min.css";

.hexagon {
	display: flex;
	background-color: black;
	margin: 0px;
	width: 99vw;
}

.hexagon-2 {
	display: flex;
	background-color: black;
	margin-left: 245.5px;
	width: 66vw;
	left: 33%;
}
.container {
	position: relative;
	width: 50%;
	margin: 3px;
}

.image {
	opacity: 1;
	display: block;
	width: 100%;
	height: auto;
	transition: 0.5s ease;
	backface-visibility: hidden;
	margin: 0px;
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

.text {
	background-color: white;
	color: black;
	font-size: 1.4em;
	width: 150px;
	padding: 0px 0px;
	border: 0px;

	-webkit-border-radius: 28;
	-moz-border-radius: 28;
	border-radius: 28px;
}
</style>
