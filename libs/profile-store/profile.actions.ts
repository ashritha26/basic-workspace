import { createAction, props} from '@ngrx/store';
import { UserProfile } from 'libs/feature-profile-details/src/lib/models';

export enum ProfileActionTypes {
    GET_USER_PROFILE = '[Profile Details Component] Get user profile request',
    GET_USER_PROFILE_SUCCESS = '[Profile Details Component] Get user profile success',
    GET_USER_PROFILE_FAILED = '[Products API] Get user profile fail',
    SET_USER_PROFILE = '[Profile Details Component] Set user profile from profile list'
}

/** Loading, Success and Failure actions - User Profile Details */

export const getUserProfile = createAction(ProfileActionTypes.GET_USER_PROFILE);

export const getUserProfileSuccess = createAction(ProfileActionTypes.GET_USER_PROFILE_SUCCESS,
    props<{profile: UserProfile}>()
);

export const getUserProfileFailed = createAction(ProfileActionTypes.GET_USER_PROFILE_FAILED,
    props<Error>()
);

export const setSelectedUserProfile = createAction(ProfileActionTypes.SET_USER_PROFILE,
    props<{profile: UserProfile}>()
);
