import bgHideVideo from '../../assets/Video/bgHide.mp4';
import { useEffect } from "react";
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
import signPad from '../../assets/Image/signPad.jpg'


const HomePage = () => {

    const images = [nail1, nail2, nail3, nail4, nail5, nail6, nail7, nail8, nail9, nail10, nail11, nail12];
    const controlsTop = useAnimation();
    const controlsBottom = useAnimation();

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
                <div className="absolute top-15 inset-0 bg-gradient-to-t from-white/40 via-transparent from-white/40">
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
                            frameborder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowfullscreen>
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
        </div>


    )
}

export default HomePage;