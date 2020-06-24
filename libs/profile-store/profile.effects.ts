import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import * as ProfileActions from './profile.actions';
import { FormsService } from './profile.service';
import { UserProfileDetails, UserProfile } from 'libs/feature-profile-details/src/lib/models/profile.model';

@Injectable()
export class ProfileEffects {

  getUserProfileRequest$: Observable<Action> = createEffect((): any =>
    this.actions$.pipe(
      ofType(ProfileActions.ProfileActionTypes.GET_USER_PROFILE),
      mergeMap(action =>
        this.formService.getUserProfile().pipe(
          map((data) => {
            const userProfileDetails: UserProfile = new UserProfileDetails(data.results.reduce((profile, current) => {
              return profile;
            }));
            return ProfileActions.getUserProfileSuccess({ profile: userProfileDetails });
          }),
          catchError((error: Error) => {
            return of(ProfileActions.getUserProfileFailed(error));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private formService: FormsService,
  ) { }
}

// FYI: The response from the API will return an object with different properties than the UserProfile model.
