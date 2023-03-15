export interface LoginUserDTO{
    email:string;
    password:string;
}

export interface LoginUserTokenDTO{
    user:{
        email:string
        name:string;
    }
    token:string;
}