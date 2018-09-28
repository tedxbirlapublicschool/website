<template>
<div id="member">
	<h1>
		{{name}}
	</h1>
	<h2>
		{{post}}
	</h2>
	<img :src=image>
</div>
</template>

<script>
export default {
name:'member',
props:{
	name:String,
	post:String,
	image:String
}
}
</script>

<style>
#member {
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: black;
}
</style>
