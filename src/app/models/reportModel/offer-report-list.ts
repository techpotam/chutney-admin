export interface OfferReportListModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        globalCount: number,
        offerTransactions: List[]
    }
}

export interface List {
    offer_id: string,
    amount_paid: number,
    points_redeemed: number,
    points_earned: number,
    title: string,
    user_count: number,
    created_at: string
}