export interface ContactListModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        globalCount: number,
        contacts: [
            {
                id: number,
                first_name: string,
                last_name: string,
                email: string,
                created_at: string,
                title: string,
                bill_image: string,
                status: number,
                user_type: number
            }
        ]
    }
}