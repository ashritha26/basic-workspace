import { UserProfile } from 'libs/feature-profile-details/src/lib/models';

export interface ProfileListState {
    profiles: UserProfile[];
    isProfileListLoading: boolean;
    hasProfilesLoaded: boolean,
    error: string
}
