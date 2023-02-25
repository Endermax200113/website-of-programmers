<template>
	<div class="container">
		<div class="search">
			<h1 class="title">Результаты поиска “{{ search }}”</h1>
	
			<SearchList :search="list"/>
		</div>
	</div>
</template>

<script>
import SearchList from '@/components/search/SearchList';

export default {
	components: {
		SearchList
	},
	data() {
		return {
			search: 'Создание сайта',
			list: [
				{
					id: 0,
					title: 'Как писать код быстро и безболезненно?',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
					date: '21.06.2020',
					tags: [
						'создание сайтов'
					]
				},
				{
					id: 1,
					title: 'Купил новый ноутбук за 150 000 руб',
					description: '',
					date: '21.06.2020',
					tags: [
						'продвижение видео'
					]
				},
				{
					id: 2,
					title: 'Как писать код быстро и безболезненно?',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
					date: '21.06.2020',
					tags: [
						'создание сайтов'
					]
				},
				{
					id: 3,
					title: 'Купил новый ноутбук за 150 000 руб',
					description: '',
					date: '21.06.2020',
					tags: [
						'продвижение видео'
					]
				}
			]
		}
	},
}
</script>

<style scoped lang="sass">
.container
	width: 600px
	margin: 0 auto

.title
	margin: 0
	margin-bottom: 30px
	font-family: $font-roboto
	font-weight: 400
	font-size: 21px
	line-height: 21px
	color: $color-full-white

.search
	margin-bottom: 80px
</style>