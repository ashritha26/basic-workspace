import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileListState } from 'libs/feature-profile-list/src/lib/models/profile-list-state.model';

export const getUserProfileListState = createFeatureSelector<ProfileListState>('profile-list');

export const getProfileListLoading = createSelector(getUserProfileListState, ({ isProfileListLoading }) => {
    return isProfileListLoading
});

export const getProfileList = createSelector(getUserProfileListState, ({ profiles }) => {
    return profiles;
});

export const getProfileListError = createSelector(getUserProfileListState, ({ error }) => {
    return error;
});

export const getHasProfilesLoaded = createSelector(getUserProfileListState, ({ hasProfilesLoaded }) => {
    return hasProfilesLoaded;
});
