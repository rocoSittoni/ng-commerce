export interface Product {
    image: string,
    price: number,
    description: string,
    categoty: string,
    id: string
}

export interface APIResponse<T> {
    results: Array<T>;
}