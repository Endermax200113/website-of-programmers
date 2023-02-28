import HomeView from '@/views/HomeView';
import ArticleView from '@/views/ArticleView';
import SearchView from '@/views/SearchView';
import WorksView from '@/views/WorksView';
import ProfileView from '@/views/ProfileView';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: HomeView
	},
	{
		path: '/article',
		component: ArticleView
	},
	{
		path: '/search',
		component: SearchView
	},
	{
		path: '/works',
		component: WorksView
	},
	{
		path: '/profile',
		component: ProfileView
	}
];

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
});

export default router;