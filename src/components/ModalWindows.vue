<template>
	<div class="modal-windows" :class="{'show': $store.state.modal !== $store.state.Modals.Nobody}">
		<StoryModal
			class="modal-window" 
			:key="$store.state.Modals.Story" 
			:class="{'this': $store.state.modal === $store.state.Modals.Story}"
			@click="close"
		/>
		<ContactModal 
			class="modal-window" 
			:key="$store.state.Modals.Contact" 
			:class="{'this': $store.state.modal === $store.state.Modals.Contact}"
			@click="close"
		/>
		<ShareModal 
			class="modal-window" 
			:key="$store.state.Modals.Share"
			:class="{'this': $store.state.modal === $store.state.Modals.Share}"
			@click="close"
		/>
	</div>
</template>

<script>
import StoryModal from '@/components/modals/StoryModal';
import ContactModal from '@/components/modals/ContactModal';
import ShareModal from '@/components/modals/ShareModal';
import { mapActions } from 'vuex';

export default {
	components: {
		StoryModal, ContactModal, ShareModal
	},
	methods: {
		...mapActions({
			close: 'close'
		})
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
	height: 0%
	transform: scale(0)
	transition: transform .3s ease-in-out, width .0s ease-in-out .3s, height .0s ease-in-out .3s

	&.this
		width: 100%
		height: 100%
		transform: scale(1)
		transition: transform .3s ease-in-out, width .0s ease-in-out, height .0s ease-in-out
</style>