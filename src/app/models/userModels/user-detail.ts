export interface UserDetailModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        first_name: string,
        last_name: string,
        email: string,
        phone_number: string,
        country_code: string,
        profile_image: string,
        user_guid: string,
        is_email_verified: number,
        is_phone_verified: number,
        is_active: number,
        created_at: string,
        updated_at: string
    }
}