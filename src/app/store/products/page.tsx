import ProductItem from '@/components/Product/ProductItem';
import { PageProductsProps, ProductType } from '@/types/product';
import PageNumber from '@/components/Product/PageNumber';
import { getProductData } from '@/utils/getProducts/product';

const PageProducts = async ({ searchParams }: PageProductsProps) => {
    const products: ProductType = await getProductData(searchParams);

    console.log(searchParams);

    return (
        <div className="w-[80%] min-h-[500px] flex flex-col justify-center mb-[50px]">
            <h2 className="title-sm-dark mx-auto mb-10">Tất cả sản phẩm</h2>

            <div className="w-full h-full flex flex-wrap justify-center mb-[50px]">
                {products?.products?.map((product) => (
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
    );
};

export default PageProducts;
