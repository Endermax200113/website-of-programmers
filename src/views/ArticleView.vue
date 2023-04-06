<template>
	<div class="container">
		<article class="post">
			<div class="top">
				<a href="#" class="top__button">вернуться назад</a>

				<span class="top__button top__button_share" @click="showShare">поделиться <Share class="top__button_icon" /></span>
			</div>

			<div class="basic">
				<h1 class="basic__title">Как создать сайты легко</h1>
	
				<div class="basic__info">
					<time class="basic__info_element date" datetime="21.06.2020">21.06.2020</time>
	
					<div class="basic__info_element tags">
						<div class="tags__item">создание сайтов</div>
					</div>
				</div>
			</div>

			<div class="article">
				<p class="article__element paragraph">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
					<br><br>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
				</p>

				<div class="article__element image">
					<div class="image__background"></div>
					<img src="@/assets/img/posts/4.jpg" alt="Код PHP на ноутбуке" class="image__original">
				</div>

				<p class="article__element paragraph">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
				</p>
			</div>

			<hr class="post__line">
			
			<h2 class="post__title">Интересно почитать</h2>
			<PostListRecommendation :recommendation="recommendation" />

			<hr class="post__line">

			<h2 class="post__title">Обсуждение</h2>
			<WriteComment />
			<button type="button" class="send">Отправить</button>
			
			<CommentList :comments="comments" />
		</article>
	</div>
</template>

<script>
import Share from '@/assets/svg/social/share/Share';
import PostListRecommendation from '@/components/posts/PostListRecommendation';
import WriteComment from '@/components/WriteComment';
import CommentList from '@/components/comments/CommentList';
import { mapGetters, mapMutations } from 'vuex';

export default {
	components: {
		Share, PostListRecommendation, WriteComment, CommentList
	},
	data() {
		return {
			recommendation: [
				{
					id: 0,
					title: 'Как я сходил на FrontEnd Conf 2021',
					date: '21.06.2020'
				},
				{
					id: 1,
					title: 'Как писать код быстро и безболезненно?',
					date: '21.06.2020'
				},
				{
					id: 2,
					title: 'Купил новый ноутбук за 150 000 руб',
					date: '21.06.2020'
				},
				{
					id: 3,
					title: 'Купил новый ноутбук за 150 000 руб',
					date: '21.06.2020'
				}
			],
			comments: [
				{
					id: 0,
					avatar: require('@/assets/img/avatars/1.jpg'),
					name: 'Дмитрий Валак',
					when: '1 неделю назад',
					comment: 'Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
					answers: [
						{
							id: 0,
							avatar: require('@/assets/img/avatars/2.jpg'),
							name: 'Джонни',
							when: '1 неделю назад',
							comment: 'Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.'
						}
					]
				}
			]
		}
	},
	methods: {
		...mapMutations([
			'setModalWindow'
		]),
		showShare() {
			this.setModalWindow(this.getModals.Share);
		}
	},
	computed: {
		...mapGetters([
			'getModals'
		])
	}
}
</script>

<style scoped lang="sass">
.container
	width: 600px
	margin: 0 auto
	transition: width .3s ease-in-out

	@media only screen and (max-width: 700px)
		width: 445px
	
	@media only screen and (max-width: 500px)
		width: 290px

.post
	width: calc(100% - 50px)
	padding: 15px 25px 40px
	margin-bottom: 80px
	background-color: $color-foreground
	box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35)
	border-radius: 5px
	transition: padding .3s ease-in-out, width .3s ease-in-out, margin-bottom .3s ease-in-out

	@media only screen and (max-width: 500px)
		width: calc(100% - 30px)
		padding: 15px 15px 20px
		margin-bottom: 45px

	&__line
		border: 1px solid $color-black1
		margin: 30px 0px
	
	&__title
		margin-bottom: 20px
		font-family: $font-roboto
		font-weight: 500
		font-size: 16px
		line-height: 19px
		color: $color-full-white

.top
	display: flex
	justify-content: space-between
	align-items: center

	& .top__button
		display: flex
		align-items: center
		font-family: $font-roboto
		font-weight: 400
		font-size: 12px
		line-height: 14px
		text-decoration: none
		color: $color-full-white
		opacity: 0.6
		
		&.top__button_share
			cursor: pointer

		& .top__button_icon
			margin-left: 7.63px

.basic
	margin-top: 15px

	&__title
		margin: 0px
		font-family: $font-roboto
		font-weight: 500
		font-size: 18px
		line-height: 21px
		color: $color-full-white
	
	&__info
		margin-top: 5px
		display: flex
		transition: margin-top .3s ease-in-out

		@media only screen and (max-width: 500px)
			margin-top: 10px

		&_element
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

.article
	display: flex
	flex-direction: column

	&__element
		margin-top: 25px
		transition: margin-top .3s ease-in-out

		@media only screen and (max-width: 500px)
			margin-top: 18px
	
		&.paragraph
			font-family: $font-roboto
			font-weight: 400
			font-size: 14px
			line-height: 21px
			color: $color-full-white
		
		&.image
			position: relative
			width: 100%
			height: 230px
			background-color: $color-light-gray
			transition: height .3s ease-in-out

			@media only screen and (max-width: 500px)
				height: 110px

			& .image__background
				position: absolute
				width: 100%
				height: 100%
				background-color: #0b0c12
				opacity: .85
				z-index: 2

			& .image__original
				width: 100%
				height: 100%
				object-fit: cover
				z-index: 1

.send
	margin-top: 12px
	border: 0
	outline: 0
	padding: 8px 15px
	background-color: $color-blue
	box-shadow: 0px 4px 15px -7px rgba(48, 55, 201, 0.3)
	border-radius: 5px
	font-family: $font-roboto
	font-weight: 400
	font-size: 12px
	line-height: 14px
	color: $color-full-white
</style>