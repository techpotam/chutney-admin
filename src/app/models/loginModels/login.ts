export interface LoginModel{
    Success: boolean,
    Status: number,
    Message: string,
    Result: {
        id: number,
        userId: number,
        first_name: string,
        email: string,
        status: number,
        token: string,
        profilePic: string
    }
}