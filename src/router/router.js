import HomeView from '@/views/HomeView';
import ArticleView from '@/views/ArticleView';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: HomeView
	},
	{
		path: '/article',
		component: ArticleView
	}
];

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
});

export default router;