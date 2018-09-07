<template>
    <div id="about" v-if="dataReceived">
	<div class="ted">
        <h1>About TED</h1>
        <p>
            TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
        </p>
		<p>
		The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; the Open Translation Project, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established the annual TED Prize, where exceptional individuals with a wish to change the world get help translating their wishes into action; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.
        </p>
		<br>
        <h1>About TEDx</h1>
        <p>
            In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
        </p>
		<br>
		<h1>About TEDxBirlaPublicSchool</h1>
		<p>{{tedxbpsText}}</p>
		<br>
		<Map :mapSrc="mapSrc"></Map>
	</div>
    </div>
</template>
<script>
import { trigger } from "@/index.js";
import Map from "@/components/Map.vue";
import { firebase } from "@/firebase.js";
export default {
	name: "About",
	title: "About",
	components: {
		Map
	},
	mounted: function() {
		trigger("about");
	},
	data: function(){
		return {
			dataReceived: null,
			mapSrc: "",
			tedxbpsText: ""
		}
	},
	created: function() {
		this.fetchData();
	},
	watch: {
		"$route": "fetchData"
	},
	methods: {
		fetchData() {
			var vm = this;
			return firebase
				.database()
				.ref("/website/about")
				.on("value", function(snapshot){
					var aboutData = snapshot.val();
					vm.mapSrc = aboutData.mapSrc;
					vm.tedxbpsText = aboutData.tedxbpsText;
					vm.dataReceived = "true";
					document.getElementById("app").style.display = "block";
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
		}
	}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
@import "../minireset.min.css";
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon");
@import url("https://fonts.googleapis.com/css?family=Anton");

#about {
	overflow: hidden;
	min-height: 100vh;
	width: 100%;
	background-color: #ff103d;
}
.ted {
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
</style>
