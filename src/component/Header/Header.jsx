import React, { useState } from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CallIcon from '@mui/icons-material/Call';
import logo from '../../assets/Image/logoHomePage.png';
import { IconButton } from '@mui/material';

const Header = () => {

    return (
        <div className=' bg-white shadow-md  '>
            <div className='py-4 flex justify-center items-center'>
                <img src={logo} alt="ZOTA" className='w-40' />
                <div className='flex justify-between items-center gap-6 px-8'>
                    <a href='/' className='font-extralight text-black'>HOME</a>
                    <a href='/' className=''>POS SYSTEM</a>
                    <a href='/' className=''>MERCHANT SERVICES</a>
                    <a href='/' className=''>TEMPLATES</a>
                    <a href='/' className=''>ABOUT US</a>
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
                <div className='flex justify-center items-center gap-2 ml-7 font-bold text-sm bg-gradient-to-r from-[#EA4999] to-[#FF99CC] px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>
                    <CallIcon
                        sx={{
                            fontSize: "17px",

                        }}
                    />
                    (609) 277-2323
                </div>
            </div>

        </div >
    );
};

export default Header;