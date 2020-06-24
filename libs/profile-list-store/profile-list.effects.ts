import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store, select } from '@ngrx/store';
import { catchError, map, mergeMap, filter, withLatestFrom } from 'rxjs/operators';
import * as ProfileListActions from './profile-list.actions';
import { FormsService } from './profile-list.service';
import { UserProfileDetails, UserProfile } from 'libs/feature-profile-details/src/lib/models/profile.model';
import { ProfileListState } from 'libs/feature-profile-list/src/lib/models/profile-list-state.model';
import { getHasProfilesLoaded } from './profile-list.selectors';

@Injectable()
export class ProfileListEffects {

  /** To load new data each time user clicks on profile-list, comment withLatestFrom and filter */

  getUsers$: Observable<Action> = createEffect((): any =>
    this.actions$.pipe(
      ofType(ProfileListActions.ProfileListActionTypes.GET_PROFILE_LIST),
      withLatestFrom(this.store$.pipe(select(getHasProfilesLoaded))),
      filter(([action, hasloaded]) => !hasloaded), 
      mergeMap(([action, hasLoaded]: [Action, boolean]) => {
          return this.formService.getUsers().pipe(
            map((data) => {
              const profiles: UserProfile[] = data.results.map((profile, current) => {
                return new UserProfileDetails(profile);
              });
  
              return ProfileListActions.getProfileListSuccess({ profiles });
            }),
            catchError((error: Error) => {
              return of(ProfileListActions.getProfileListFailed(error));
            })
          )
      }
      )
    )
  );


  constructor(
    private actions$: Actions,
    private formService: FormsService,
    private store$: Store<ProfileListState>
  ) { }
}
