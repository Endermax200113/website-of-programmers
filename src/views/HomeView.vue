<template>
	<div class="container">
		<StoriesList :stories="stories"/>
		<WritePost />
		<PostList :posts="posts"/>
		<PagesList :pages="pages"/>
	</div>
</template>

<script>
import StoriesList from '@/components/stories/StoriesList';
import WritePost from '@/components/WritePost';
import PostList from '@/components/posts/PostList';
import PagesList from '@/components/pages/PagesList';

export default {
	components: {
		StoriesList, WritePost, PostList, PagesList
	},
	data() {
		return {
			stories: [
				{
					id: 0,
					image: require("@/assets/img/stories/1.jpg"),
					alt: "Море под закатом",
					title: "Отдыхаю на природе",
					date: "21.09.2020"
				},
				{
					id: 1,
					image: require("@/assets/img/stories/2.jpg"),
					alt: "Диаграммы на ноутбуке",
					title: "Заканчиваю сложный проект",
					date: "15.09.2020"
				},
				{
					id: 2,
					image: require("@/assets/img/stories/3.jpg"),
					alt: "Квартира",
					title: "Переехал в новую квартиру",
					date: "11.09.2020"
				},
				{
					id: 3,
					image: require("@/assets/img/stories/4.jpg"),
					alt: "Жёлтый листок",
					title: "Осень пришла!",
					date: "28.08.2020"
				}
			],
			posts: [
				{
					id: 0,
					hasImage: false,
					image: "",
					imageAlt: "",
					hasVideo: false,
					video: "",
					videoAlt: "",
					hasTitle: false,
					title: "",
					hasDescription: true,
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
					date: "21.06.2020",
					tags: [],
					canRead: false,
					canComment: false
				},
				{
					id: 1,
					hasImage: true,
					image: require("@/assets/img/posts/1.jpg"),
					imageAlt: "Телефон на руках",
					hasVideo: false,
					video: "",
					videoAlt: "",
					hasTitle: true,
					title: "Как писать код быстро и безболезненно?",
					hasDescription: true,
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
					date: "21.06.2020",
					tags: [
						"Создание сайтов"
					],
					canRead: true,
					canComment: false
				},
				{
					id: 2,
					hasImage: false,
					image: "",
					imageAlt: "",
					hasVideo: true,
					video: require("@/assets/img/posts/2.jpg"),
					videoAlt: "Включённый ноутбук на столе",
					hasTitle: true,
					title: "Купил новый ноутбук за 150 000 руб",
					hasDescription: false,
					description: "",
					date: "21.06.2020",
					tags: [
						"Продвежение видео"
					],
					canRead: false,
					canComment: true
				},
				{
					id: 3,
					hasImage: true,
					image: require("@/assets/img/posts/3.jpg"),
					imageAlt: "Конференция Frontend-разработчиков",
					hasVideo: false,
					video: "",
					videoAlt: "",
					hasTitle: true,
					title: "Как я сходил на FrontEnd Conf 2021",
					hasDescription: true,
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
					date: "21.06.2020",
					tags: [
						"Создание сайтов"
					],
					canRead: true,
					canComment: false
				}
			],
			pages: {
				total: 10,
				selected: 2,
				limit: 3,
				list: 0
			}
		}
	}
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
</style>