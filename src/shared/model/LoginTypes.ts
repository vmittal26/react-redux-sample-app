
export interface LoginValues{
    userName:string;
    password:string;
  }

export interface LoginState{
    isAuthenticated:boolean;
    isSubmitting:boolean;
    isError:boolean;
    errorMessage:string;
}
