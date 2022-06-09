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
    name: string,
    image: string,
    status: string,
    location : {
        name: string
    }
}