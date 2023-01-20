<template>
	<div class="app">
		<Sidebar />

		<div class="app__page">
			<Header />
			<RouterView />
		</div>
	</div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default {
	components: {
		Sidebar, Header
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