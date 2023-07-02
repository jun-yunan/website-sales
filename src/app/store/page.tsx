import PageNumber from '@/components/Product/PageNumber';
import ProductItem from '@/components/Product/ProductItem';

import { PageProductsProps, ProductType } from '@/types/product';
import { getProductData } from '@/utils/product';

const Store = async ({ searchParams }: PageProductsProps) => {
    const products: ProductType = await getProductData(searchParams);

    return (
        <div className="w-full flex bg-white items-center justify-center min-h-[500px] pb-[150px]">
            <div className="w-[80%]  flex flex-col items-center h-full justify-center ">
                <h2 className="title-sm-dark mx-auto mb-10">Tất cả sản phẩm</h2>
                <div className="w-full min-h-[500px] flex flex-wrap justify-center mb-[50px]">
                    {products.products?.map((product) => (
                        <ProductItem
                            image={product.image}
                            nameProduct={product.nameProduct}
                            price={product.price}
                            key={product._id}
                        />
                    ))}
                </div>
                <PageNumber searchParams={searchParams} />
            </div>
        </div>
    );
};

export default Store;
