export interface User {
  id: number;
  userName: string;
  userPassword: string;
}

export interface UserLogin {
  success: boolean;
  errorMessage: string;
  user: User;
}
