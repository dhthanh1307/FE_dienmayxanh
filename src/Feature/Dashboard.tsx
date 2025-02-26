import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState } from 'react';
import { Swiper, Icon } from "zmp-ui";
// import "@zalo/ui-icons";
const Dashboard = () => {
    const categories = [
        { name: "Máy lạnh", link: "	https://cdnv2.tgdd.vn/mwg-static/common/Common/48/a6/48a6bd2b6d7ad2712eb93772b3578deb.png" },
        { name: "Máy lọc nước", link: "https://cdnv2.tgdd.vn/mwg-static/common/Common/ff/40/ff40b05375a001ea1f246cfd81fcbd12.png" },
        { name: "Máy giặc", link: "https://cdnv2.tgdd.vn/mwg-static/common/Common/0a/b9/0ab938f5b5b2993d568351bceb721407.png" },
        { name: "Nồi cơm điện", link: "https://cdnv2.tgdd.vn/mwg-static/dmx/Common/2a/8c/2a8ca60d0f63068060068e3884032499.png" },
        { name: "Máy nước nóng", link: "https://cdnv2.tgdd.vn/mwg-static/dmx/Common/e5/94/e594135d5eed6cc128fe2a9c62154ad9.png" },
        { name: "Bếp từ", link: "https://cdnv2.tgdd.vn/mwg-static/common/Common/53/cf/53cfb39526ce0023c6ead5c3292923b9.png" },
        { name: "Tủ đông mát", link: "https://cdnv2.tgdd.vn/mwg-static/dmx/Common/5f/fc/5ffc124606fecac8c77bceb28b9c5c05.png" },
        { name: "Nồi chiên không dầu", link: "https://cdnv2.tgdd.vn/mwg-static/dmx/Common/3a/d7/3ad7a7605d2de79bd56d11f80c326d58.png" },
        { name: "Tivi", link: "https://cdnv2.tgdd.vn/mwg-static/common/Common/64/d1/64d11a09c75ea322dbc547739886e1d5.png" },
        { name: "Gia dụng", link: "https://cdnv2.tgdd.vn/mwg-static/dmx/Common/8c/1b/8c1b71a6a8fc062456825e6483b26e6b.png" },
        { name: "Tủ lạnh", link: "https://cdnv2.tgdd.vn/mwg-static/common/Common/64/85/6485154d19085e781f44d057f1c63c71.png" },
        { name: "Máy lọc không khí", link: "https://cdnv2.tgdd.vn/mwg-static/dmx/Common/04/2e/042e6d1427540a418b516a9576e79b20.png" },
        { name: "Máy sấy quần áo", link: "https://cdnv2.tgdd.vn/mwg-static/dmx/Common/0c/c3/0cc360b738e93b746af289ba67029e57.png" },
        { name: "Máy hút bụi", link: "https://cdnv2.tgdd.vn/mwg-static/dmx/Common/ad/d4/add43c28ca2de72ffdef6c59b19bf7a7.png" },
        { name: "Loa", link: "https://cdnv2.tgdd.vn/mwg-static/common/Common/00/55/0055c858a83557e51e539deedda6dd81.png" },
    ];
    const images = [
        "https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/ef/83/ef835af247e01dfbb04918ffabae87f5.png",
        "https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/88/f6/88f63d048de0f5adb377a79974411c04.png",
        "https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/0d/6e/0d6e6476573235434809026a62548f10.png",
        "https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/f7/d0/f7d0ce5072276309f27253d11ff119b0.gif",
        "https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/10/10/10101413160978102c60dd10e66ffc5b.png",
        "https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/5b/a2/5ba2915b16a212df46fbb08cf40ce1f4.png",

    ];
    const promotions = [
        {
            name: "Tủ lạnh LG Inverter 666 lít InstaView LFB66BLMI",
            current_price: 27990000,
            discount_percentage: 44,
            remaining_quantity: 30,
            image_link: "https://cdn.tgdd.vn/Products/Images/2002/299824/may-lanh-nagakawa-inverter-1-hp-nis-c09r2t28-550x160.jpg",
            installment: true,
            exclusive: false,
            note: "Sản phẩm bán chạy nhất tháng",
            rating: 4.8,
            sold: 150
        },
        {
            name: "Máy lọc nước RO ROBOT SPRING-X10GUR",
            current_price: 4990000,
            discount_percentage: 20,
            remaining_quantity: 20,
            image_link: "https://cdn.tgdd.vn/Products/Images/1992/155285/midea-fts40-17vd-290823-021837-600x600.jpg",
            installment: false,
            exclusive: true,
            note: "Chỉ có tại cửa hàng online",
            rating: 4.6,
            sold: 80
        },
        {
            name: "Bếp từ đôi âm Electrolux EHI7280BB 3700W",
            current_price: 10290000,
            discount_percentage: 23,
            remaining_quantity: 12,
            image_link: "https://cdn.tgdd.vn/Products/Images/3385/326048/may-loc-nuoc-ro-nong-lanh-sunhouse-sha76222kl-11-loi-040624-120155-600x600.jpg",
            installment: true,
            exclusive: false,
            note: "Sản phẩm có bảo hành 3 năm",
            rating: 4.7,
            sold: 120
        },
        {
            name: "Nồi chiên không dầu Philips HD9252/90 4.1 lít",
            current_price: 2990000,
            discount_percentage: 25,
            remaining_quantity: 18,
            image_link: "https://cdn.tgdd.vn/Products/Images/1944/302754/may-giat-samsung-9-5kg-wa95cg4545bdsv-030723-033852-600x600.jpg",
            installment: false,
            exclusive: true,
            note: "Hàng nhập khẩu",
            rating: 4.5,
            sold: 200
        },
        {
            name: "Máy giặt Samsung Inverter 9 kg WW90J54E0BW/SV",
            current_price: 8490000,
            discount_percentage: 30,
            remaining_quantity: 8,
            image_link: "https://cdn.tgdd.vn/Products/Images/1943/328724/TimerThumb/tu-lanh-aqua-inverter-550-lit-side-by-side-aqr-s612xa-cbc-(2).jpg",
            installment: true,
            exclusive: false,
            note: "Công nghệ giặt hơi nước hiện đại",
            rating: 4.9,
            sold: 95
        },
        {
            name: "Smart Tivi LG 4K 55 inch 55UN7400PTA",
            current_price: 12990000,
            discount_percentage: 35,
            remaining_quantity: 5,
            image_link: "https://cdn.tgdd.vn/Products/Images/1990/314221/may-hut-bui-cam-tay-deerma-dx118c-pro-251023-033910-600x600.jpg",
            installment: true,
            exclusive: true,
            note: "Sản phẩm độc quyền online",
            rating: 4.3,
            sold: 60
        },
        {
            name: "Máy lạnh Daikin Inverter 1 HP FTKA25VMVMV",
            current_price: 9490000,
            discount_percentage: 28,
            remaining_quantity: 7,
            image_link: "https://cdn.tgdd.vn/Products/Images/1942/327550/TimerThumb/android-tivi-aqua-43-inch-aqt43k800fg-(4).jpg",
            installment: true,
            exclusive: false,
            note: "Chế độ làm lạnh nhanh, tiết kiệm điện",
            rating: 4.8,
            sold: 130
        },
        {
            name: "Tủ lạnh Toshiba Inverter 322 lít GR-RB405WE-PMV",
            current_price: 10990000,
            discount_percentage: 15,
            remaining_quantity: 15,
            image_link: "https://cdn.tgdd.vn/Products/Images/2002/299824/may-lanh-nagakawa-inverter-1-hp-nis-c09r2t28-550x160.jpg",
            installment: false,
            exclusive: true,
            note: "Dung tích lớn, phù hợp gia đình",
            rating: 4.6,
            sold: 140
        },
        {
            name: "Lò vi sóng Sharp R-205VN(S) 20 lít",
            current_price: 1590000,
            discount_percentage: 18,
            remaining_quantity: 25,
            image_link: "https://cdn.tgdd.vn/Products/Images/1944/310434/may-giat-lg-fv1410s4m1-fix-thumb-600x600.jpg",
            installment: false,
            exclusive: false,
            note: "Bảo hành chính hãng 24 tháng",
            rating: 4.2,
            sold: 50
        },
        {
            name: "Máy hút bụi Electrolux Z1231 1600W",
            current_price: 1990000,
            discount_percentage: 22,
            remaining_quantity: 14,
            image_link: "https://cdn.tgdd.vn/Products/Images/1944/310434/may-giat-lg-fv1410s4m1-fix-thumb-600x600.jpg",
            installment: false,
            exclusive: false,
            note: "Công suất mạnh, thiết kế nhỏ gọn",
            rating: 4.7,
            sold: 110
        },
        {
            name: "Bình nước nóng Ariston AN2 30 LUX 2.5 FE",
            current_price: 3290000,
            discount_percentage: 26,
            remaining_quantity: 9,
            image_link: "https://cdn.tgdd.vn/Products/Images/1985/249202/ava-yx-906n-170223-045908-600x600.jpg",
            installment: true,
            exclusive: false,
            note: "Tiết kiệm điện năng, bảo vệ người dùng",
            rating: 4.5,
            sold: 75
        },
        {
            name: "Máy xay sinh tố Philips HR2221/00 700W",
            current_price: 1290000,
            discount_percentage: 15,
            remaining_quantity: 30,
            image_link: "https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1943/307871/lg-gr-b256jds-300x300.jpg",
            installment: false,
            exclusive: false,
            note: "Lưỡi dao thép không gỉ, an toàn thực phẩm",
            rating: 4.4,
            sold: 90
        }
    ];

    const [showAll, setShowAll] = useState(false);
    const [showAllSuggest, setShowAllSuggest] = useState(false)
    const displayedPromotions = showAll ? promotions : promotions.slice(0, 6);
    const displayedSuggest = showAllSuggest ? promotions : promotions.slice(0, 6);

    return (
        <>
            <div className="bg-white">
                <div className="bg-[#005284] justify-center flex">
                    <div className="h-9 w-full">
                        <img className="h-9  w-full" src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/74/f3/74f3c5d044c73bf888d60d1db1307080.gif" />
                    </div>
                </div>
                <div className="h-22 bg-[#2A83E9] flex flex-wrap justify-center">
                    <div className="flex justify-center pt-2 pb-1 gap-1">
                        <img className="h-8 w-8" src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-The-Gioi-Di-Dong-MWG.png" />
                        <div className="w-40 h-8 rounded-2xl bg-[#5194E8] flex justify-between items-center text-white text-[10px] p-2 ">
                            <div>
                                <Icon icon="zi-location" size={16} />
                                <span className="ms-1">Hồ Chí Minh</span>
                            </div>
                            <Icon icon="zi-chevron-right" size={16} />


                        </div>
                        <div className="w-20 h-8 rounded-2xl bg-[#5194E8] text-white text-[10px] flex justify-center items-center">
                            <Icon icon="zi-user" size={16} />
                            <span>Đăng nhập</span>
                        </div>
                    </div>
                    <div className="flex justify-center w-full h-9">
                        <div className="bg-[#F2F4F7] rounded-tl-lg rounded-bl-lg w-13 flex items-center justify-center">
                            <img className="w-7 h-6" src="https://cdn-icons-png.flaticon.com/512/2889/2889278.png" alt="" />
                        </div>
                        <div className="bg-white w-43 flex justify-center items-center">
                            <Icon icon="zi-search" size={16}></Icon>
                            <input
                                className="text-[10px] p-1"
                                type="text"
                                placeholder="Bạn tìm gì..." ></input>
                        </div>
                        <div className="bg-[#F2F4F7] rounded-tr-lg rounded-br-lg w-13 flex justify-center">
                            <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/5166/5166615.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="h-36">
                    <img src="	https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/2a/0b/2a0b8259c9d8f666aa04dd0af68f3cf3.png" />
                </div>
                <div className="overflow-x-auto ">
                    <div className="w-300 inline-flex flex justify-center items-center bg-white rounded-lg text-[12px]">
                        {categories.map((category, index) => (
                            <div key={index} className=" w-34 h-30 items-center flex-wrap flex justify-center mx-auto">
                                <img src={category.link} className="w-12 h-12 hover:-translate-y-2 duration-300" />
                                <span className="w-full text-center p-1">{category.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h3 className="p-4 font-bold bg-[#F2F4F7]">Khuyến mãi Online</h3>
                <div className="scrollbar-hide max-w-sm overflow-x-auto bg-white">
                    <div className=" gap-2  text-[12px] inline-flex whitespace-nowrap">
                        <div className="w-19 h-13 flex  justify-center items-center">
                            <img src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/d9/2f/d92f547da2b474af28bab4130f81c292.png" className="w-16 h-7" />
                        </div>
                        <div className="w-19 h-13 flex  justify-center items-center">
                            <img src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/81/af/81af71d1c496a1aec9b3a0486fa89d9e.png" className="w-16 h-7" />
                        </div>
                        <div className="w-19 h-13 flex justify-center items-center">
                            <img src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/fc/b5/fcb52b54d1230bc4da350c5640d92bc1.png" className="w-16 h-7" />
                        </div>
                        <div className="w-19 h-13  flex justify-center items-center">
                            <img src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/f7/42/f74227901dfae55242988fd05679d8d9.png" className="w-16 h-7" />
                        </div>
                        <div className="w-19 h-13 flex justify-center items-center  ">
                            <span>Máy giặc</span>
                        </div>
                        <div className="w-19 h-13  flex justify-center items-center">
                            <span>Máy lọc nước</span>
                        </div>
                        <div className="w-19 h-13  flex justify-center items-center">
                            <span>Ti vi</span>
                        </div>
                        <div className="w-19 h-13  flex justify-center items-center">
                            <span>Nồi chiên</span>
                        </div>
                    </div>
                </div>

                <img className="rounded-lg p-2" src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/5b/d8/5bd8b67a7e6475657f27a96b7898252e.png" />
                <div className="flex flex-wrap gap-2 justify-center items-center bg-white">
                    {displayedPromotions.map((promotion) => (
                        <div className="w-36 h-80 rounded-lg border border-gray-300 flex justify-center flex-wrap">
                            <div className="w-30 h-36  flex  justify-center items-center">
                                <img src={promotion.image_link} className="w-30" />
                            </div>
                            <div className="m-2 w-full text-[12px]">
                                <span>
                                    {promotion.name}
                                </span>
                                <div  >
                                    <div className="text-red-600 font-bold text-[14px]">
                                        {(promotion.current_price * (100 - promotion.discount_percentage) / 100).toLocaleString("vi-VN")} ₫
                                    </div>
                                    <del className="text-gray-300 ">
                                        {promotion.current_price.toLocaleString("vi-VN")} ₫
                                    </del>
                                    <span className="text-red-600"> -{promotion.discount_percentage}%</span>

                                </div>
                                <div className="text-[10px] m-1 bg-yellow-100 w-full rounded-xl text-center flex"
                                    style={{
                                        background: `linear-gradient(to right, #facc15 ${(promotion.remaining_quantity / 30) * 100}%, #e5e7eb ${(promotion.remaining_quantity / 30) * 100}%)`,
                                    }}>
                                    <img src="https://cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/homev2/flash-sale.png" className="w-4 h-4" />
                                    <div className="mx-auto ms-4 text-center">
                                        Còn <span>{promotion.remaining_quantity}/30</span>
                                    </div>
                                </div>
                                <div className="mt-2 bg-blue-50 w-full rounded-md text-blue-700 font-bold text-center px-2 py-1">
                                    Mua ngay
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {!showAll &&
                    (<div className="h-9 font-bold text-blue-500 text-center py-5 mb-5"
                        onClick={() => setShowAll(true)}>
                        Xem thêm 6 sản phẩm
                        <Icon icon="zi-chevron-down" size={24} />

                    </div>)
                }
                <div className="m-2">
                    <Swiper>
                        {images.map((image) => (
                            <Swiper.Slide><img
                                className="slide-img"
                                src={image}
                            /></Swiper.Slide>))}
                    </Swiper>
                </div>

                <div className="text-4 font-bold p-3">
                    Gợi ý cho bạn
                </div>

                <div className="flex flex-wrap gap-2 justify-center items-center">
                    {displayedSuggest.map((promotion) => (
                        <div className="w-36 h-90 rounded-lg border border-gray-300 flex justify-center flex-wrap">
                            <div className="w-30 h-36  flex  justify-center items-center">
                                <img src={promotion.image_link} className="w-30" />
                            </div>
                            <div className="m-2 w-full text-[12px]">
                                {promotion.installment && (
                                    <div className="h-5 mb-1 bg-red-600 flex rounded-2xl items-center gap-1  ">
                                        <img className="w-5 h-5" src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/51/e2/51e2fff2daf6268049d452bd8f174035.png" alt="" />
                                        <span className="text-[10px] text-white">TRẢ TRƯỚC 0 ĐỒNG</span>
                                    </div>
                                )
                                }
                                {promotion.exclusive && (
                                    <div className="h-5 bg-blue-400 flex rounded-2xl items-center gap-1  ">
                                        <img className="w-5 h-5" src="https://cdn.tgdd.vn/2020/10/content/icon4-50x50.png" alt="" />
                                        <span className="text-[10px] text-white">BAO PHÍ 1.5 TRIỆU</span>
                                    </div>
                                )
                                }

                                <span className="line-clamp-2">
                                    {promotion.name}
                                </span>
                                <div className="bg-gray-200 text-gray-600 px-2 my-2 p-1 rounded text-[12px]">
                                    {promotion.note}
                                </div>
                                <div  >
                                    <div className="text-red-600 font-bold text-[14px]">
                                        {(promotion.current_price * (100 - promotion.discount_percentage) / 100).toLocaleString("vi-VN")} ₫
                                    </div>
                                    <del className="text-gray-300 ">
                                        {promotion.current_price.toLocaleString("vi-VN")} ₫
                                    </del>
                                    <span className="text-red-600"> -{promotion.discount_percentage}%</span>
                                </div>
                                <div className="text-gray-600 flex gap-2 items-center">
                                    <div>
                                        <Icon icon="zi-star-solid" size={16} className="text-yellow-400"></Icon>
                                        <span> {promotion.rating}</span>
                                    </div>
                                    <li className="text-nowrap">Đã bán {promotion.sold}</li>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {!showAllSuggest &&
                    (<div className="h-9 font-bold text-blue-500 text-center py-5 mb-5"
                        onClick={() => setShowAllSuggest(true)}>
                        Xem thêm 6 sản phẩm
                        <Icon icon="zi-chevron-down" size={24} />

                    </div>)
                }
                <div className="bg-gray-100 h-4">

                </div>
                <div className="text-4 font-bold p-3 mb-5">
                    Sản phẩm đặc quyền
                </div>

                <div className="flex justify-center">
                    <img src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/93/ae/93ae753990ad8ca0b4f0e6b3df096e12.png"
                        className="w-70 h-90 rounded-xl" />
                </div>
                <div className="overflow-x-auto scrollbar-hidden mx-2">
                    <div className="inline-flex gap-2 py-2">
                        {promotions.map((promotion) => (
                            <div className="w-36  rounded-lg border border-gray-300 flex justify-center flex-wrap">
                                <div className="pt-2 flex w-full">
                                    {promotion.installment && (
                                        <div className="h-5 bg-gray-100 px-1 rounded-sm  flex mx-2 items-center">
                                            <span className="text-[10px] ">Trả chậm 0%</span>
                                        </div>
                                    )
                                    }
                                    {promotion.exclusive && (
                                        <div className="h-5 bg-gray-100 rounded-sm flex  mx-2  justify-center items-center px-1 ">
                                            <span className="text-[9px] text-red-600">Mẫu mới</span>
                                        </div>
                                    )
                                    }
                                </div>
                                <div className="w-30 h-36  flex  justify-center items-center">
                                    <img src={promotion.image_link} className="w-30" />
                                </div>
                                <div className="m-2 w-full text-[12px]">
                                    {promotion.installment && (
                                        <div className="h-5 mb-1 bg-red-600 flex rounded-2xl items-center gap-1  ">
                                            <img className="w-5 h-5" src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/51/e2/51e2fff2daf6268049d452bd8f174035.png" alt="" />
                                            <span className="text-[10px] text-white">TRẢ TRƯỚC 0 ĐỒNG</span>
                                        </div>
                                    )
                                    }
                                    {promotion.exclusive && (
                                        <div className="h-5 bg-blue-400 flex rounded-2xl items-center gap-1  ">
                                            <img className="w-5 h-5" src="https://cdn.tgdd.vn/2020/10/content/icon4-50x50.png" alt="" />
                                            <span className="text-[10px] text-white">BAO PHÍ 1.5 TRIỆU</span>
                                        </div>
                                    )
                                    }

                                    <span className="line-clamp-2">
                                        {promotion.name}
                                    </span>
                                    <div className="bg-gray-200 text-gray-600 px-2 my-2 p-1 rounded text-[12px]">
                                        {promotion.note}
                                    </div>
                                    <div  >
                                        <div className="text-red-600 font-bold text-[14px]">
                                            {(promotion.current_price * (100 - promotion.discount_percentage) / 100).toLocaleString("vi-VN")} ₫
                                        </div>
                                        <del className="text-gray-300 ">
                                            {promotion.current_price.toLocaleString("vi-VN")} ₫
                                        </del>
                                        <span className="text-red-600"> -{promotion.discount_percentage}%</span>
                                    </div>
                                    <div className="text-gray-600 flex gap-2 items-center">
                                        <div>
                                            <Icon icon="zi-star-solid" size={16} className="text-yellow-400"></Icon>
                                            <span> {promotion.rating}</span>
                                        </div>
                                        <li className="text-nowrap">Đã bán {promotion.sold}</li>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="text-4 font-bold p-3">
                        Tháng Thương Hiệu Aqua
                    </div>
                    <div className="flex justify-center">
                        <img src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/1b/c9/1bc9860780d38c7fc0528b63725f7957.png"
                            className="w-75 h-125" />
                    </div>
                    <div className="text-4 font-bold p-3">
                        Gian hàng ưu đãi
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        <img src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/cb/72/cb72923f5e12d9b06e4f5a86aadd42ac.png"
                            className="w-34 h-55" />
                        <img src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/69/20/6920d9a80dfc8a98ec8000c4403363e8.png"
                            className="w-34 h-55" />
                        <img src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/e2/51/e2513636ff682b4da055b117e2dcb10d.png"
                            className="w-34 h-55" />
                        <img src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/3f/95/3f95a2fbf065c3e595a86a0dc938f878.png"
                            className="w-34 h-55" />
                    </div>
                </div>
            </div>
        </>);
}
export default Dashboard;