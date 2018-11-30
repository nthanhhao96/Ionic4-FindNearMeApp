import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { FavoritePageModule } from '../favorite/favorite.module';
import { ListPageModule } from '../list/list.module';
import { HomePageModule } from '../home/home.module';
import { ProfilePageModule } from '../profile/profile.module';
import { SettingsPageModule } from '../settings/settings.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    ListPageModule,
    FavoritePageModule,
    ProfilePageModule,
    SettingsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
