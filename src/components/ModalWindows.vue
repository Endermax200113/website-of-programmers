<template>
	<div class="modal-windows show">
		<StoryModal />
	</div>
</template>

<script>
import StoryModal from '@/components/modals/StoryModal';

export default {
	components: {
		StoryModal
	}
}
</script>

<style scoped lang="sass">
.modal-windows
	position: fixed
	width: 0%
	height: 100%
	z-index: 9998
	transition: background-color .3s ease-in-out, width .0s ease-in-out .3s

	&.show
		width: 100%
		background-color: rgba($color-full-black, 0.5)
		transition: background-color .3s ease-in-out, width .0s ease-in-out
</style>