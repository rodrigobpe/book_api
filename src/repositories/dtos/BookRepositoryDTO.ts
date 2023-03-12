export interface UpdateBookRepoDTO{
    id:string
    title?:string
    author?:string
    price?:number
}

export interface GetAllBooksRepoDTO{
    title?:string
    author?:string
    price?:number
    skip?:number;
    take?:number
}