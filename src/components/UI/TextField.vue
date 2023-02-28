<template>
	<input type="text" class="textfield">
</template>

<script>
export default {
	name: 'TextField'
}
</script>

<style scoped lang="sass">
.textfield
	height: 27px
	background-color: transparent
	padding: 0
	outline: 0
	border: 0
	border-bottom: 1px solid $color-dark-gray
	padding-bottom: 3px
	font-family: $font-roboto
	font-weight: 400
	font-size: 14px
	line-height: 16px
	color: $color-full-white

	&::placeholder
		color: rgba($color-full-white, .2)
	
	&:focus
		border-bottom: 1px solid $color-light-blue
</style>