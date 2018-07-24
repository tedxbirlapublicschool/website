<template>
<div id = "map">
    <iframe
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAc0JyGCT5IZPRYNnl5nZJ2kk1OA4_deDE
    &q=Birla+Public+School,+Doha" allowfullscreen>
</iframe>
</div>
</template>

<style scoped>
@import "../minireset.min.css";
#map {
	padding: 0px;
	background-color: #ff103d;
}
iframe {
	margin: 0px;
	overflow: hidden;
	max-width: 100%;
	width: 100%;
	height: 500px;
	border: 0;
}
</style>
