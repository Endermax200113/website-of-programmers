<template>
	<div class="write">
		<textarea class="textbox" placeholder="Напишите что-нибудь"></textarea>

		<label for="post-photo" class="wrap">
			<ButtonPhoto class="button-icon"/>
		</label>
		<input type="file" id="post-photo" multiple accept=".jpeg, .jpg, .png" hidden>
		
		<button type="button" class="wrap">
			<ButtonSend class="button-icon"/>
		</button>
	</div>
</template>

<script>
import ButtonPhoto from '@/assets/svg/ButtonPhoto';
import ButtonSend from '@/assets/svg/ButtonSend';

export default {
	components: {
		ButtonPhoto, ButtonSend
	}
}
</script>

<style scoped lang="sass">
.write
	width: calc(100% - 10px)
	height: 75px
	padding: 0px 5px
	margin-bottom: 30px
	background-color: $color-black
	box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.45)
	border-radius: 5px
	display: flex
	align-items: center
	transition: height .3s ease-in-out, margin-bottom .3s ease-in-out

	@media only screen and (max-width: 500px)
		height: 65px
		margin-bottom: 20px

	& > .textbox
		width: inherit
		height: calc(100% - 56px)
		padding: 28px 0px 28px 28px
		background-color: transparent
		resize: none
		border: 0
		outline: 0
		font-family: $font-roboto
		font-weight: 400
		font-size: 15px
		line-height: 18px
		color: $color-full-white
		transition: padding .3s ease-in-out, height .3s ease-in-out, font-size .3s ease-in-out

		@media only screen and (max-width: 500px)
			padding: 23px 0px 23px 10px
			height: calc(100% - 46px)
			font-size: 14px

		&::placeholder
			color: $color-dim-white
	
	& > .wrap
		width: 45px
		height: 45px
		margin-left: 15px
		background-color: transparent
		border: 0
		outline: 0
		display: flex
		align-items: center
		justify-content: center
		cursor: pointer
		transition: width .3s ease-in-out, height .3s ease-in-out, margin-left .3s ease-in-out, margin-right .3s ease-in-out

		@media only screen and (max-width: 500px)
			width: 35px
			height: 35px
			margin-left: 10px

		&:last-child	
			margin-right: 15px

			@media only screen and (max-width: 500px)
				margin-right: 10px
</style>