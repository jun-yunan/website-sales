export interface SearchParamsType {
    pageNumber?: string;
    limit?: string;
}

export interface PageProductsProps {
    params?: { slug: string };
    searchParams: { [key: string]: string };
}

export interface ProductType {
    products: ProductItemType[];
}

export interface ProductItemType {
    nameProduct: string;
    _id: string;
    price: string;
    image: string;
}
