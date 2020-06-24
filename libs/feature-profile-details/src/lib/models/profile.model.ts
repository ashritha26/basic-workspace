import { IUserProfileResponse } from './user-profile-response.model';

export interface UserProfile {
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    email: string;
    phone: string;
    cell: string;
    pictureUrl: string;
}

export class UserProfileDetails implements UserProfile {
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    email: string;
    phone: string;
    cell: string;
    pictureUrl: string;

    constructor(profile: IUserProfileResponse) {
        this.firstName = profile.name.first || '';
        this.lastName = profile.name.last || '';
        this.city = profile.location.city || '';
        this.state = profile.location.state || '';
        this.email = profile.email || '';
        this.phone = profile.phone || '';
        this.cell = profile.cell || '';
        this.pictureUrl = profile.picture.large || '';
    }
}
