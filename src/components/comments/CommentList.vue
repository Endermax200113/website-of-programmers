<template>
	<div class="list">
		<CommentItem 
			v-for="comment in comments"
			:key="comment.id"
			:comment="comment" 
		/>
	</div>
</template>

<script>
import CommentItem from '@/components/comments/CommentItem';

export default {
	components: {
		CommentItem
	},
	props: {
		comments: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped lang="sass">
.list
	width: 100%
	margin-top: 50px
</style>