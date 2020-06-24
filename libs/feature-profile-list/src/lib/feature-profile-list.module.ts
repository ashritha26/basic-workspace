import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { UiModule } from '@monofunworkspace/ui';
import { EffectsModule } from '@ngrx/effects';

import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileListStoreModule } from '../../../profile-list-store/profile-list-store.module';
import { ProfileStoreModule } from '../../../profile-store/profile-store.module'
import { ProfileListEffects } from '../../../profile-list-store/profile-list.effects';


export const featureProfileListRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    ProfileListStoreModule,
    ProfileStoreModule,
    EffectsModule.forFeature([ProfileListEffects]),
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ProfileListComponent
      }
    ])
  ],
  declarations: [ProfileListComponent],
})
export class FeatureProfileListModule {}
