export interface LoginDto {
  name: string
  password: string
}

export interface IUserInfo {
  id: number
  name: string
  avatar_url: string
}

export interface LoginState {
  token: string
  userInfo: IUserInfo
  loginState: boolean
}
