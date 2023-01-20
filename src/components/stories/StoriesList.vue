<template>
	<div class="stories" v-if="stories.length > 0">
		<Story
			v-for="story in stories"
			:story="story"
			:key="story.id"/>
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
	margin-bottom: 30px
	display: flex
	justify-content: space-between
</style>