import { FunctionComponent } from 'react';

interface PageProductsProps {}

const PageProducts = ({ params }: { params: { slug: string } }) => {
    return (
        <div className="w-full bg-white min-h-[500px]">
            <h2 className="title-sm-dark">{JSON.stringify(params)}</h2>
        </div>
    );
};

export default PageProducts;
