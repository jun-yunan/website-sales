interface QueryParams {
    pageNumber?: string;
    limit?: string;
}

export const getProductData = async ({ pageNumber, limit }: QueryParams) => {
    const response = await fetch(
        `${process.env.URL_API}/products?page=${pageNumber}&limit=${limit}`
        // { cache: 'no-store' }
    );
    return response.json();
};
