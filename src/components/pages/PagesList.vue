<template>
	<div class="pages">
		<PageButton 
			v-if="pages.list >= 1" 
			:key="0"
			@click="pages.list--">&lt;</PageButton>
		<PageButton
			v-for="number in totalPages"
			:key="pages.list * pages.limit + number"
			:class="{
				'btn selected': pages.list * pages.limit + number === this.pages.selected
			}">
				{{pages.list * pages.limit + number}}
		</PageButton>
		<PageButton 
			v-if="(this.pages.list + 1) * this.pages.limit <= this.pages.total" 
			:key="9999"
			@click="pages.list++">&gt;</PageButton>
	</div>
</template>

<script>
import PageButton from '@/components/pages/PageButton';

export default {
	components: {
		PageButton
	},
	props: {
		pages: {
			type: Object,
			required: true
		}
	},
	computed: {
		totalPages() {
			let res;

			if ((this.pages.list + 1) * this.pages.limit <= this.pages.total)
				res = this.pages.limit;
			else
				res = (this.pages.list + 1) * this.pages.limit - (this.pages.total + 1);

			return res;
		}
	}
}
</script>

<style scoped lang="sass">
.pages
	width: max-content
	height: 40px
	margin: 80px auto
	transition: margin .3s ease-in-out

	@media only screen and (max-width: 500px)
		margin: 50px auto
</style>