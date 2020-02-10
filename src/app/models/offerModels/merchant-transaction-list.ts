export interface MerchantTransactionListModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        globalCount: number,
        points: [
            {
                count: number,
                totalPaid: number,
                totalRedeemed: number
            }
        ],
        tranasctionList: []
    }
}

export interface List {
    transaction_id: string,
    amount_paid: string,
    points_redeemed: string,
    points_earned: string,
    extra_points_earned: string,
    created_at: string,
    first_name: string,
    last_name: string,
    bill_image: string
}