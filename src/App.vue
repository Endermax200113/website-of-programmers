<template>
	<div class="app">
		<Sidebar />

		<main class="app__page">
			<Header_ />
			<RouterView />
		</main>

		<ModalWindows />
	</div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import Header_ from '@/components/Header';
import ModalWindows from '@/components/ModalWindows';

export default {
	components: {
		Sidebar, Header_, ModalWindows
	},
}
</script>

<style lang="sass">
*
	padding: 0
	margin: 0

html
	color-scheme: dark
	background-color: $color-background
	transition: width .3s ease-in-out, height .3s ease-in-out

.app 
	display: flex
	align-items: flex-start

	&__page
		flex-basis: calc(100% - 300px)
		margin-left: 300px
		transition: flex-basis .3s ease-in-out, margin-left .3s ease-in-out

		@media only screen and (max-width: 1000px)
			flex-basis: 100%
			margin-left: 0px
</style>