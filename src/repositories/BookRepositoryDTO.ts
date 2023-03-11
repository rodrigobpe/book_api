export interface updateRequest{
    id:string
    title?:string
    author?:string
    price?:number
}

export interface getAllBooksDTO{
    title?:string
    author?:string
    price?:number
    skip?:number;
    take?:number
}