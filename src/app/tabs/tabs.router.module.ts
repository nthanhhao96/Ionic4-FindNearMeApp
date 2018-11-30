import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { ListPage } from '../list/list.page';
import { FavoritePage } from '../favorite/favorite.page';
import { ProfilePage } from '../profile/profile.page';
import { SettingsPage } from '../settings/settings.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'list',
        outlet: 'list',
        component: ListPage
      },
      {
        path: 'favorite',
        outlet: 'favorite',
        component: FavoritePage
      },
      {
        path: 'profile',
        outlet: 'profile',
        component: ProfilePage
      },
      {
        path: 'settings',
        outlet: 'settings',
        component: SettingsPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
