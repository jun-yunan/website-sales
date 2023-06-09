/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { FunctionComponent } from 'react';
import ItemCategory from './ItemCategory';

interface CategoryProps {}

const Category: FunctionComponent<CategoryProps> = () => {
    return (
        <div className="flex mx-auto">
            <ItemCategory image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670959891635">
                Mac
            </ItemCategory>
            <ItemCategory image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1661027785804">
                iPhone
            </ItemCategory>
            <ItemCategory image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437">
                iPad
            </ItemCategory>
            <ItemCategory image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202303?wid=200&hei=130&fmt=png-alpha&.v=1677701613598">
                Apple Watch
            </ItemCategory>
            <ItemCategory image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885">
                AirPods
            </ItemCategory>
            <ItemCategory image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000">
                AirTag
            </ItemCategory>
            <ItemCategory image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-accessories-nav-202303?wid=200&hei=130&fmt=png-alpha&.v=1677172796005">
                Phụ Kiện
            </ItemCategory>
        </div>
    );
};

export default Category;
