export interface TransactionListModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        globalCount: number,
        tranasctionList: List[]
    }
}

export interface List {
    transaction_id: string,
    amount_paid: string,
    points_redeemed: string,
    points_earned: string,
    extra_points_earned: string,
    created_at: string,
    merchant_name: string,
    bill_image: string
}