export interface MerchantCategoryModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: Category[]
}

export interface Category {
    merchant_detail_id: number,
    category_name: string
}