<template>
	<div class="container">
		<div class="window">
			<ButtonClose class="close" />

			<div class="social">
				<Facebook class="social__icon" />
				<Twitter class="social__icon" />
				<Vk class="social__icon" />
				<Copy class="social__icon" />
			</div>
		</div>
	</div>
</template>

<script>
import ButtonClose from '@/assets/svg/ButtonClose';
import Facebook from '@/assets/svg/social/share/Facebook';
import Copy from '@/assets/svg/social/share/Copy';
import Twitter from '@/assets/svg/social/share/Twitter';
import Vk from '@/assets/svg/social/share/Vk';

export default {
	components: {
		ButtonClose, Facebook, Copy, Twitter, Vk
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
	height: 200px
	background-color: $color-foreground
	box-shadow: 0px 10px 35px rgba($color-full-black, .25)
	border-radius: 5px
	display: flex
	justify-content: center
	align-items: center
	transition: width .3s ease-in-out, height .3s ease-in-out
	
	@media only screen and (max-width: 500px)
		width: 300px
		height: 150px

	& .social
		display: flex

		&__icon
			width: 45px
			height: 45px
			margin-right: 15px
			cursor: pointer

			&:last-child
				margin-right: 0px

.close
	position: absolute
	top: 20px
	right: 20px
	opacity: .5
	cursor: pointer
</style>