<template>
	<div class="container">
		<div class="works">
			<h1 class="title">Мои работы</h1>

			<WorksList :works="works"/>
		</div>
	</div>
</template>

<script>
import WorksList from '@/components/works/WorksList';

export default {
	components: {
		WorksList
	},
	data() {
		return {
			works: [
				{
					id: 0,
					site: 'altermono.com',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
					image: require('@/assets/img/posts/5.jpg'),
					altImage: 'Ноутбук на столе',
					tags: [
						'дизайн', 'создание сайта', 'SMM'
					]
				},
				{
					id: 1,
					site: 'codedoco.com',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.',
					image: require('@/assets/img/posts/6.jpg'),
					altImage: 'Код на экране',
					tags: [
						'дизайн', 'создание сайта', 'SMM'
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
	transition: width .3s ease-in-out

	@media only screen and (max-width: 700px)
		width: 445px
	
	@media only screen and (max-width: 500px)
		width: 290px

.title
	margin: 0
	margin-bottom: 30px
	font-family: $font-roboto
	font-weight: 400
	font-size: 21px
	line-height: 21px
	color: $color-full-white

.works
	margin-bottom: 80px
	transition: margin-bottom .3s ease-in-out

	@media only screen and (max-width: 500px)
		margin-bottom: 45px
</style>