import bgHideVideo from '../../assets/Video/bgHide.mp4';
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import nail1 from '../../assets/Image/nail1.jpg';
import nail2 from '../../assets/Image/nail2.jpg';
import nail3 from '../../assets/Image/nail3.jpg';
import nail4 from '../../assets/Image/nail4.jpg';
import nail5 from '../../assets/Image/nail5.jpg';
import nail6 from '../../assets/Image/nail6.jpg';
import nail7 from '../../assets/Image/nail7.jpg';
import nail8 from '../../assets/Image/nail8.jpg';
import nail9 from '../../assets/Image/nail9.jpg';
import nail10 from '../../assets/Image/nail10.jpg';
import nail11 from '../../assets/Image/nail11.jpg';
import nail12 from '../../assets/Image/nail12.jpg';
import appMobile from '../../assets/Image/appMobile.jpg';
import mkt from '../../assets/Image/mkt.jpg';
import signPad from '../../assets/Image/signPad.jpg';
import map from '../../assets/Image/map.png';
import salonInBox from '../../assets/Image/salonInBox1.png';
import zotaPC21 from '../../assets/Image/zotaPC21.jpg';
import checkInTablet from '../../assets/Image/checkInTablet.jpg';
import signatureTablet from '../../assets/Image/signatureTablet.jpg';
import paxA920 from '../../assets/Image/paxA920.jpg';
import printer from '../../assets/Image/printer.jpg';
import paxA35 from '../../assets/Image/paxA35.jpg';
import cashDrawer from '../../assets/Image/cashDrawer.jpg';
import router from '../../assets/Image/router.jpg';
import ecoSystem from '../../assets/Image/ecoSystem.png';
import cashDiscount from '../../assets/Image/cashDiscount.png';

