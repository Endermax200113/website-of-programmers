<template>
	<div class="works__list">
		<p class="not-found" v-if="works.length === 0">К сожалению, у Вас нет никакой работы.</p>

		<WorksItem
			v-else
			v-for="work in works"
			:key="work.id"
			:work="work"
		/>
	</div>
</template>

<script>
import WorksItem from '@/components/works/WorksItem';

export default {
	components: {
		WorksItem
	},
	props: {
		works: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped lang="sass">
.works__list
	width: 100%

.not-found
	font-family: $font-roboto
	font-weight: 400
	font-size: 14px
</style>