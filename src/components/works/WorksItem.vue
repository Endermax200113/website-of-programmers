<template>
	<div class="works__item">
		<div class="works__item_element wrap">
			<img :src="work.image" :alt="work.altImage" class="image">
		</div>

		<div class="works__item_element info">
			<h2 class="info__site">{{ work.site }}</h2>

			<p class="info__description">{{ work.description }}</p>

			<div class="info__tags">
				<div 
					class="info__tags_tag"
					v-for="tag in work.tags"
				>{{ tag }}</div>
			</div>

			<button type="button" class="info__button">Перейти на сайт</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		work: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped lang="sass">
.works__item
	width: 100%
	height: 550px
	margin-bottom: 30px
	background-color: $color-foreground
	box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35)
	border-radius: 5px
	display: flex
	justify-content: space-between

	@media only screen and (max-width: 500px)
		height: auto
		flex-direction: column
		justify-content: flex-start

	&:last-child
		margin-bottom: 0px
	
	&_element
		flex-basis: 50%
		width: 50%

		@media only screen and (max-width: 500px)
			flex-basis: 100%
			width: 100%

	& .wrap
		height: 100%

		@media only screen and (max-width: 500px)
			height: 180px
			flex-basis: unset

		& .image
			width: 100%
			height: 100%
			object-fit: cover
			border-top-left-radius: 5px
			border-bottom-left-radius: 5px

			@media only screen and (max-width: 500px)
				border-bottom-left-radius: 0px
				border-top-right-radius: 5px
	
	& .info
		position: relative
		flex-basis: calc(50% - 50px)
		width: calc(50% - 50px)
		height: calc(100% - 55px)
		padding: 30px 25px 25px
		transition: flex-basis .3s ease-in-out, width .3s ease-in-out, height .3s ease-in-out, padding .3s ease-in-out

		@media only screen and (max-width: 700px)
			flex-basis: calc(50% - 40px)
			width: calc(50% - 40px)
			height: calc(100% - 45px)
			padding: 25px 20px 20px
		
		@media only screen and (max-width: 500px)
			flex-basis: calc(100% - 30px)
			width: calc(100% - 30px)
			padding: 20px 15px 20px
			height: auto
			display: flex
			flex-direction: column

		&__site
			margin-bottom: 30px
			font-family: $font-roboto
			font-weight: 500
			font-size: 24px
			line-height: 28px
			color: $color-full-white
			transition: margin-bottom .3s ease-in-out

			@media only screen and (max-width: 700px)
				margin-bottom: 20px
			
			@media only screen and (max-width: 500px)
				font-size: 18px
				line-height: 21px
		
		&__description
			margin-bottom: 30px
			font-family: $font-roboto
			font-weight: 300
			font-size: 16px
			line-height: 27px
			color: $color-dim-white
			transition: margin-bottom .3s ease-in-out, line-height .3s ease-in-out

			@media only screen and (max-width: 700px)
				margin-bottom: 20px
				line-height: 22px
			
			@media only screen and (max-width: 500px)
				font-size: 14px
				line-height: 21px
		
		&__tags
			display: flex
			flex-wrap: wrap

			@media only screen and (max-width: 500px)
				margin-bottom: 10px

			&_tag
				margin-right: 10px
				margin-bottom: 10px
				background-color: $color-yellow
				border-radius: 3px
				padding: 4px 9px
				font-family: $font-roboto
				font-weight: 400
				font-size: 11px
				line-height: 13px
				color: $color-full-white

				&:last-child
					margin-right: 0px
		
		&__button
			position: absolute
			bottom: 25px
			right: 25px
			border: 0
			outline: 0
			padding: 8px 13px
			background-color: $color-blue
			box-shadow: 0px 4px 15px -7px rgba(48, 55, 201, 0.3)
			border-radius: 5px
			font-family: $font-roboto
			font-weight: 400
			font-size: 12px
			line-height: 14px
			color: $color-full-white
			cursor: pointer

			@media only screen and (max-width: 500px)
				position: static
				align-self: flex-end
</style>