<template>
	<div class="container">
		<div class="window" @click.stop>
			<div class="wrap">
				<img src="@/assets/img/stories/playing.jpg" alt="Проигрывающее &quot;видео&quot;" class="image">

				<div class="player">
					<ButtonPlay2 class="play"/>

					<div class="scroll"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ButtonPlay2 from '@/assets/svg/ButtonPlay2';

export default {
	components: {
		ButtonPlay2
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
	width: 427px
	height: 588px
	background-color: $color-light-gray
	box-shadow: 0px 10px 30px rgba($color-full-black, 0.25)
	transition: width .3s ease-in-out, height .3s ease-in-out

	@media only screen and ((max-width: 800px) or (max-height: 650px))
		width: 370px
		height: 500px

	@media only screen and ((max-width: 500px) or (max-height: 570px))
		width: 320px
		height: 450px

.wrap
	position: relative
	width: 100%
	height: 100%

	& .image
		width: 100%
		height: 100%
		object-fit: cover
		z-index: 1
	
	& .player
		position: absolute
		bottom: 0
		width: 100%
		height: 57px
		display: flex
		align-items: center
		z-index: 2

		& .play
			margin-left: 18px
			margin-right: 28px
			cursor: pointer
		
		& .scroll
			width: 100%
			height: 7px
			margin-right: 20px
			border-radius: 3px
			background-color: $color-full-white
			cursor: pointer
</style>