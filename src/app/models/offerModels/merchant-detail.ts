export interface MerchantDetailModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        merchantDetail: {
            id: number,
            first_name: string,
            first_nameAr:string,
            last_name: string,
            email: string,
            phone_number: string,
            country_code: string,
            user_guid: string,
            is_active: number,
            created_at: string,
            updated_at: string
        },
        categoryData: []
    }
}

export interface category {
    merchant_detail_id: number,
    description: string,
    descriptionAr: string,
    category_name: string
}