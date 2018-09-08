<template>
    <div id="tickets">
    <img src="../assets/tedxevent.jpeg">
    <div class="content">
        <p>
QR 70 inclusive of food ,beverages ,souvenir
<br> 
Qr 40 exclusive student discount   & 
<br>
students must bring id card to get the discount 

        </p>
        <a href="https://www.q-tickets.com/eventslist.aspx">Get tickets</a>
    </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
@import "../minireset.min.css";
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon");
@import url("https://fonts.googleapis.com/css?family=Anton");
@import "../w3.css";
#tickets {
	height: 100vh;
	display: flex;
	overflow: hidden;
	min-width: 80vh;
	background-color: #ff103d;
	justify-content: center;
	flex-direction: column;
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
	width: 400px;
	height: 400px;
}

a {
	font-size: 1.5em;
	color: white;
	text-decoration: none;
	font-family: "Do Hyeon";
}
</style>
