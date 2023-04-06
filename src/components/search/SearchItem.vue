<template>
	<div class="search__item">
		<h2 class="article__element title">{{ article.title }}</h2>

		<div class="article__element description" v-if="article.description !== ''">{{ article.description }}</div>
		
		<div class="article__element bottom">
			<div class="bottom__element">
				<time class="bottom__element_info date" :datetime="article.date">{{ article.date }}</time>

				<div class="bottom__element_info tags">
					<div 
						class="tags__item"
						v-for="tag in article.tags"
					>{{ tag }}</div>
				</div>
			</div>

			<div class="bottom__element">
				<RouterLink to="/article" class="go">перейти</RouterLink>
			</div>
		</div>
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
.search__item
	width: calc(100% - 50px)
	padding: 25px
	margin-bottom: 30px
	background-color: $color-foreground
	box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35)
	border-radius: 5px
	transition: padding .3s ease-in-out, width .3s ease-in-out

	@media only screen and (max-width: 500px)
		width: calc(100% - 30px)
		padding: 15px

	&:last-child
		margin-bottom: 0px

.article__element
	margin-bottom: 15px

	&:last-child
		margin-bottom: 0px

.title
	font-family: $font-roboto
	font-weight: 500
	font-size: 18px
	line-height: 21px
	color: $color-full-white

.description
	font-family: $font-roboto
	font-weight: 400
	font-size: 14px
	line-height: 21px
	color: $color-dim-white

.bottom
	display: flex
	justify-content: space-between

	@media only screen and (max-width: 500px)
		flex-direction: column

	&__element
		display: flex

		&_info
			font-family: $font-lato
			font-weight: 400
			font-size: 12px
			line-height: 14px
			color: $color-gray

			&.tags
				position: relative
				margin-left: 15px
				display: flex
				align-items: flex-start

				& .tags__item
					margin-left: 15px

					&::before
						content: ''
						position: absolute
						top: 5px
						left: -2.5px
						width: 6px
						height: 6px
						background-color: $color-light-gray
						border-radius: 50%

		& .go
			font-family: $font-roboto
			font-weight: 400
			font-size: 14px
			line-height: 16px
			text-align: right
			text-decoration: none
			color: $color-light-blue

			@media only screen and (max-width: 500px)
				margin-top: 7px
</style>