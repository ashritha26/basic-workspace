
import { Action, createReducer, on } from '@ngrx/store';
import * as ProfileListActionTypes from './profile-list.actions';
import { ProfileListState } from './../feature-profile-list/src/lib/models/profile-list-state.model';

export const initialState: ProfileListState = {
  profiles: [],
  isProfileListLoading: false,
  hasProfilesLoaded: false, 
  error: ''
}

const useProfileListReducer = createReducer(
  initialState,
  on(ProfileListActionTypes.getProfileList, (state: ProfileListState) => {
    return { ...state, isProfileListLoading: true }
  }),
  on(ProfileListActionTypes.getProfileListSuccess, (state: ProfileListState, { profiles }) => {
    return { ...state, profiles,  isProfileListLoading: false, error: '', hasProfilesLoaded: true }
  }),
  on(ProfileListActionTypes.getProfileListFailed, (state: ProfileListState, {message}) => {
    return { ...state, profiles: null, isProfileListLoading: false, hasProfilesLoaded: false, error: message }
  })
);

export function reducer(state: ProfileListState | undefined, action: Action) {
  return useProfileListReducer(state, action);
}