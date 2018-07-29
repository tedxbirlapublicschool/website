<template>
    <div class="speaker">
    <figure>
        <slot name = "image"></slot>
    </figure>
    <article>
        <h1>{{name}}</h1>
        <p>
        <slot name = "content"></slot>
        </p>
    </article>
    </div>
</template>

<script>
export default {
	name: "Speaker",
	props: ["name"]
};
</script>

<style>
</style>
