export interface AdminProfileModel {
    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        id: number,
        userId: number,
        firstName: string,
        mobileNumber: string,
        profilePic: string,
        lastName: string,
        email: string,
        status: number
    }
}