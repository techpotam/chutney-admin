export interface MerchantListModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        globalCount: 37,
        merchants: List[]
    }
}

export interface List {
    category_name: string,
    category:string,
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    country_code: string,
    user_guid: string,
    is_active: number,
    created_at: string,
    updated_at: string

}