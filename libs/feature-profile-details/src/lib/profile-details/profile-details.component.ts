import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as ProfileActions from '../../../../profile-store/profile.actions';
import * as profileSelectors from '../../../../profile-store/profile.selectors';
import { ProfileState } from '../models/profile-state.model';
import { UserProfile } from '../models';

@Component({
  selector: 'monofunworkspace-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  profileId: number;
  userProfileDetails$: Observable<UserProfile>;
  loadingProfile$: Observable<boolean>;
  

  constructor(private store: Store<ProfileState>, private route: ActivatedRoute) {
    this.profileId = this.route.snapshot.queryParams.profileId;

    if(!this.profileId) {
      this.store.dispatch(ProfileActions.getUserProfile());
    }
  }

  ngOnInit() {
    this.loadingProfile$ = this.store.select(profileSelectors.getUserProfileLoading);
    this.userProfileDetails$ = this.store.select(profileSelectors.getUserProfile);
  }
}
