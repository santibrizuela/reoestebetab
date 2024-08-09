import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { ImLocation } from 'react-icons/im'
import BannerBrand from '@/public/sachLogoR.png';
import { FaFacebookSquare } from "react-icons/fa";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

const Carousel = () => {
    return ( 
        <div className="h-[30rem] bg-cover bg-center md:bg-fixed" style={{ backgroundImage: "url('../../../166009321810323.png')"}}>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div 
                    className='justify-center text-center'
                >
                    <Image 
                        className='group-hover:scale-125 transition-all duration-500 w-72' 
                        src={BannerBrand} 
                        alt='Agencia de vehículos' 
                    />
                    
                    <div className="my-2">
                        <Link href='/planesdeahorro'>
                            <div className='btn btn-primary m-1'>
                                <p className='p-2'>Plan de Ahorro</p>
                            </div>
                        </Link>
                        <Link target='_blank' rel='noreferrer' href='https://wa.me/5491122502345?text=Hola!%20Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20un%20veh%C3%ADculo%20publicado%20en%20la%20web.'>
                            <div className='btn btn-primary btn-outline m-1'>
                                <p className='p-2'>Asesorate</p>
                            </div>
                        </Link>
                    </div>
                    

                    <div className='flex items-center justify-center max-w-[330px] m-auto text-2xl'>
                        <a target='_blank' rel='noreferrer' href='https://wa.me/5491122502345?text=Hola!%20Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20un%20veh%C3%ADculo%20publicado%20en%20la%20web.'>
                            <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineWhatsApp/>
                            </div>
                        </a>
                        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/sach_usados/'>
                            <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineInstagram/>
                            </div>
                        </a>    
                        <a target='_blank' rel='noreferrer' href='https://www.facebook.com/organizacionsach'>
                            <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineFacebook/>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Carousel;