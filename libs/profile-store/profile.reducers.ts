
import { Action, createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';
import { ProfileState } from './../feature-profile-details/src/lib/models/profile-state.model';

export const initialState: ProfileState = {
  userProfile: null,
  isUserProfileLoading: false
}

const useProfileReducer = createReducer(
  initialState,
  on(ProfileActions.getUserProfile, (state: ProfileState) => {
    return { ...state, isUserProfileLoading: true }
  }),
  on(ProfileActions.getUserProfileSuccess, (state: ProfileState, { profile }) => {
    return { ...state, userProfile: profile, isUserProfileLoading: false }
  }),
  on(ProfileActions.getUserProfileFailed, (state: ProfileState) => {
    return { ...state, userProfile: null, isUserProfileLoading: false }
  }),
  on(ProfileActions.setSelectedUserProfile, (state: ProfileState, { profile }) => {
    return { ...state, userProfile: profile }
  })
);

export function reducer(state: ProfileState | undefined, action: Action) {
  return useProfileReducer(state, action);
}
