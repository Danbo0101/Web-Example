import { TextField, Button, Box } from "@mui/material";
import contact from "../../assets/Image/contact.png";
import SendIcon from '@mui/icons-material/Send';
import logo from '../../assets/Image/logoHomePage.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Footer = () => {

    const containerStyle = {
        width: "100%",
        height: "500px"
    };

    const center = { lat: 21.0285, lng: 105.8542 }; // Hồ Gươm, Hà Nội

    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyDc7PnOq3Hxzq6dxeUVaY8WGLHIePl0swY" });

    return (
        <div className="flex flex-col w-full bg-white">
            <div className="w-full flex px-10 gap-20 justify-center">
                <img src={contact} className="w-2xl rounded-3xl" />
                <div className="w-1/3 flex flex-col items-center justify-center bg-white ">
                    <div className="text-center text-3xl text-pink-600 font-bold">
                        Liên Hệ Với Chúng Tôi <br /> Tư Vấn Miễn Phí!
                    </div>
                    <div className="mt-6 flex flex-col gap-5 w-full">
                        <TextField
                            fullWidth
                            label="Name*"
                            placeholder="Your name"
                            variant="filled"
                        />
                        <TextField
                            fullWidth
                            label="Last name"
                            placeholder="Your last name"
                            variant="filled"
                        />
                        <TextField
                            fullWidth
                            label="Your email*"
                            placeholder="Your email address"
                            type="email"
                            variant="filled"
                        />
                        <TextField
                            fullWidth
                            label="Message*"
                            placeholder="Enter your message"
                            multiline
                            rows={4}
                            variant="filled"
                        />

                        <Box className="flex justify-center">
                            <Button
                                variant="outlined"
                                color="primary"
                                className="bg-pink-400 hover:bg-blue-900 text-white w-full py-4 rounded-full"
                                type="submit"
                                endIcon={<SendIcon />}
                            >
                                Submit
                            </Button>
                        </Box>
                    </div>

                </div>
            </div>
            <div className="text-black flex p-10 gap-10">
                <div className="w-1/4 flex flex-col items-center justify-center gap-10">
                    <img src={logo} alt="ZOTA" className='w-52' />
                    <div className="text-center font-normal subpixel-antialiased">
                        Zota là một công ty có kinh nghiệm trên 15 năm hoạt động rộng rãi trong nhiều lĩnh vực, bao gồm hệ thống POS, Marketing, và processing cho ngành Nails, Hair, Restaurant cũng như cộng đồng người Việt.
                    </div>
                    <div className='px-3'>
                        <IconButton>
                            <FacebookOutlinedIcon
                                className=' text-blue-700 '
                                sx={
                                    {
                                        fontSize: "35px",
                                    }
                                }
                            />
                        </IconButton>
                        <IconButton className=''>
                            <InstagramIcon
                                className=' text-pink-500 '
                                sx={
                                    {
                                        fontSize: "35px",
                                    }
                                }
                            />
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon
                                className=' text-blue-600 '
                                sx={
                                    {
                                        fontSize: "35px",
                                    }
                                } />
                        </IconButton>
                        <IconButton>
                            <YouTubeIcon
                                className=' text-red-600 '
                                sx={
                                    {
                                        fontSize: "35px",
                                    }
                                } />
                        </IconButton>
                    </div>
                </div>
                <div className="w-1/4 flex flex-col gap-5">
                    <div className="text-center font-bold font-serif text-lg text-pink-400 mt-8">
                        Contact Us
                    </div>
                    <div className="mt-14">
                        <strong>Address: </strong> 4131 Marlton Pike
                        Pennsauken, NJ 08109
                    </div>
                    <div>
                        <strong>Phone:</strong> (470) 282-0580
                    </div>
                    <div>
                        <strong>Website: </strong>  nailmediasolutions.com
                    </div>
                    <div>
                        <strong>Email: </strong> zotabykhanhngo@gmail.com
                    </div>
                </div>
                <div className="w-1/8 flex flex-col gap-5">
                    <div className="text-center font-bold font-serif text-lg text-pink-400 mt-8">
                        Services
                    </div>
                    <a className="italic mt-14">
                        Pos system
                    </a>
                    <a className="italic">
                        Credit  card processing
                    </a>
                    <a className="italic">
                        Marketing
                    </a>
                    <a className="italic">
                        Website
                    </a>
                    <a className="italic">
                        Gift card
                    </a>
                    <a className="italic">
                        Digital
                    </a>
                </div>
                <div className="w-1/4 flex flex-col gap-5">
                    <div className="text-center font-bold font-serif text-lg text-pink-400 mt-8 mb-14">
                        Location
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.1913250055527!2d-75.0763019236801!3d39.93710987152087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c91e907f6d83%3A0x4ae56efe841deea1!2sZOTA%20Payment%20Services!5e0!3m2!1svi!2s!4v1741907087747!5m2!1svi!2s"
                        width="350"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <hr className="border-t border-gray-300 w-full my-4" />
            <div className="text-gray-700 font-serif italic font-light text-sm text-center">
                Designed by Danbo © 2025.
            </div>
        </div>

    )
}

export default Footer;