<template>
	<div class="modal-windows show">
		<StoryModal class="modal-window" v-if="modal === Modals.Story" :class="{'this': modal === Modals.Story}"/>
		<ContactModal class="modal-window" v-else-if="modal === Modals.Contact" :class="{'this': modal === Modals.Contact}"/>
	</div>
</template>

<script>
import StoryModal from '@/components/modals/StoryModal';
import ContactModal from '@/components/modals/ContactModal';

const Modals = Object.freeze({
	Story: 0,
	Contact: 1
});

export default {
	components: {
		StoryModal, ContactModal
	},
	data() {
		return {
			Modals,
			modal: Modals.Contact
		}
	},
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
		background-color: rgba($color-full-black, 0.75)
		transition: background-color .3s ease-in-out, width .0s ease-in-out

.modal-window
	width: 0%
	transform: scale(0)
	transition: transform .3s ease-in-out, width .0s ease-in-out .3s

	&.this
		width: 100%
		transform: scale(1)
		transition: transform .3s ease-in-out, width .0s ease-in-out
</style>