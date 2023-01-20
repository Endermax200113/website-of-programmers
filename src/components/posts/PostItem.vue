<template>
	<div class="post">
		<div class="post__element image" v-if="post.hasImage">
			<div class="wrap">
				<img :src=post.image :alt=post.imageAlt class="img">
			</div>
		</div>

		<div class="post__element video" v-else-if="post.hasVideo">
			<div class="wrap">
				<img :src=post.video :alt=post.videoAlt class="vid">
				<ButtonPlay class="play"/>
			</div>
		</div>

		<div class="post__element title" v-if="post.hasTitle">{{post.title}}</div>
		<div class="post__element description" v-if="post.hasDescription">{{post.description}}</div>

		<div class="post__element last">
			<div class="info">
				<time class="date" :datetime=post.date>{{post.date}}</time>

				<div class="tags" v-if="post.tags.length > 0" v-for="tag in post.tags">
					<div class="tag">{{tag}}</div>
				</div>
			</div>

			<div class="button" v-if="post.canRead || post.canComment">
				<a href="#" class="button__read" v-if="post.canRead">читать</a>
				<a href="#" class="button__comment" v-else-if="post.canComment">оставить комментарий</a>
			</div>
		</div>
	</div>
</template>

<script>
import ButtonPlay from '@/assets/svg/ButtonPlay';

export default {
	components: {
		ButtonPlay
	},
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped lang="sass">
.post
	width: 100%
	margin-bottom: 30px
	background-color: $color-foreground
	box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35)
	border-radius: 5px

	&:last-child
		margin-bottom: 0px
	
	&__element
		display: inline-block

		&:first-child
			margin-top: 25px
		
		&.image
			&:first-child
				margin-bottom: 25px
				margin-top: 0px
		
		&.video
			&:first-child
				margin-bottom: 25px

.title
	width: calc(100% - 27.78px * 2)
	margin: 0px 27.78px 15px
	font-family: $font-roboto
	font-weight: 500
	font-size: 18px
	line-height: 21px
	color: $color-full-white

.description
	margin: 0px 27.78px 8px
	font-family: $font-roboto
	font-weight: 400
	font-size: 14px
	line-height: 21px
	color: $color-dim-white

.last
	margin: 0px 27.78px
	padding: 5px 0px 25px
	display: flex
	justify-content: space-between
	align-items: center

	& > .info
		display: flex

		& > .date
			font-family: $font-lato
			font-weight: 400
			font-size: 12px
			line-height: 14px
			color: $color-gray
		
		& > .tags
			display: flex

			& > .tag
				position: relative
				margin-left: 36px
				font-family: $font-lato
				font-weight: 400
				font-size: 12px
				line-height: 14px
				text-transform: lowercase
				color: $color-gray

				&::before
					content: ''
					position: absolute
					left: -21px
					top: 5px
					width: 6px
					height: 6px
					background-color: $color-light-gray
					border-radius: 50%

.button__read, .button__comment
	font-family: $font-roboto
	font-weight: 400
	font-size: 14px
	line-height: 16px
	text-align: right
	text-transform: lowercase
	text-decoration: none
	color: $color-light-blue

.image
	width: 100%
	height: 245px
	background-color: $color-light-gray

	& > .wrap
		width: 100%
		height: 100%

		& > .img
			width: 100%
			height: 100%
			object-fit: cover

.video
	width: calc(100% - 50px)
	height: 280px
	margin: 0px 25px
	border-radius: 5px
	background-color: $color-full-black

	& > .wrap
		position: relative
		width: 100%
		height: 100%
		border-radius: 5px

		& > .vid
			width: 100%
			height: 100%
			border-radius: 5px
			object-fit: cover

		& > .play
			position: absolute
			top: 50%
			left: 50%
			transform: translate(-50%, -50%)
			cursor: pointer
</style>