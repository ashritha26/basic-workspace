export interface IUserProfileResponse {
    name: {
        title: string,
        first: string,
        last: string
    },
    location: {
        street: {
            number: string,
            name: string
        },
        city: string,
        state: string,
        country: string,
        postcode: number,
        coordinates: {
            latitude: string,
            longitude: string
        },
        timezone: {
            offset: string,
            description: string
        }
    },
    email: string,
    phone: string,
    cell: string,
    picture: {
        large: string
    }
}
