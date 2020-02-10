export interface UserReportListModel {

    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        userCount: number,
        users: List[]
    }
}

export interface List {
    user_id: string,
    first_name: string,
    last_name: string,
    email: string,
    phone_number: number,
    total_transactions: number,
    total_paid: string,
    total_earned_points: string,
    total_redeem_points: string,
    created_at: string,
    is_active: number
}