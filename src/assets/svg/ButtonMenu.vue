<template lang="">
	<svg
		width="30"
		height="20"
		viewBox="0 0 30 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect class="top" width="30" height="2" fill="white" />
		<rect class="center" y="9" width="30" height="2" fill="white" />
		<rect class="bottom" y="18" width="30" height="2" fill="white" />
	</svg>
</template>
<script>
export default {
	data() {
		return {
			close: false
		}
	}
};
</script>
<style lang="sass">
.top
	transform-origin: 15px 10px
	transition: transform .3s ease-in-out, y .3s ease-in-out .3s

	svg.close > &
		y: 9px
		transform: rotate(45deg)
		transition: y .3s ease-in-out, transform .3s ease-in-out .3s

.center
	transform-origin: 15px 10px
	transition: opacity .0s ease-in-out .3s

	svg.close > &
		opacity: 0

.bottom
	transform-origin: 15px 10px
	transition: transform .3s ease-in-out, y .3s ease-in-out .3s

	svg.close > &
		y: 9px
		transform: rotate(-45deg)
		transition: y .3s ease-in-out, transform .3s ease-in-out .3s
</style>
