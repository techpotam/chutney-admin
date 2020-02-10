export interface OfferTypeListModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: List[]

}

export interface List {
    id: number,
    title: string,
    status: number
}