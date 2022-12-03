<template>
	<div class="site">
		<Sidebar />

		<div class="site__page">
			<Header />
		</div>
	</div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';

export default {
	components: {
		Sidebar, Header
	},
}
</script>

<style lang="sass">

.site 
	display: flex
	justify-content: space-between
	align-items: flex-start
</style>