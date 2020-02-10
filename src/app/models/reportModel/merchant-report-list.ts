export interface MerchantReportListModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        globalCount: number,
        merchants: List[]
    }
}


export interface List {
    merchant_id: string,
    category: string,
    merchant_name: string,
    email: string,
    phone_number: number,
    total_transaction: number,
    total_paid: number,
    total_redeemed: number,
    total_points_earned: number,
    created_at: string
}