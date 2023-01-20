<template>
	<div class="posts">
		<PostItem 
			v-for="post in posts"
			:key="post.id"
			:post="post" />
	</div>
</template>

<script>
import PostItem from '@/components/posts/PostItem';

export default {
	components: {
		PostItem
	},
	props: {
		posts: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped lang="sass">
.posts
	width: 100%
</style>