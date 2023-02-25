<template>
	<header class="header">
		<nav class="navigation">
			<ul class="menu left">
				<li @click="toggleMenu" class="menu__item mobile">
					<ButtonMenu class="btn__menu"/>
				</li>

				<li class="menu__item">
					<a href="#" class="menu__link">Главная</a>
				</li>
				
				<li class="menu__item">
					<button @click="submenuArticles" type="button" class="menu__btn">Статьи <IconArrowDown class="menu__btn_arrow"/></button>

					<ul class="menu__subitems hide">
						<li class="menu__subitem">
							<a href="#" class="menu__sublink">Создание сайтов</a>
						</li>
						
						<li class="menu__subitem">
							<a href="#" class="menu__sublink">Интернет-маркентинг</a>
						</li>
						
						<li class="menu__subitem">
							<a href="#" class="menu__sublink">Продвижение видео</a>
						</li>
					</ul>
				</li>
				
				<li class="menu__item">
					<a href="#" class="menu__link">Обо мне</a>
				</li>
				
				<li class="menu__item">
					<a href="#" class="menu__link">Реклама</a>
				</li>
			</ul>

			<ul class="menu right">
				<li class="menu__item">
					<a href="#" class="menu__link">Профиль</a>
				</li>
				
				<li class="menu__item menu__item_search">
					<input type="search" class="menu__search" placeholder="Поиск по блогу">
				</li>
			</ul>
		</nav>
		<div @click="closeMenu" class="background"></div>
		<MenuSidebar class="menu__sidebar-1" />
	</header>
	<div class="header empty"></div>
</template>

<script>
import IconArrowDown from '@/assets/svg/ArrowDown';
import ButtonMenu from '@/assets/svg/ButtonMenu';
import MenuSidebar from '@/components/MenuSidebar';

export default {
	components: {
		IconArrowDown, ButtonMenu, MenuSidebar
	},
	data() {
		return {
			showingSubmenuArticles: false,
			showingMobileMenu: false
		}
	},
	methods: {
		submenuArticles() {
			let button = document.querySelector('.menu__btn');
			let submenu = document.querySelector('.menu__subitems');
			let arrow = document.querySelector('.menu__btn_arrow');
			
			if (!this.showingSubmenuArticles) {
				submenu.classList.remove('hide');
				arrow.classList.add('show');
				button.classList.add('show');
			} else {
				submenu.classList.add('hide');
				arrow.classList.remove('show');
				button.classList.remove('show');
			}

			this.showingSubmenuArticles = !this.showingSubmenuArticles;
		},
		toggleMenu() {
			let button = document.querySelector('.btn__menu');
			let sidebar = document.querySelector('.menu__sidebar-1');
			let bg = document.querySelector('.background');

			if (!this.showingMobileMenu) {
				button.classList.add('close');
				sidebar.classList.add('show');
				bg.classList.add('show');
			} else {
				button.classList.remove('close');
				sidebar.classList.remove('show');
				bg.classList.remove('show');
			}

			this.showingMobileMenu = !this.showingMobileMenu;
		},
		closeMenu() {
			if (this.showingMobileMenu)
				this.toggleMenu();
		}
	}
}
</script>

<style scoped lang="sass">
.header
	position: fixed
	width: calc(100% - 300px)
	height: 40px
	background-color: $color-dim-black
	box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.25)
	z-index: 9999
	transition: width .3s ease-in-out

	@media only screen and (max-width: 1000px)
		width: 100%

	&.empty
		position: relative
		width: 100%
		margin-bottom: 60px
		opacity: 0
		z-index: -9999
		transition: margin-bottom .3s ease-in-out

		@media only screen and (max-width: 500px)
			margin-bottom: 20px

.background
	position: fixed
	width: 0vw
	height: calc(100vh - 40px)
	z-index: 1
	transition: background-color .3s ease-in-out, width .0s ease-in-out .3s

	&.show
		width: 100vw
		background-color: #0008
		transition: background-color .3s ease-in-out, width .0s ease-in-out
	
	@media only screen and (min-width: 701px)
		&.show
			width: 0vw
			background-color: transparent
			transition: background-color .3s ease-in-out, width .0s ease-in-out .3s

.navigation
	width: 100%
	height: 100%
	display: flex
	justify-content: space-between

.menu
	flex-basis: 50%
	height: 100%
	display: flex
	transition: margin-top .3s ease-in-out

	&.right
		justify-content: flex-end
	
	&.left
		position: relative

		@media only screen and (max-width: 700px)
			margin-top: -100%
		
		@media only screen and (max-width: 660px)
			transition: margin-top .0s ease-in-out
		
		@media only screen and (max-width: 500px)
			flex-basis: 0px
			margin-top: 0%

	&__sidebar
		z-index: 2

	&__item
		position: relative
		height: 100%
		list-style: none
		transition: margin-top .3s ease-in-out

		&.mobile
			width: 30px
			height: calc(100% - 20px)
			position: absolute
			margin-top: -100%
			padding: 10px 15px
			transition: margin-top .3s ease-in-out
			cursor: pointer
		
		&_search
			width: 210px

		@media only screen and (max-width: 700px)
			&:first-child
				margin-top: -100%
			
			&.mobile
				margin-top: 200%
		
		@media only screen and (max-width: 660px)
			display: none
			
			&_search
				display: flex
				width: 210px
			
			&.mobile
				display: list-item
	
	&__link
		height: 100%
		padding: 0 15px
		display: flex
		align-items: center
		font-family: $font-roboto
		font-weight: 400
		font-size: 11px
		line-height: 13px
		text-transform: uppercase
		text-decoration: none
		color: $color-full-white

		@media only screen and (max-width: 500px)
			font-size: 0px
			line-height: 0px

		&:hover
			background-color: $color-blue
	
	&__btn
		@extend .menu__link
		background-color: transparent
		outline: 0
		border: 0
		cursor: pointer

		&.show
			background-color: $color-blue

		&_arrow
			margin-left: 15px
			transition: transform .3s ease-in-out

			&.show
				transform: rotate(180deg)

	&__search
		@extend .menu__link
		width: 210px
		padding: 0 20px
		margin-left: 15px
		background-color: $color-foreground
		border: 0
		outline: 0
		font-size: 12px
		line-height: 14px
		text-transform: none
		color: $color-full-white
		box-shadow: -7px 1px 10px rgba(0, 0, 0, 0.3)
		transition: font-size .3s ease-in-out

		&:hover
			background-color: #303030

		&::placeholder
			color: rgba($color-full-white, 0.4)

		@media only screen and (max-width: 700px)
			font-weight: 300
			font-size: 14px
			line-height: 19px
	
	&__subitem
		padding-top: 10px
		list-style: none

		&:last-child
			padding-bottom: 10px

		&s
			position: absolute
			top: 40px
			width: 165px
			bottom: -95px
			border-radius: 0px 0px 5px 5px
			box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2)
			background-color: $color-blue
			overflow-y: hidden
			transition: bottom .3s ease-in-out

			&.hide
				bottom: 0px
	
	&__sublink
		margin-left: 12px
		font-family: $font-roboto
		font-weight: 400
		font-size: 12px
		line-height: 14px
		text-decoration: none
		color: $color-full-white
</style>