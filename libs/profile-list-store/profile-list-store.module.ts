import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as profileListReducers from './profile-list.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('profile-list', profileListReducers.reducer)
  ],
})
export class ProfileListStoreModule {}
