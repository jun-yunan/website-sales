/* eslint-disable @next/next/no-img-element */
import ImagePreview from '@/components/Image/ImagePreview';
import PreviewProduct from '@/components/Product/PreviewProduct';

export default function Home() {
    return (
        <div className=" bg-zinc-800 text-neutral-300 flex flex-wrap w-full min-h-[700px] items-center justify-center overflow-hidden">
            <ImagePreview
                text={'Xem bài thiết trình khai mạc'}
                background={
                    'https://www.apple.com/v/home/takeover/g/images/overview/hero/bg/hero__x15fcac9fw2q_large.jpg'
                }
                image={
                    'https://www.apple.com/v/home/takeover/g/images/overview/hero/wwdc23_logo__f11cqaltuhme_large.png'
                }
            >
                <div className="flex flex-col items-center text-2xl phone:text-base font-bold mt-9 text-white tracking-wider leading-normal">
                    <p>Giới thiệu MacBook Air 15 inch với M2,</p>
                    <div className="flex phone:flex-col phone:items-center">
                        <p>Mac Studio với M2 Max và M2 Ultra,</p>
                        <p>và Mac Pro với M2 Ultra.</p>
                    </div>
                </div>
            </ImagePreview>
            <PreviewProduct
                image="https://www.apple.com/v/home/takeover/g/images/overview/macbook-air-15/macbook_air_15__bjw8cwj0pquu_large.jpg"
                title="MacBook Air 15”"
            >
                <li>Máy tính xách tay được yêu thích nhất của chúng tôi nay có màn hình</li>
                <li>Liquid Retina 15 inch rộng rãi, thêm không gian cho những điều bạn</li>
                <li>yêu. Siêu mạnh mẽ với chip M2, cùng thời lượng pin lên đến 18 giờ.</li>
            </PreviewProduct>
            <PreviewProduct
                bgColorWhite
                image="https://www.apple.com/v/home/takeover/g/images/overview/mac-studio/mac_studio__lh66qxlrkqau_large.jpg"
                title="Mac Studio"
            >
                <li>Sức mạnh thế hệ mới với M2 Max và M2 Ultra. Hiệu năng vượt trội cùng</li>
                <li>khả năng kết nối rộng mở trong một kiểu dáng nhỏ gọn, biến mọi không</li>
                <li>gian thành studio sáng tạo.</li>
            </PreviewProduct>
            <PreviewProduct
                image="https://www.apple.com/v/home/takeover/g/images/overview/mac-pro/mac_pro__c5azjmypvg66_large.jpg"
                title="Mac Pro"
            >
                <li>Sự kết hợp ấn tượng giữa hiệu năng của Apple silicon và khả</li>
                <li>năng mở rộng PCIe cho những luồng công việc chuyên dụng.</li>
                <li>Thêm vào đó, mọi cấu hình đều trang bị chip M2 Ultra cực đỉnh</li>
                <li>mới, chip mạnh mẽ và giàu năng lực nhất hiện có của chúng tôi.</li>
            </PreviewProduct>
        </div>
    );
}
