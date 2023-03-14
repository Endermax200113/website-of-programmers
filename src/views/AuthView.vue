<template>
	<div class="container">
		<div class="auth">
			<h1 class="auth__title">{{ login ? "Вход" : "Регистрация" }}</h1>

			<form class="auth__form" v-if="login">
				<TextField type="email" class="form__element form__field" placeholder="Почта" />
				<TextField type="password" class="form__element form__field" placeholder="Пароль" />

				<Button class="form__element form__button">Войти</Button>
			</form>

			<form class="auth__form" v-else>
				<TextField class="form__element form__field" placeholder="Имя Фамилия" />
				<TextField type="email" class="form__element form__field" placeholder="Почта" />
				<TextField type="password" class="form__element form__field" placeholder="Пароль" />
				<TextField type="password" class="form__element form__field" placeholder="Подтвердите пароль" />
				
				<Button class="form__element form__button">Зарегистрироваться</Button>
			</form>

			<div class="auth__offer" v-if="login">
				<a href="#" class="offer__link">восстановить</a>
				<a href="#" class="offer__link">регистрация</a>
			</div>

			<div class="auth__offer" v-else>
				<a href="#" class="offer__link">авторизация</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			login: true
		}
	},
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

.auth
	margin-bottom: 80px
	
	@media only screen and (max-width: 500px)
		margin-bottom: 45px
	
	& .auth__title
		margin-bottom: 60px
		font-family: $font-roboto
		font-weight: 400
		font-size: 21px
		line-height: 21px
		text-align: center
		color: $color-full-white
	
	& .auth__form
		width: 280px
		margin: 0 auto 20px
		display: flex
		flex-direction: column

		& .form__element
			margin-bottom: 25px

			&:last-child
				margin-bottom: 0px
			
			&.form__button
				align-self: center

	& .auth__offer
		width: fit-content
		margin: 0 auto

		& .offer__link
			margin-right: 12px
			font-family: $font-roboto
			font-weight: 400
			font-size: 12px
			line-height: 14px
			text-decoration-line: none
			color: $color-full-white

			&:hover
				text-decoration-line: underline

			&:last-child
				margin-right: 0px
</style>