import { Welcome } from './welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'posts',
    loadChildren: () => import('posts_mf/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'users',
    loadChildren: () => import('users_mf/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: Welcome,
  },
];
