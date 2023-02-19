<template>
	<textarea class="textbox" @keypress="onInput" @keydown="onInput" @keyup="onInput" placeholder="Текст комментария"></textarea>
</template>

<script>
export default {
	methods: {
		onInput() {
			let textbox = document.querySelector('.textbox');

			textbox.style.height = 0;
			textbox.style.height = (textbox.scrollHeight) + "px";
		}
	}
}
</script>

<style scoped lang="sass">
.textbox
	width: 100%
	height: 16px
	padding-bottom: 2px
	border: 0
	outline: 0
	resize: none
	overflow: hidden
	background-color: transparent
	border-bottom: 2px solid $color-dark-gray
	font-family: $font-roboto
	font-weight: 400
	font-size: 14px
	line-height: 16px
	color: $color-full-white
	// transition: height .3s ease-in-out

	&::placeholder
		color: rgba($color-full-white, 0.2)

</style>