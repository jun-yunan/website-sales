import Link from 'next/link';
import { FunctionComponent } from 'react';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <div className="w-[80%] text-sm min-h-[600px] bg-[#1d1d1f] flex flex-col items-center">
            <div className="w-full flex flex-col items-center mt-6">
                <p>
                    Thời lượng pin của MacBook Air khác nhau tùy theo cách sử dụng và cấu hình; truy
                    cập <Link href={'apple.com/vn/batteries'}>apple.com/vn/batteries</Link> để biết
                    thêm thông tin.
                </p>
                <div className="border-b border-white mt-6 w-full"></div>
            </div>
            <div className="w-full h-full flex justify-between">
                <div className="flex flex-col my-4 ">
                    <h2 className="text-sm font-semibold my-2">Mua sắm và tìm hiểu</h2>
                    <Link href={'#'}>Cửa hàng</Link>
                    <Link href={'#'}>Mac</Link>
                    <Link href={'#'}>iPad</Link>
                    <Link href={'#'}>iPhone</Link>
                    <Link href={'#'}>Watch</Link>
                    <Link href={'#'}>AirPods</Link>
                    <Link href={'#'}>Tv</Link>
                    <Link href={'#'}>Phụ kiện</Link>
                    <div className="border-b border-white mt-2"></div>
                </div>

                <div className="flex flex-col my-4 ">
                    <div className="flex flex-col">
                        <h2 className="text-sm font-semibold my-2">Tài khoản</h2>
                        <Link href={'#'}>Quản lý tài khoản của bạn</Link>
                        <Link href={'#'}>Tài Khoản Apple Store</Link>
                        <Link href={'#'}>iCloud.com</Link>
                        <div className="border-b border-white mt-2"></div>
                    </div>
                    <div className="flex flex-col my-4 ">
                        <h2 className="text-sm font-semibold my-2">Giải Trí</h2>
                        <Link href={'#'}>Apple One</Link>
                        <Link href={'#'}>Apple TV+</Link>
                        <Link href={'#'}>Apple Music</Link>
                        <Link href={'#'}>Apple Arcade</Link>
                        <Link href={'#'}>Apple Podcasts</Link>
                        <Link href={'#'}>Apple Books</Link>
                        <div className="border-b border-white mt-2"></div>
                    </div>
                </div>
                <div className="flex flex-col my-4 ">
                    <h2 className="text-sm font-semibold my-2">Apple Store</h2>
                    <Link href={'#'}>Ứng Dụng Apple Store</Link>
                    <Link href={'#'}>Apple Trade In</Link>
                    <Link href={'#'}>Tài Chính</Link>
                    <Link href={'#'}>Tình Trạng Đơn Hàng</Link>
                    <Link href={'#'}>Hỗ Trợ Mua Hàng</Link>
                    <div className="border-b border-white mt-2"></div>
                </div>

                <div className="flex flex-col my-4">
                    <div className="flex flex-col">
                        <h2 className="text-sm font-semibold my-2">Dành Cho Doanh Nghiệp</h2>
                        <Link href={'#'}>Apple Và Doanh Nghiệp</Link>
                        <Link href={'#'}>Mua Hàng Cho Doanh Nghiệp</Link>
                        <div className="border-b border-white mt-2"></div>
                    </div>
                    <div className="flex flex-col my-4">
                        <h2 className="text-sm font-semibold my-2">Cho Giáo Dục</h2>
                        <Link href={'#'}>Apple Và Giáo Dục</Link>
                        <Link href={'#'}>Mua Hàng Cho Bậc Đại Học</Link>
                        <div className="border-b border-white mt-2"></div>
                    </div>
                    <div className="flex flex-col my-4">
                        <h2 className="text-sm font-semibold my-2">Cho Chăm Sóc Sức Khỏe</h2>
                        <Link href={'#'}>Apple Trong Chăm Sóc Sức Khỏe</Link>
                        <Link href={'#'}>Sức Khỏe Trên Apple Watch</Link>
                        <div className="border-b border-white mt-2"></div>
                    </div>
                </div>

                <div className="flex flex-col my-4">
                    <div className="flex flex-col">
                        <h2 className="text-sm font-semibold my-2">Giá Trị Cốt Lõi Của Apple</h2>
                        <Link href={'#'}>Trợ Năng</Link>
                        <Link href={'#'}>Môi Trường</Link>
                        <Link href={'#'}>Quyền Riêng Tư</Link>
                        <Link href={'#'}>Trách Nhiệm Nhà Cung Cấp</Link>
                        <div className="border-b border-white mt-2"></div>
                    </div>
                    <div className="flex flex-col my-4">
                        <h2 className="text-sm font-semibold my-2">Về Apple</h2>
                        <Link href={'#'}>Newsroom</Link>
                        <Link href={'#'}>Lãnh Đạo Của Apple</Link>
                        <Link href={'#'}>Nhà Đầu Tư</Link>
                        <Link href={'#'}>Đạo Đức & Quy Tắc</Link>
                        <Link href={'#'}>Sự Kiện</Link>
                        <Link href={'#'}>Liên Hệ Apple</Link>
                        <div className="border-b border-white mt-2"></div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center mt-6">
                <p>Xem thêm cách để mua hàng: Tìm cửa hàng bán lẻ gần bạn. Hoặc gọi 1800 1192.</p>
                <div className="border-b border-white m-6 w-full"></div>
            </div>
        </div>
    );
};

export default Footer;
