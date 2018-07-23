<template>
    <div id="about">
        <h1>About Ted</h1>
        <p>
            TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; the Open Translation Project, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established the annual TED Prize, where exceptional individuals with a wish to change the world get help translating their wishes into action; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.
        </p>
        <h1>About Tedx</h1>
        <p>
            In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
         </p>
    </div>
</template>

<script>
export default {
	name: "About"
};
</script>

<style>
@import "../minireset.min.css";
#about {
	margin-top: 0px;
	overflow: hidden;
	color: white;
	font-size: 1.5em;
}
#app {
	background: #870000; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to left,
		#190a05,
		#870000
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to left,
		#190a05,
		#870000
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
