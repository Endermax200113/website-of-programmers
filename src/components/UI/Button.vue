<template>
	<button type="button" class="button">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'Button'
}
</script>

<style scoped lang="sass">
.button
	border: 0
	outline: 0
	padding: 8px 15px
	background-color: $color-blue
	box-shadow: 0px 4px 15px -7px rgba(48, 55, 201, 0.3)
	border-radius: 5px
	font-family: $font-roboto
	font-weight: 400
	font-size: 12px
	line-height: 14px
	color: $color-full-white
	cursor: pointer
</style>