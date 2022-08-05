import { IRoutes } from '@/interfaces/layout';

export * from './layout.view';

export const menuItems: IRoutes[] = [
	{
		id: 0,
		title: 'Dashboard',
		path: '/',
		icon:'grid_view'
	},
	{
		id: 1,
		title: 'Customers',
		path: '/customers',
		icon:'person'
	},
	{
		id: 2,
		title: 'Orders',
		path: '/orders',
		icon:'receipt_long'
	},
	{
		id: 3,
		title: 'Analytics',
		path: '/analytics',
		icon:'insights'
	},
	{
		id: 4,
		title: 'Products',
		path: '/products',
		icon:'inventory'
	},
	{
		id: 5,
		title: 'Reports',
		path: '/reports',
		icon:'report_gmailerrorred'
	},
	{
		id: 6,
		title: 'Settings',
		path: '/settings',
		icon:'settings'
	},
];






