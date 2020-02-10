export interface UserListModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        userCount: number,
        users: []
    }
}

export interface List {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    country_code: string,
    profile_image: string,
    user_guid: string,
    is_email_verified: string,
    is_phone_verified: string,
    is_active: number,
    created_at: string,
    updated_at: string
}