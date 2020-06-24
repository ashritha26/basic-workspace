import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '@monofunworkspace/ui';
import { EffectsModule } from '@ngrx/effects';

import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileStoreModule } from '../../../profile-store/profile-store.module';
import { ProfileEffects } from '../../../profile-store/profile.effects'

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    ProfileStoreModule,
    EffectsModule.forFeature([ProfileEffects]),
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ProfileDetailsComponent
      }
    ])
  ],
  declarations: [ProfileDetailsComponent]
})
export class FeatureProfileDetailsModule {}
