<template>
	<div id="speakers">
		<canvas id="dotty"></canvas>
		<speaker name = "Aditya Maheswaran" img="/img/am.2c2ba357.png" content="An engineer and an MBA graduate by qualification, Aditya Maheswaran has represented India in the reputed World Championship of Public Speaking (WCPS) twice and ranked second out of more than forty thousand candidates globally. He has been awarded the prestigious ‘Best Public Speaker Award’ by Toastmasters International. As an exceptional orator, regular TEDx speaker and one who has overcome many challenges in life, he is role model for today's youth." align="true">
		</speaker>
		<speaker name="Kriti Sharma" img="/img/ks.2893081d.png" content="Kriti Sharma, is an artificial intelligence technologist, mobile product inventor and one of the last chatbot executives in the financial industry. In 2017, Sharma was named in Forbes magazine's 30 Under 30. She is an expert on financial technology, big	data, product management and millennial entrepreneurship. She is currently the Vice President of Bots and AI at Sage Group, one of the UK’s largest tech companies. She is the inventor of “invisible accounting”, first of its kind chatbot for business finances. She has been leading efforts to create more diverse and ethical artificial intelligence and “embracing bottoms” which means that AI does not have to pretend to be human, instead it needs to be useful.">
		</speaker>
		<speaker name = "Nawaal Akram" img="/img/na.bb92db12.png" content="Nawaal Akram is a Qatari comedian, model, athlete and disability rights campaigner. She was diagnosed with Duchenne muscular dystrophy at the age of six, and was forcefully removed from education against her wishes at the age of 10 by the school. She became wheelchair-bound at age of 12. In 2016, she founded the organisation Muscular Dystrophy Qatar to raise awareness of the condition within the country. She has since performed stand up comedy as a comedian with Stand Up Comedy Qatar (SUCQ), the country's first and only collective of stand up comedians, that was started in November 2010. Akram also works a model. Akram took up the Paralympic sport Boccia, and expanded her social media presence including her YouTube channel Nawaal's Adventures. She was named one of BBC's 100 Women programme, signifying her as one of the most influential and inspiration women of the year." align="true">
		</speaker>
		<speaker name ="Rohit Khandelwal" img="/img/rk.072086a9.png" content="Rohit Khandelwal, is an Indian model and Actor. He made his television debut by appearing in Episode 76 of Yeh Hai Aashiqui, an Indian television series that presented dramatization of love stories and aired on Bindass. Later he portrayed the role of Bhuvan, the leader of handloom weavers on the television series ‘’Million Dollar Girl’’, which was televised by Channel V. He was named Mr. India 2015 and also became the first Asian to win the Mr. World title in 2016. Rohit Khandelwal has also been a TEDx speaker at TEDxUPES at University of Petroleum and Energy Studies, Dehradun.">
		</speaker>
		<speaker name="Chandrashekar Angadi" img="/img/ca.214dac60.png" content="An Engineer by profession and Performer by Passion. He is a born public speaker who has tried his hands on Anchoring / Hosting events, Short Films, Theatre, musical ballet, voice over artist and modelling. His latest muse is being a Stand - Up Comedian for which he is fast gaining international repute. Apart from regular shows, he has done opening acts for famous Indian Comedians like Amit Tandon and Zakir Khan. He firmly believes 'Stage is his second home’. He has acted in many short films, few of which have won many international awards. He has also participated in the World Championship of Public Speaking twice." align="true">
		</speaker>
	</div>
</template>

<script>
import { trigger } from "@/index.js";
import Speaker from "@/components/Speaker.vue";
export default {
	name: "Speakers",
	title: "Speakers",
	components: {
		Speaker
	},
	mounted: function() {
		trigger("speakers");
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
