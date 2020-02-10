export interface ContactDetailModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        id: number,
        user_id: number,
        user_type: number,
        title: string,
        description: string,
        bill_image: string,
        status: number,
        is_active: number,
        is_deleted: number,
        created_at: string,
        updated_at: string
    }
}