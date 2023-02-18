<template>
	<div class="stories" v-if="stories.length > 0">
		<div class="container">
			<Story
				v-for="story in stories"
				:story="story"
				:key="story.id"/>
		</div>
	</div>
</template>

<script>
import Story from '@/components/stories/Story';

export default {
	components: {
		Story
	},
	props: {
		stories: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped lang="sass">
.stories
	width: 100%
	height: 195px
	margin: -30px 0px 0px -20px
	padding: 30px 20px
	overflow-x: hidden
	transition: width .3s ease-in-out, padding .3s ease-in-out, margin .3s ease-in-out

	@media only screen and (max-width: 500px)
		padding: 20px 15px
		margin: -20px 0px 0px -15px

.container
	width: 100%
	height: 100%
	display: flex
	justify-content: space-between

	@media only screen and (max-width: 700px)
		width: calc(100% + 12.5px)

	@media only screen and (max-width: 500px)
		width: calc(100% + 20px)
</style>