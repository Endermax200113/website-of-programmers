<template>
	<div class="story" @click="show">
		<div class="wrap">
			<div class="effect"></div>
			<img :src=story.image :alt=story.alt class="image">
		</div>

		<h3 class="title">{{story.title}}</h3>
		<time class="date" :datetime=story.date>{{story.date}}</time>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
	props: {
		story: {
			type: Object,
			required: true
		}
	},
	computed: {
		...mapGetters([
			'getModals'
		])
	},
	methods: {
		...mapMutations({
			setModalWindow: 'setModalWindow'
		}),
		show() {
			this.setModalWindow(this.getModals.Story);
		}
	}
}
</script>

<style scoped lang="sass">
.story
	position: relative
	flex-basis: 140px
	height: 195px
	filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.2))
	cursor: pointer
	overflow-x: hidden
	transition: flex-basis .3s ease-in-out

	@media only screen and (max-width: 700px)
		&:nth-last-child(1)
			flex-basis: 0px
	
	@media only screen and (max-width: 500px)
		&:nth-last-child(2)
			flex-basis: 0px

	& > .wrap
		position: absolute
		width: 100%
		height: 100%
		z-index: -1

		& > .image
			position: absolute
			width: 100%
			height: 100%
			object-fit: cover
			z-index: -1
			border-radius: 5px
		
		& > .effect
			position: absolute
			width: 100%
			height: 100%
			background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 52.08%, rgba(0, 0, 0, 0.406154) 76.41%, rgba(0, 0, 0, 0.8) 100%)
			border-radius: 5px
			z-index: 1
			transition: background .3s ease-in-out

	& > .title
		width: calc(100% - 30px)
		height: 40px
		margin: 15px 15px 0px
		font-family: $font-lato
		font-weight: 400
		font-size: 12px
		line-height: 14px
		color: $color-full-white
	
	& > .date
		position: absolute
		bottom: 15px
		right: 15px
		font-family: $font-lato
		font-weight: 400
		font-size: 12px
		line-height: 14px
		text-align: right
		text-transform: uppercase
		color: $color-full-white
</style>