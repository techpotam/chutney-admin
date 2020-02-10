export interface OfferListModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        offerCount: number,
        offers: []
    }
}

export interface List {
    id: number,
    user_id: number,
    merchant_detail_id: number,
    title: string,
    titleAr: string,
    description: string,
    descriptionAr: string,
    offer_category: number,
    offer_type: number,
    start_date: string,
    end_date: string,
    offer_image: string,
    minimum_price: number,
    extra_points: number,
    extra_point1: number,
    extra_point2: number,
    extra_point3: number,
    extra_point4: number,
    minimum_visit: number,
    created_by: number,
    guid: string,
    is_active: number,
    is_deleted: number,
    created_at: string,
    updated_at: string,
    first_name: string,
    last_name: string
}