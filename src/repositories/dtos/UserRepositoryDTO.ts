export interface UpdateUserRepoDTO{
    id_user:string
    email?:string;
    name?:string;
    password?:string;
}

export interface GetAllUsersRepoDTO{
    email?:string;
    name?:string;
}



