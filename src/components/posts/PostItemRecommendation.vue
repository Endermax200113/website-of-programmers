<template>
	<div class="article">
		<a href="#" class="article__element title">{{ article.title }}</a>
		<time class="article__element date" :datetime=article.date>{{ article.date }}</time>
	</div>
</template>

<script>
export default {
	props: {
		article: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped lang="sass">
.article
	width: 50%
	flex-basis: 50%
	margin-bottom: 25px
	display: flex
	flex-direction: column

	&:nth-last-child(2), &:nth-last-child(1)
		margin-bottom: 0px

	&__element
		width: 100%

		&.title
			font-family: $font-roboto
			font-weight: 500
			font-size: 14px
			text-decoration: none
			line-height: 16px
			white-space: nowrap
			overflow: hidden
			text-overflow: ellipsis
			color: $color-light-yellow
		
		&.date
			margin-top: 5px
			font-family: $font-lato
			font-weight: 400
			font-size: 12px
			line-height: 14px
			color: $color-gray
</style>