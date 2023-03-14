<template>
	<div class="container">
		<div class="profile">
			<h1 class="profile__title">Профиль</h1>

			<form class="profile__form">
				<div class="form__data">
					<TextField class="data__textfield" placeholder="Имя Фамилия" />
					<TextField type="email" class="data__textfield" placeholder="Почта" />
					<TextField type="password" class="data__textfield" placeholder="Новый пароль" />
					<TextField type="password" class="data__textfield" placeholder="Подтвердите пароль" />

					<Button class="data__button">Сохранить</Button>
				</div>

				<div class="form__avatar">
					<label for="select" class="wrap">
						<img src="@/assets/img/avatars/3.jpg" alt="Аватар" class="image">
					</label>

					<label for="select" class="select">выбрать аватар</label>
					<input type="file" id="select" multiple accept=".jpeg, .jpg, .png" hidden>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	
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

.profile
	margin-bottom: 80px
	
	@media only screen and (max-width: 500px)
		margin-bottom: 45px
	
	& .profile__title
		margin: 0
		margin-bottom: 60px
		font-family: $font-roboto
		font-weight: 400
		font-size: 21px
		line-height: 21px
		color: $color-full-white
		transition: margin-bottom .3s ease-in-out

		@media only screen and (max-width: 500px)
			margin-bottom: 30px
	
	& .profile__form
		width: 100%
		display: flex
		justify-content: space-between

		@media only screen and (max-width: 500px)
			flex-direction: column-reverse

		& .form__data
			width: 340px
			flex-basis: 340px
			transition: width .3s ease-in-out, flex-basis .3s ease-in-out

			@media only screen and (max-width: 700px)
				width: 280px
				flex-basis: 280px

			@media only screen and (max-width: 500px)
				width: 100%
				flex-basis: unset

			& .data__textfield
				width: 100%
				margin-bottom: 25px
		
		& .form__avatar
			width: 150px
			flex-basis: 150px
			margin-bottom: 0px
			transition: width .3s ease-in-out, flex-basis .3s ease-in-out, margin-bottom .3s ease-in-out

			@media only screen and (max-width: 700px)
				width: 130px
				flex-basis: 130px
			
			@media only screen and (max-width: 500px)
				flex-basis: unset
				align-self: center
				margin-bottom: 30px

			& .wrap
				display: block
				width: 150px
				height: 150px
				margin-bottom: 15px
				cursor: pointer
				transition: width .3s ease-in-out, height .3s ease-in-out

				@media only screen and (max-width: 700px)
					width: 130px
					height: 130px

				& .image
					width: 100%
					height: 100%
					object-fit: cover
			
			& .select
				display: block
				font-family: $font-roboto
				font-weight: 400
				font-size: 14px
				line-height: 16px
				text-decoration-line: none
				color: $color-light-blue
				cursor: pointer

				&:hover
					text-decoration-line: underline
				
				@media only screen and (max-width: 500px)
					text-align: center
</style>