import React from 'react';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";


function Socialmediabox() {
    return (
        <div className='bg-white pb-10'>
                                <p className='text-sm text-gray-600 mb-3'>Share This:</p>
                                <div className='flex gap-2'>
                                    <div className='p-2 text-gray-700 bg-yellow-500 rounded-lg '><FaWhatsapp /></div>
                                    <div className='p-2 text-gray-700 bg-yellow-500 rounded-lg '><FaFacebook /></div>
                                    <div className='p-2 text-gray-700 bg-yellow-500 rounded-lg '><FaLinkedin /></div>
                                    <div className='p-2 text-gray-700 bg-yellow-500 rounded-lg '><FaTwitter /></div>
                                </div>
        </div>
    )
}

export default Socialmediabox
