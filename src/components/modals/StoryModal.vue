<template>
	<div class="container">
		<div class="window">
			<div class="wrap">
				<img src="@/assets/img/stories/playing.jpg" alt="" class="image">

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
	width: 427px
	height: 588px
	background-color: $color-light-gray
	box-shadow: 0px 10px 30px rgba($color-full-black, 0.25)

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
			width: 336px
			height: 7px
			border-radius: 3px
			background-color: $color-full-white
			cursor: pointer
</style>