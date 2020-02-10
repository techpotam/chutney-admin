export interface DashboardModel{

    Success: boolean,
    Status: number,
    Message: string,
    Result: [
      {
        userCount: number,
        merchantCount: number,
        offerCount: number,
        supportCount: number
      }
    ]
  }