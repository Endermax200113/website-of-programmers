<template>
	<div class="container">
		<div class="window" @click.stop>
			<ButtonClose class="close" @click="close"/>

			<form class="contact">
				<TextField class="textfield" placeholder="Имя Фамилия" />
				<TextField class="textfield" type="email" placeholder="Ваш e-mail" />
				<TextField class="textfield" placeholder="Текст сообщения" />
				<Button class="button">Отправить</Button>
			</form>

			<div class="info">
				<div class="info__contact info__contact_email">e-mail: <a href="mailto:info@mywebsite.ru" class="info__contact info__link">info@mywebsite.ru</a></div>
				<div class="info__contact">тел: <a href="tel:+94323285622" class="info__contact info__link">+943-232-856-22</a></div>
			</div>
		</div>
	</div>
</template>

<script>
import ButtonClose from '@/assets/svg/ButtonClose';
import { mapActions } from 'vuex';

export default {
	components: {
		ButtonClose
	},
	methods: {
		...mapActions([
			'close'
		])
	},
}
</script>

<style scoped lang="sass">
.container
	width: 100%
	height: 100%
	display: flex
	justify-content: center
	align-items: center

.window
	position: relative
	width: 500px
	height: 342px
	background-color: $color-foreground
	box-shadow: 0px 10px 35px rgba($color-full-black, 0.25)
	border-radius: 5px
	display: flex
	justify-content: center
	align-items: center
	transition: width .3s ease-in-out, height .3s ease-in-out

	@media only screen and (max-width: 500px)
		width: 300px
		height: 310px

	& .contact
		width: 340px
		height: 180px
		display: flex
		flex-direction: column
		justify-content: center
		transition: width .3s ease-in-out

		@media only screen and (max-width: 500px)
			width: 250px

		& .textfield
			margin-bottom: 25px
		
		& .button
			align-self: flex-start

.close
	position: absolute
	top: 20px
	right: 20px
	cursor: pointer

.info
	position: absolute
	bottom: 25px
	margin: 0 auto
	display: flex
	justify-content: center
	transition: bottom .3s ease-in-out

	@media only screen and (max-width: 500px)
		bottom: 15px
		flex-direction: column

	&__contact
		font-family: $font-roboto
		font-weight: 400
		font-size: 12px
		line-height: 16px
		color: $color-dim-light-gray

		&_email
			margin-right: 15px

			@media only screen and (max-width: 500px)
				margin-right: 0px
				margin-bottom: 5px
</style>