<template>
	<div class="container">
		<div class="window">
			<ButtonClose class="close"/>

			<form class="contact">
				<TextField class="textfield" placeholder="Имя Фамилия" />
				<TextField class="textfield" type="email" placeholder="Ваш e-mail" />
				<TextField class="textfield" placeholder="Текст сообщения" />
				<Button class="button">Отправить</Button>
			</form>

			<div class="info">
				<span class="info__contact info__contact_email">e-mail: <a href="mailto:info@mywebsite.ru" class="info__contact info__link">info@mywebsite.ru</a></span>
				<span class="info__contact">тел: <a href="tel:+94323285622" class="info__contact info__link">+943-232-856-22</a></span>
			</div>
		</div>
	</div>
</template>

<script>
import ButtonClose from '@/assets/svg/ButtonClose';

export default {
	components: {
		ButtonClose
	}
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

	& .contact
		width: 340px
		height: 180px
		display: flex
		flex-direction: column
		justify-content: center

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

	&__contact
		font-family: $font-roboto
		font-weight: 400
		font-size: 12px
		line-height: 16px
		color: $color-dim-light-gray

		&_email
			margin-right: 15px
</style>