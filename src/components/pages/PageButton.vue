<template>
	<button type="button" class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	
}
</script>

<style scoped lang="sass">
.btn
	width: 40px
	height: 40px
	background-color: $color-dim-black
	box-shadow: 0px 0px 10px rgba($color-full-black, 0.15)
	border-radius: 3px
	margin-right: 10px
	border: 0
	outline: 0
	font-family: $font-roboto
	font-weight: 400
	font-size: 14px
	line-height: 16px
	text-align: center
	color: $color-full-white
	cursor: pointer

	&:last-child
		margin-right: 0px

	&.selected
		background-color: $color-dim-light-blue
		box-shadow: 0px 0px 10px rgba(58, 108, 234, 0.15)
</style>