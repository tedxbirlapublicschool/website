<template>

	<div id="speakers">
    <div class="speaker">

		<figure style="margin-top:55px;">
			<img src="../assets/HexPics/am.png" alt="am">
		</figure>
		<article>
		<h1>Aditya Maheswaran</h1>
		<p>
			An engineer and an MBA graduate by qualification, Aditya Maheswaran has represented India in the reputed
			World Championship of Public Speaking (WCPS) twice and ranked second out of more than forty
			thousand candidates globally. He has been awarded the prestigious ‘Best Public Speaker Award’ by
 			Toastmasters International. As an exceptional orator, regular TEDx speaker and one who has overcome
			many challenges in life, he is role model for today's youth.
		</p>
		</article>
		
	</div>
	<div class="speaker">
		
		<figure>
			<img src="../assets/HexPics/ks.png">
		</figure>
		<article>
			<h1>Kriti Sharma</h1>
			<p>
Kriti Sharma, is an artificial intelligence
technologist, mobile product inventor and
one of the last chatbot executives in the
financial industry. In 2017, Sharma was
named in Forbes magazine's 30 Under 30.
She is an expert on financial technology, big
data, product management and millennial
entrepreneurship. She is currently the Vice
President of Bots and AI at Sage Group, one
of the UK’s largest tech companies. She is the
inventor of “invisible accounting”, first of its
kind chatbot for business finances. She has
been leading efforts to create more diverse
and ethical artificial intelligence and
“embracing bottoms” which means that AI
does not have to pretend to be human,
instead it needs to be useful.
			</p>
		</article>
	</div>
	<div class="speaker">
		
		<figure>
			<img src="../assets/HexPics/na.png">
		</figure>
		<article>
			<h1>Nawaal Akram</h1>
			<p>
Nawaal Akram is a Qatari comedian, model,
athlete and disability rights campaigner. She
was diagnosed with Duchenne muscular
dystrophy at the age of six, and was
forcefully removed from education against
her wishes at the age of 10 by the school.
She became wheelchair-bound at age of 12.
In 2016, she founded the organisation
Muscular Dystrophy Qatar to raise awareness
of the condition within the country. She has
since performed stand up comedy as a
comedian with Stand Up Comedy Qatar
(SUCQ), the country's first and only collective
of stand up comedians, that was started in
November 2010. Akram also works a model.
Akram took up the Paralympic sport Boccia,
and expanded her social media presence
including her YouTube channel "Nawaal's
Adventures". She was named one of BBC's
100 Women programme, signifying her as
one of the most influential and inspiration
women of the year.
			</p>
		</article>
	</div>
	<div class="speaker">
		
		<figure>
			<img src="../assets/HexPics/rk.png">
		</figure>
		<article>
			<h1>Rohit Khandelwal</h1>
			<p>
Rohit Khandelwal, is an Indian model
and Actor. He made his television
debut by appearing in Episode 76 of
Yeh Hai Aashiqui, an Indian television
series that presented dramatization of
love stories and aired on Bindass. Later
he portrayed the role of Bhuvan, the
leader of handloom weavers on the
television series ‘’Million Dollar Girl’’,
which was televised by Channel V. He
was named Mr. India 2015 and also
became the first Asian to win the Mr.
World title in 2016. Rohit Khandelwal
has also been a TEDx speaker at
TEDxUPES at University of Petroleum
and Energy Studies, Dehradun.
			</p>
		</article>
	</div>
	<div class="speaker">
		
		<figure>
			<img src="../assets/HexPics/ca.png">
		</figure>
		<article>
			<h1>Chandrashekar Angadi</h1>
			<p>
				An Engineer by profession and
Performer by Passion. He is a born public
speaker who has tried his hands on
Anchoring / Hosting events, Short Films,
Theatre, musical ballet, voice over artist
and modelling. His latest muse is being a
Stand - Up Comedian for which he is fast
gaining international repute. Apart from
regular shows, he has done opening acts
for famous Indian Comedians like Amit
Tandon and Zakir Khan. He firmly
believes 'Stage is his second home’. He
has acted in many short films, few of
which have won many international
awards. He has also participated in the
World Championship of Public Speaking
twice.
			</p>
		</article>
	</div>
	
	</div>
</template>

<script>
export default {
	name: "Speakers",
	title: "Speakers"
};
</script>

<style>
@import "../minireset.min.css";
body,
html {
	height: 100%;
	background: #870000;
	background: -moz-linear-gradient(top, #870000 0%, #190a05 100%);
	background: -webkit-linear-gradient(top, #870000 0%, #190a05 100%);
	background: linear-gradient(to bottom, #870000 0%, #190a05 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#870000', endColorstr='#190a05',GradientType=0 );

	background: #e52d27; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to left,
		#b31217,
		#e52d27
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to left,
		#b31217,
		#e52d27
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
img {
	float: left;
	width: 300px;
}
.speakers {
	margin-top: 0px;
}
.speaker {
	padding: 50px;
	min-height: 100vh;
	overflow: hidden;
	color: black;
	font-size: 2em;
	font-weight: 300;
	font-family: "Roboto";
	margin: 0px;
	display: grid;
	grid-template-columns: 33% auto;
}
p {
	text-align: left;
}
h1 {
	font-family: "Do Hyeon";
	letter-spacing: 2px;
	color: black;
	font-size: 4em;
	font-weight: bolder;
	line-height: 1em;
	padding: 0px;
	margin: 0px;
}
</style>
