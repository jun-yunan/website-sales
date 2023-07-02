'use client';

import React, { FunctionComponent } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ItemCategory from './ItemCategory';
import CardProduct from './CardProduct';
import Link from 'next/link';

interface ResizableProps {
    children?: React.ReactNode;
}

const Resizable: FunctionComponent<ResizableProps> = ({ children }) => {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplaySpeed: 4000,
        autoplay: true,
    };

    return (
        <div className="flex flex-col items-center py-[150px] mx-auto">
            <h2 className="title-sm-dark mr-2">Thế hệ mới nhất.</h2>
            <h2 className="title-sm-dark text-[#6e6e73] mb-10">Xem ngay có gì mới.</h2>
            <div className="mx-auto text-color">
                <div
                    style={{
                        width: `1250px`,
                        // overflow: 'hidden',
                        // padding: '50px 0',
                        // height: '530px',
                        // overflow: 'auto',
                    }}
                >
                    <Slider {...settings}>
                        <Link href={'#'}>
                            <CardProduct
                                nameProduct="MACBOOK AIR 15”"
                                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-macbook-air-202306?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1683844828182"
                                price="32.999.000đ"
                            >
                                <p>Lớn ấn tượng.</p>
                                <p>Mỏng không tưởng.</p>
                            </CardProduct>
                        </Link>
                        <Link href={'#'}>
                            <CardProduct
                                nameProduct="MAC STUDIO"
                                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-mac-studio-202306?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1683844828120"
                                price="54.999.000đ"
                            >
                                <p>Siêu mạnh mẽ với</p>
                                <p>M2 Max và M2 Ultra.</p>
                            </CardProduct>
                        </Link>
                        <Link href={'#'}>
                            <CardProduct
                                colorTextWhite
                                nameProduct="IPHONE 14 PRO"
                                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-14-pro-202303_GEO_VN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1681174154931"
                                price="27.999.000đ"
                            >
                                <p>PRO Vượt trội.</p>
                            </CardProduct>
                        </Link>
                        <Link href={'#'}>
                            <CardProduct
                                nameProduct="THANH TOÁN HÀNG THÁNG THẤP"
                                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-monthly-payments-202304?wid=480&hei=500&fmt=jpeg&qlt=95&.v=1682036095178"
                                title="Trả dần, thời hạn 24 tháng và chỉ trả trước 20%"
                            >
                                <p>Trả góp hàng tháng</p>
                                <p>với MoMo.</p>
                            </CardProduct>
                        </Link>
                        <Link href={'#'}>
                            <CardProduct
                                nameProduct="IPAD AIR"
                                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645636337374"
                                price="15.599.000đ"
                                colorTextWhite
                            >
                                <p>Nhiều màu sắc.</p>
                                <p>Mạnh mẻ.</p>
                                <p>Nhẹ tênh.</p>
                            </CardProduct>
                        </Link>
                        <Link href={'#'}>
                            <CardProduct
                                nameProduct="APPLE WATCH ULTRA"
                                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-watch-ultra-202209_GEO_VN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1678742903878"
                                price="20.999.000đ"
                            >
                                <p>Những cuộc phiêu lưu</p>
                                <p>Đang vẫy gọi.</p>
                            </CardProduct>
                        </Link>
                        <Link href={'#'}>
                            <CardProduct
                                nameProduct="IPHONE 14"
                                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-14-202303_GEO_VN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1677558947910"
                                price="22.499.000đ"
                            >
                                <p>Một trời tuyệt vời.</p>
                            </CardProduct>
                        </Link>
                        <Link href={'#'}>
                            <CardProduct
                                nameProduct="IPAD PRO"
                                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-pro-202210?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1667423474414"
                                price="21.199.000đ"
                                colorTextWhite
                            >
                                <p>Siêu mạnh mẽ với M2.</p>
                            </CardProduct>
                        </Link>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Resizable;
