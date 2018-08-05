<template>
<div id = "map">
<div class="contact">
<h1>Contact Us</h1>
P.O. Box: 24686
<br>
Building No. 160,
<br>
Plot No. 78,
<br>
Zone No. / Area No. 56,
<br>
Street No. 1011, Street Name : Kanis,
<br>
Sub-area Name : Mesaimeer,
<br>
Opposite Religious Complex, Abu Hamour,
<br>
Doha – Qatar.
<br>
Phone: +974 44676701 / 2 / 3
<br>
Fax: +974 44676101
<br>
Email: bpsdoha@qatar.net.qa
</div>
<div class = "map">
    <iframe
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAc0JyGCT5IZPRYNnl5nZJ2kk1OA4_deDE
    &q=Birla+Public+School,+Doha" allowfullscreen>
</iframe>
</div>
</div>
</template>

<style scoped>
@import "../minireset.min.css";
.map {
	float: right;
	width: 80%;
}
.contact {
	float: left;
	color: white;
	line-height: 2em;
	font-size: 1.5em;
	margin: 0px;
}
iframe {
	margin: 0px;
	overflow: hidden;
	max-width: 100%;
	width: 100%;
	height: 100%;
	border: 0;
}
.contact h1 {
	font-size: 2em;
	margin-bottom: 0.6em;
}
#map {
	background-color: red;
	display: flex;
}
</style>
