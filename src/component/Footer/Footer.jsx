import { TextField, Button, Box } from "@mui/material";
import contact from "../../assets/Image/contact.png";

const Footer = () => {
    return (
        <div className="flex w-full">
            <img src={contact} className="w-1/2" />
            <div className="flex flex-col items-center justify-center bg-white">
                <div className="text-center text-pink-600 font-bold">
                    Liên Hệ Với Chúng Tôi <br /> Tư Vấn Miễn Phí!
                </div>
                <form className="mt-6 space-y-4">
                    <TextField
                        fullWidth
                        label="Name*"
                        placeholder="Your name"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        label="Last name"
                        placeholder="Your last name"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        label="Your email*"
                        placeholder="Your email address"
                        type="email"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        label="Message*"
                        placeholder="Enter your message"
                        multiline
                        rows={4}
                        variant="outlined"
                    />

                    <Box className="flex justify-center">
                        <Button
                            variant="contained"
                            color="secondary"
                            className="bg-pink-500 hover:bg-pink-600 text-white w-full py-2 rounded-full"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Box>
                </form>

            </div>
        </div>

    )
}

export default Footer;