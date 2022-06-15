export interface Response {
    info: {
        count: number,
        next: string,
        pages: number,
        prev: string,   
    }
    results: Char[]
}

export interface Char {
    id: number,
    name: string,
    image: string,
    status: string,
    location : {
        name: string
    }
}