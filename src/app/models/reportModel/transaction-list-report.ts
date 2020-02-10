export interface TransactionListReportModel {

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
    amount_paid: number,
    points_redeemed: string,
    points_earned: number,
    extra_points_earned: number,
    created_at: string,
    first_name: string,
    last_name: string,
    merchant_name: string,
    bill_image: string
}
