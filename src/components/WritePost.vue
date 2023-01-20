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

		&:last-child	
			margin-right: 15px
</style>