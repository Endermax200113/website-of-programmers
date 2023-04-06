<template>
	<aside class="sidebar">
		<div class="container">
			<div class="cover__wrapper">
				<img src="@/assets/img/sidebar/cover.jpg" alt="Обложка на заднем фоне" class="cover">
			</div>

			<div class="avatar__wrapper">
				<img src="@/assets/img/sidebar/avatar.jpg" alt="Аватар" class="avatar">
			</div>

			<div class="who">
				<div class="who__name">Дмитрий Валак</div>
				<div class="who__activity">блог front-end разработчика</div>

				<div class="who__socials">
					<button type="button" class="who__btn"><Instagram class="who__social" /></button>
					<button type="button" class="who__btn"><Vk class="who__social" /></button>
					<button type="button" class="who__btn"><Pinterest class="who__social" /></button>
				</div>
			</div>

			<hr class="line">

			<div class="about">
				Front-end разработчик. Практик верстки сайтов. Созданием сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности.
			</div>

			<hr class="line">

			<div class="btns">
				<button type="button" class="btn btn_works" @click="$router.push('/works');">Мои работы</button>
				<button type="button" class="btn btn_write" @click="showContact">Написать мне</button>
			</div>
		</div>
	</aside>
</template>

<script>
import Instagram from '@/assets/svg/social/sidebar/Instagram';
import Vk from '@/assets/svg/social/sidebar/Vk';
import Pinterest from '@/assets/svg/social/sidebar/Pinterest';
import { mapMutations, mapGetters } from 'vuex';

export default {
	components: {
		Instagram, Vk, Pinterest
	},
	computed: {
		...mapGetters([
			'getModals'
		])
	},
	methods: {
		...mapMutations([
			'setModalWindow'
		]),
		showContact() {
			this.setModalWindow(this.getModals.Contact)
		}
	},
}
</script>

<style scoped lang="sass">
.sidebar
	position: fixed
	flex-basis: 300px
	width: 300px
	height: 100vh
	background-color: $color-foreground
	overflow-y: auto
	box-shadow: 5px 0px 15px rgba(5, 5, 5, 0.1)
	transition: margin-left .3s ease-in-out

	@media only screen and (max-width: 1000px)
		margin-left: -300px

.cover
	background-color: $color-light-gray
	width: 100%
	height: 100%
	object-fit: cover

	&__wrapper
		width: 100%
		height: 180px
	
.avatar
	width: 100%
	height: 100%
	background-color: $color-full-white
	object-fit: cover
	border: 2px solid $color-full-white
	border-radius: 50%

	&__wrapper
		width: 96px
		height: 96px
		margin: -50px auto 0

.who
	margin-top: 23px
	font-family: $font-roboto
	text-align: center

	&__name
		font-weight: 400
		font-size: 18px
		line-height: 21px
		color: $color-full-white
	
	&__activity
		margin-top: 3px
		font-weight: 300
		font-size: 14px
		line-height: 16px
		color: $color-white

	&__social
		width: 25px
		height: 25px

		&s
			margin-top: 17px
	
	&__btn
		outline: 0
		border: 0
		background-color: transparent
		width: 25px
		height: 25px
		margin-right: 15px
		cursor: pointer

		&:last-child
			margin-right: 0px

.line
	margin: 28px 20px
	border: 1px solid $color-black1
	
.about
	width: 257px
	margin: 0 auto
	font-family: $font-roboto
	font-weight: 400
	font-size: 12px
	line-height: 18px
	text-align: center
	color: $color-full-white
	
.btn
	width: 120px
	height: 40px
	border: 0
	outline: 0
	border-radius: 20px
	font-family: $font-roboto
	font-weight: 500
	font-size: 12px
	line-height: 14px
	text-align: center
	color: $color-full-white
	cursor: pointer

	&_works
		background-color: $color-red
	
	&_write
		background-color: $color-blue

	&s
		display: flex
		justify-content: space-evenly

.container
	margin-bottom: 30px
</style>