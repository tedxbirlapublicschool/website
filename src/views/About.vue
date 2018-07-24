<template>
    <div id="about">
	<div class="ted">
        <h1>About Ted</h1>
        <p>
            TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
		</p>
		<br>
		<p>	
The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; the Open Translation Project, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established the annual TED Prize, where exceptional individuals with a wish to change the world get help translating their wishes into action; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.
        </p>
	</div>
	<div class="tedx">
        <h1>About Tedx</h1>
        <p>
            In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
         </p>
		 </div>
    </div>

</template>
<script>
export default {
	name: "About",
	title: "About"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
@import "../minireset.min.css";
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon");
@import url("https://fonts.googleapis.com/css?family=Anton");

#about {
	overflow: hidden;
	color: black;
	font-size: 2em;
	font-weight: 300;
}
body {
	font-family: "Roboto";
	background-color: #ff103d;
}
h1 {
	font-family: "Do Hyeon";
	letter-spacing: 2px;
	color: black;
	font-size: 4em;
	font-weight: bolder;
	line-height: 2.5em;
}
</style>
