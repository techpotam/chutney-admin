export interface OfferTransactionModel {
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
        offerTransactions: []
    }
}

export interface List {
    id: number,
    user_id: number,
    merchant_id: number,
    offer_id: number,
    amount_paid: string,
    points_redeemed: string,
    points_earned: string,
    bill_image: string,
    guid: string,
    is_active: number,
    is_deleted: number,
    created_at: string,
    updated_at: string,
    first_name: string,
    last_name: string
}