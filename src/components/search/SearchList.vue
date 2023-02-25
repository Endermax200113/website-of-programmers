<template>
	<div class="search__list">
		<p class="not-found" v-if="search.length === 0">
			К сожалению, ничего не найдено.
		</p>

		<SearchItem 
			v-else 
			v-for="item in search"
			:key="item.id"
			:article="item"
		/>
	</div>
</template>

<script>
import SearchItem from '@/components/search/SearchItem';

export default {
	components: {
		SearchItem
	},
	props: {
		search: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped lang="sass">
.search__list
	width: 100%

.not-found
	font-family: $font-roboto
	font-weight: 400
	font-size: 14px
</style>