<template>
	<div class="recommendation">
		<PostItemRecommendation
			v-for="article in recommendation"
			:key="article.id"
			:article="article"
		/>
	</div>
</template>

<script>
import PostItemRecommendation from '@/components/posts/PostItemRecommendation';

export default {
	components: {
		PostItemRecommendation
	},
	props: {
		recommendation: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped lang="sass">
.recommendation
	width: 100%
	display: flex
	flex-wrap: wrap
	justify-content: space-between
	align-content: space-between

	@media only screen and (max-width: 500px)
		flex-direction: column
		flex-wrap: nowrap
</style>