import Category from '@/components/Product/Category';
import PageNumber from '@/components/Product/PageNumber';
import ProductItem from '@/components/Product/ProductItem';
import Resizable from '@/components/Product/Resizable';

import { PageProductsProps, ProductType } from '@/types/product';
import { getProductData } from '@/utils/product';

const Store = async ({ searchParams }: PageProductsProps) => {
    const products: ProductType = await getProductData(searchParams);

    return (
        <div className="w-full min-h-[700px] bg-[#f5f5f7] flex flex-col items-center">
            <div className="w-full bg-white mx-auto py-[150px] flex flex-col items-center">
                <h2 className="text-5xl font-bold text-color">Cửa Hàng. Cách tốt nhất để</h2>
                <h2 className="text-5xl font-bold text-color mb-24">mua sản phẩm bạn thích.</h2>
                <Category />
            </div>

            <div className="flex flex-col items-center py-[150px] mx-auto">
                <h2 className="title-sm-dark mr-2">Thế hệ mới nhất.</h2>
                <h2 className="title-sm-dark text-[#6e6e73] mb-10">Xem ngay có gì mới.</h2>
                <Resizable />
            </div>

            <div className="w-[80%] flex flex-col items-center min-h-[500px] pb-[150px] justify-center ">
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
            {/* <p className="title-sm-dark">{process.env.URL_API_LOCAL}</p> */}
        </div>
    );
};

export default Store;
