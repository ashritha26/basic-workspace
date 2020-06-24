import { UserProfile } from './profile.model';

export interface ProfileState {
    userProfile: UserProfile;
    isUserProfileLoading: boolean;
}