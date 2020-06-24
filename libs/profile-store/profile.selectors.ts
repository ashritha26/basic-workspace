import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from './../feature-profile-details/src/lib/models/profile-state.model';

export const getUserProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfileLoading = createSelector(getUserProfileState, ({ isUserProfileLoading }) => {
  return isUserProfileLoading
});

export const getUserProfile = createSelector(getUserProfileState, ({ userProfile }) => {
  return userProfile;
});

export const getUserProfileError = createSelector(getUserProfileState, ({ userProfile }) => {
  return userProfile;
}
);
