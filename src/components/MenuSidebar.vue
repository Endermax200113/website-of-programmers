<template>
	<div class="container">
		<div class="menu__sidebar">
			<div class="cont">
				<div class="cover__wrapper">
					<img src="@/assets/img/sidebar/cover.jpg" alt="Обложка на заднем фоне" class="cover">
				</div>

				<div class="who">
					<div class="avatar__wrapper">
						<img src="@/assets/img/sidebar/avatar.jpg" alt="Аватар" class="avatar">
					</div>

					<div class="who__info">
						<div class="who__name">Дмитрий Валак</div>
						<div class="who__activity">блог front-end разработчика</div>
					</div>
				</div>

				<hr class="line">

				<ul class="menu__list">
					<li class="menu__item">
						<div class="menu__link">Статьи</div>

						<ul class="submenu__list">
							<li class="submenu__item">
								<a href="#" class="submenu__link">Создание сайтов</a>
							</li>

							<li class="submenu__item">
								<a href="#" class="submenu__link">Интернет-маркетинг</a>
							</li>

							<li class="submenu__item">
								<a href="#" class="submenu__link">Продвижение видео</a>
							</li>
						</ul>
					</li>

					<li class="menu__item">
						<a href="#" class="menu__link">Обо мне</a>
					</li>

					<li class="menu__item">
						<a href="#" class="menu__link">Реклама</a>
					</li>

					<li class="menu__item">
						<RouterLink to="/profile" class="menu__link">Профиль</RouterLink>
					</li>
				</ul>

				<div class="btns">
					<button type="button" class="btns__btn btns__btn_works" @click="$router.push('/works');">Мои работы</button>
					<button type="button" class="btns__btn btns__btn_write" @click="showContact">Написать мне</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	methods: {
		...mapMutations([
			'setModalWindow'
		]),
		showContact() {
			this.setModalWindow(this.getModals.Contact)
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
	position: relative
	width: 0px
	height: calc(100vh - 40px)
	overflow: hidden
	transition: width .3s ease-in-out
	z-index: 2

	&.show
		width: 315px
	
	@media only screen and (min-width: 701px)
		width: 0px

		&.show
			width: 0px

.cont
	margin-bottom: 30px

.menu
	&__sidebar
		right: 15px
		position: absolute
		width: 300px
		height: 100%
		background-color: $color-dim-black
		overflow-y: auto
		box-shadow: 9px 0px 15px rgba(0, 0, 0, 0.3), inset -10px 0px 5px rgba(5, 5, 5, 0.35)
		transition: margin-left .3s ease-in-out
	
	&__list
		margin: 0px 30px 55px
		list-style: none
	
	&__item
		margin-bottom: 15px

		&:first-child > .menu__link:hover, .menu__link:active
			color: $color-full-white
	
	&__link
		font-family: $font-roboto
		font-weight: 300
		font-size: 16px
		line-height: 19px
		color: $color-full-white
		text-decoration: none

		&:hover, &:active
			color: $color-light-blue

.submenu
	&__list
		margin-top: 5px
		margin-left: 17px
		list-style: none
	
	&__link
		font-family: $font-roboto
		font-weight: 300
		font-size: 15px
		line-height: 32px
		color: $color-full-white
		text-decoration: none

		&:hover, &:active
			color: $color-light-blue

.cover
	width: 100%
	height: 100%
	object-fit: cover

	&__wrapper
		width: 100%
		height: 100px
		background-color: $color-light-gray

.who
	width: calc(100% - 30px)
	margin: -15px 15px 0px
	display: flex
	justify-content: flex-start
	align-items: flex-end

	&__info
		margin-left: 10px
	
	&__name
		margin-bottom: 2px
		font-family: $font-roboto
		font-weight: 400
		font-size: 15px
		line-height: 18px
		color: $color-full-white
	
	&__activity
		font-family: $font-roboto
		font-weight: 300
		font-size: 12px
		line-height: 14px
		text-align: center
		color: $color-white

.avatar
	width: 100%
	height: 100%
	background-color: $color-full-white
	border: 2px solid $color-full-white
	object-fit: cover
	border-radius: 50%

	&__wrapper
		width: 65px
		height: 65px

.line
	margin: 12px 15px 30px
	border: 1px solid $color-black1

.btns
	width: calc(100% - 40px)
	margin: 0px 20px
	display: flex
	justify-content: space-between

	&__btn
		width: 120px
		height: 40px
		border: 0
		outline: 0
		border-radius: 25px
		font-family: $font-roboto
		font-weight: 500
		font-size: 12px
		line-height: 14px
		text-align: center
		color: $color-full-white

		&_works
			background-color: $color-red
			box-shadow: 0px 7px 17px -10px rgba(242, 63, 63, 0.2)
		
		&_write
			background-color: $color-blue
			box-shadow: 0px 7px 17px -10px rgba(32, 84, 219, 0.35)
</style>