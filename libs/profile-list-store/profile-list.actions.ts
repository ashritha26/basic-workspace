import { createAction, props} from '@ngrx/store';
import { UserProfile } from 'libs/feature-profile-details/src/lib/models';

export enum ProfileListActionTypes {
    GET_PROFILE_LIST = '[Profile List Component] Get users request',
    GET_PROFILE_LIST_SUCCESS = '[Profile List Component] Get users success',
    GET_PROFILE_LIST_FAILED = '[Profile List Component] Get users fail'
}

/** Loading, Success and Failure Actions - User List */

export const getProfileList = createAction(ProfileListActionTypes.GET_PROFILE_LIST);

export const getProfileListSuccess = createAction(ProfileListActionTypes.GET_PROFILE_LIST_SUCCESS,
    props<{profiles: UserProfile[]}>()
);

export const getProfileListFailed = createAction(ProfileListActionTypes.GET_PROFILE_LIST_FAILED,
    props<Error>()
);