const HomePage = () => {

    const images = [nail1, nail2, nail3, nail4, nail5, nail6, nail7, nail8, nail9, nail10, nail11, nail12];
    const controlsTop = useAnimation();
    const controlsBottom = useAnimation();

    const [tiem, setTiem] = useState(0);
    const [support, setSupport] = useState(0);
    const [vnUsPh, setVnUsPh] = useState(0);
    // const counterRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRefs = useRef([]);

    const cards = [
        {
            title: "App Mobile",
            description:
                "Khi chủ tiệm vắng mặt, ZOMO là giải pháp quản lý, theo dõi linh hoạt trên điện thoại.",
            image: appMobile,

        },
        {
            title: "Elite Marketing",
            description:
                "Đẩy mạnh hơn nữa Marketing ( SEO, Website, Facebook, Google, App Map, Yelp......)",
            image: mkt,

        },
        {
            title: "Signature Pad",
            description:
                "Cho phép khách dùng chữ ký điện tử và lưu trữ. Ngoài ra khuyến khích khách cho tips.",
            image: signPad,

        },
    ];

    const sections = [
        { title: "Zota PC", content: { img: zotaPC21, description: "Màn hình 21' và sắc nét giúp tối ưu hóa thao tác và giảm bớt công đoạn chỉnh sửa." } },
        { title: "Check-in", content: { img: checkInTablet, description: "Thu thập thông tin từ khách hàng, giúp hiểu rõ doanh nghiệp và xu hướng thị trường." } },
        { title: "Signature Pad", content: { img: signatureTablet, description: "Kích thích khách để lại tips và lưu trữ reciept." } },
        { title: "Mobile POS", content: { img: paxA920, description: "Linh hoạt, nhanh chóng và tiện lợi. Di chuyển tự do trong tiệm mọi lúc, mọi nơi." } },
        { title: "Epson Printer", content: { img: printer, description: "In hóa đơn rõ ràng, chi tiết với thông tin về dịch vụ, người thợ, thời gian và discount." } },
        { title: "Pax A35", content: { img: paxA35, description: "Giúp khách thanh toán nhanh chóng và dễ dàng, liên kết hoàn hảo với hệ thống POS." } },
        { title: "Cash Drawer", content: { img: cashDrawer, description: "Lưu trữ, quản lý, và thanh toán dễ dàng tiền cash." } },
        { title: "Mikrotik Router", content: { img: router, description: "Giúp ổn định hệ thống POS." } },
    ];

    const handleClick = (index) => {
        setCurrentIndex(index);
        sectionRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
    };

    useEffect(() => {
        const moveSlider = async () => {
            await controlsTop.start({
                x: ["0%", "-60%", "0%"],
                transition: { ease: "linear", duration: 15, repeat: Infinity },
            });
            await controlsBottom.start({
                x: ["-60%", "0%", "-60%"],
                transition: { ease: "linear", duration: 15, repeat: Infinity },
            });
        };
        moveSlider();
    }, [controlsTop, controlsBottom]);

    const startAnimation = () => {
        let tiemStart = 0, supportStart = 0, vnUsPhStart = 0;
        const tiemTarget = 4000, supportTarget = 100, vnUsPhTarget = 3;
        const duration = 2000;
        const startTime = performance.now();

        function animate(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setTiem(Math.floor(progress * tiemTarget));
            setSupport(Math.floor(progress * supportTarget));
            setVnUsPh(Math.floor(progress * vnUsPhTarget));
            if (progress < 1) requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    };

    useEffect(() => {
        startAnimation();
        const interval = setInterval(startAnimation, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full px-5 bg-white">
            <div className="relative w-full h-screen overflow-hidden rounded-2xl shadow-2xl">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute -top-20 left-0 w-full h-full object-cover"
                >
                    <source src={bgHideVideo} type="video/mp4" />
                </video>
                <div className="absolute top-15 inset-0 bg-transparent">

                    <div className='flex w-full'>
                        <div className='w-1/3 flex flex-col justify-center gap-5 ml-3'>
                            <div className='text-pink-400 text-6xl font-serif font-stretch-90% '>
                                Vượt Trội Hơn
                            </div>
                            <div className='text-blue-900 text-6xl font-serif font-semibold'>
                                Mỗi Ngày
                            </div>
                            <div className='flex gap-8 mt-2'>
                                <div className=' bg-pink-400 px-8 py-4 rounded-2xl flex items-center text-xl font-sans font-extrabold hover:bg-blue-900 cursor-pointer'>
                                    Get Started
                                </div>
                                <div className="border-2 border-pink-400 bg-white text-black px-8 py-4 rounded-2xl flex items-center text-xl font-sans font-extrabold hover:bg-pink-400 hover:text-white cursor-pointer">
                                    Check Pricing
                                </div>
                            </div>
                        </div>
                        <iframe
                            className='rounded-l-2xl'
                            src="https://player.vimeo.com/video/916024376?autoplay=1&controls=0&loop=1&autopause=0&playsinline=1&muted=1"
                            width="1000"
                            height="540"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="flex justify-center items-center py-16">
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-20 px-10">
                            <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Quản Lý Thông Minh</h3>
                                <p className="text-gray-500">Tối ưu quy trình, đơn giản hóa công việc hàng ngày.</p>
                            </div>
                            <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Tiết Kiệm Tối Ưu</h3>
                                <p className="text-gray-500">Giảm chi phí vận hành, tăng hiệu suất kinh doanh.</p>
                            </div>
                            <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Kết Quả Xuất Sắc</h3>
                                <p className="text-gray-500">Đạt hiệu suất cao nhất với hệ thống tối ưu.</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div className='flex flex-col gap-2 mt-10 rounded-2xl shadow-xl '>
                <div className="max-w-[100%]  overflow-hidden rounded-t-2xl">
                    <motion.div className="flex " animate={controlsTop}>
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Slide ${index}`}
                                className="w-[300px] h-[200px] object-cover "
                            />
                        ))}
                    </motion.div>
                </div>
                <div className="max-w-[100%] overflow-hidden rounded-b-2xl ">
                    <motion.div className="flex " animate={controlsBottom}>
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Slide ${index}`}
                                className="w-[300px] h-[200px] object-cover "
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-10 p-10 mt-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition duration-300 cursor-pointer group"
                    >
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <h3
                            className="mt-4 text-xl font-semibold text-pink-500 transition-colors duration-300 group-hover:text-blue-700 "
                        >
                            {card.title} →
                        </h3>
                        <p className="mt-2 text-gray-600">{card.description}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-col items-center justify-center py-20 px-5'>
                <div className=' flex gap-3 font-serif font-bold text-6xl text-blue-900'>
                    Thành Tựu của
                    <p className='text-pink-500'>
                        ZOTA
                    </p>
                </div>
                <p className="text-2xl text-gray-900 py-10 px-30">
                    Trong <span className="font-bold text-pink-500">hơn 10 năm</span> hoạt động,{" "}
                    <span className="font-bold text-pink-500">ZOTA (POS system for nail salons)</span> đã phát triển mạnh mẽ và có mặt tại hơn{" "}
                    <span className="text-pink-500 font-bold">4.000 tiệm</span>{" "}
                    <span className="text-pink-500">(hair salon - restaurant - nail salon)</span> trên 50 tiểu bang trên khắp nước Mỹ.
                </p>
                <img src={map} />
                <div className="flex justify-center items-center py-14 px-40 gap-52 bg-pink-400 text-white rounded-2xl shadow-lg">
                    <div className="flex-1 text-center">
                        <div className="text-5xl font-bold min-w-[100px]">{tiem}+</div>
                        <div className="text-2xl">Tiệm</div>
                    </div>
                    <div className="flex-1 text-center">
                        <div className="text-5xl font-bold min-w-[100px]">{support}+</div>
                        <div className="text-2xl">Support</div>
                    </div>
                    <div className="flex-2 text-center">
                        <div className="text-5xl font-bold min-w-[100px]">{vnUsPh}</div>
                        <div className="text-2xl">VN, US, PH</div>
                    </div>
                </div>
                <img src={salonInBox} className='mt-30 rounded-2xl shadow-xl' />
            </div>
            <div className="flex flex-col items-center justify-center py-20">
                <div className="relative w-11/12 overflow-x-hidden">
                    <div className="flex space-x-52 mx-auto overflow-x-auto px-10 no-scrollbar">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                ref={(el) => (sectionRefs.current[index] = el)}
                                className={`text-5xl font-bold transition duration-300 whitespace-nowrap cursor-pointer ${index === currentIndex ? "text-pink-500" : "text-pink-200"
                                    }`}
                                onClick={() => handleClick(index)}
                            >
                                {section.title}
                            </div>
                        ))}
                    </div>
                </div>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1 }}
                    className="bg-pink-50 p-8 rounded-lg shadow-lg w-11/12 mt-6 flex justify-center items-center"
                >
                    <img
                        src={sections[currentIndex].content.img}
                        alt={sections[currentIndex].title}
                        className="w-1/3 rounded-lg"
                    />
                    <p className="ml-10 mt-10 text-xl font-semibold text-gray-600">{sections[currentIndex].content.description}</p>
                </motion.div>
            </div>
            <div className='flex flex-col items-center justify-center py-20 px-5'>
                <div className=' flex gap-3 font-serif font-bold text-6xl text-blue-900'>
                    <p className='text-pink-500'>
                        ZOTA
                    </p>
                    eco-system
                </div>
                <p className="text-2xl text-gray-900 text-center mt-10">
                    Tối ưu hoạt động với hệ sinh thái Zota: thông minh, đầy đủ, ổn định cho tiệm
                    <span className="text-pink-500 font-medium block">
                        NAIL SALON - HAIR SALON - BEAUTY SPA <a>của người Việt.</a>
                    </span> .
                </p>
                <img src={ecoSystem} />
            </div>
            <div className=" flex items-center p-10 mt-10 rounded-2xl shadow-lg bg-pink-400 text-white ">
                <div className='flex flex-col justify-center gap-5'>
                    <h3 className={`mt-4 text-6xl font-semibold transition-colors duration-300 `}>
                        CASH DISCOUNT PROGRAM
                    </h3>
                    <p className="mt-2 text-4xl font-thin italic ">0% CREDIT CARD PROCESSING</p>
                    <div className='flex gap-8 mt-10'>
                        <div className=' bg-white text-pink-400 px-8 py-4 rounded-2xl flex items-center text-xl font-sans font-extrabold hover:bg-blue-900 cursor-pointer'>
                            Get Started
                        </div>
                        <div className=" text-white bg-blue-900  px-8 py-4 rounded-2xl flex items-center text-xl font-sans font-extrabold hover:bg-pink-400 border-2 border-blue-900 cursor-pointer">
                            Check Pricing
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden rounded-lg p-20">
                    <img
                        src={cashDiscount}
                        className="w-full  object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                    />
                </div>
            </div>

            <div className="flex w-full items-center gap-20 px-10 py-20 ">
                <div className=" flex flex-col gap-10 justify-center ml-3">
                    <div className="flex text-blue-900 text-6xl font-serif font-normal">
                        <p className='text-pink-400 font-semibold'>ZOMO</p> Mobile App
                    </div>
                    <div className="text-black text-xl font-light ">
                        Những khi chủ tiệm không có mặt, ZOMO chính là giải pháp! Chỉ cần cài đặt ứng dụng ZOMO trên điện thoại, người chủ có thể dễ dàng truy cập tất cả doanh thu, bảng lương, và những giao dịch chuyển khoản mọi lúc mọi nơi. Đồng thời, ZOMO còn có tính năng tính toán tự động những khoản hoa hồng và tiền tips của thợ một cách chính xác nhất.
                    </div>
                </div>
                <div className="w-full h-full">
                    <iframe
                        width="700"
                        height="394"
                        src="https://www.youtube.com/embed/930-ohw-qnc?controls=0&modestbranding=1&showinfo=0&rel=0&autoplay=1&mute=1"
                        title="[ZOMO App Tutorials] Giới Thiệu Các Tính Năng Cơ Bản Trên ZOMO"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>




    )
}

export default HomePage;