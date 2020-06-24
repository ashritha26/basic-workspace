import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import * as ProfileListActions from '../../../../profile-list-store/profile-list.actions';
import * as ProfileActions from '../../../../profile-store/profile.actions';
import * as profileListSelectors from '../../../../profile-list-store/profile-list.selectors';
import { ProfileState } from 'libs/feature-profile-details/src/lib/models/profile-state.model';
import { UserProfile } from 'libs/feature-profile-details/src/lib/models';


@Component({
  selector: 'monofunworkspace-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  userProfiles$: Observable<UserProfile[]>;
  loadingProfiles$: Observable<boolean>;
  userProfileSubscription: Subscription;
  userProfiles: UserProfile[];

  constructor(private store: Store<ProfileState>, private route: Router) { 
    this.store.dispatch(ProfileListActions.getProfileList());
  }

  ngOnInit() {
    this.loadingProfiles$ = this.store.select(profileListSelectors.getProfileListLoading);
    this.userProfiles$ = this.store.select(profileListSelectors.getProfileList);
    this.userProfileSubscription = this.userProfiles$.pipe(map(profiles => {
      this.userProfiles = profiles;
    })).subscribe();
  }

  handleProfileSelection(userProfileIndex) {
    this.store.dispatch(ProfileActions.setSelectedUserProfile({profile: this.userProfiles[userProfileIndex]}))
    this.route.navigate(['profile-details'],{queryParams: {profileId: userProfileIndex}})
  }

  ngOnDestroy() {
    this.userProfileSubscription.unsubscribe();
  }

}
