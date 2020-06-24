import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as profileReducers from './profile.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('profile', profileReducers.reducer)
  ],
})
export class ProfileStoreModule {}