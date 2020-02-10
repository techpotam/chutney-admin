export interface RatingListModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        globalCount: 8,
        ratingList: List[]
    }
}

export interface List {
    rating: number,
    first_name: string,
    last_name: string,
    created_at: string,
    merchantId: string,
    merchant_order: number
}