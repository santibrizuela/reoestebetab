import React from 'react'
// img
import Img1 from '@/public/reoeste/resistencias.png';
import Img4 from '@/public/categoriesplanesdeahorro.png';
import Img7 from '@/public/categoriesasesoramiento.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
// rugby data
const productos = [
  
    {
      name: 'Resistencias',
      description:
      'Planas, Cartuchos, Sunchos.',
      cardimage: Img1,
      link:'multimarca',
    },{
      name: 'Sensores',
      description:
      'Mecánicos, Campinis.',
      cardimage: Img4,
      link:'planesdeahorro',
    },
    {
      name: 'Controladores',
      description:
       'Digitales, Analógicos.',
      cardimage: Img7,
      link:'https://wa.me/5491122502345?text=Hola!%20Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20un%20veh%C3%ADculo%20publicado%20en%20la%20web.',
    },
]

const Categories = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 z-20'>
                {productos.map((service, index) => {
                // destructure service
                const { name, description, cardimage, link } = service;
                return (
                <div
                    className='max-2-[1240px] mx-auto p-2 gap-8 pt-2 z-0'
                    key={index}    
                >
                    {/* new card */}
                    {/* image */}
                        <div className='group relative overflow-hidden text-start
                         rounded-xl'>
                            {/* overlay */}
                            <div className=' group-hover:bg-black/70 w-full h-full absolute 
                            z-40 transition-all duration-300'></div>
                            {/* img */}
                            <Image 
                            className='group-hover:scale-125 transition-all duration-500' 
                            src={cardimage} 
                            alt='Agencia de vehículos' 
                            />
                            {/* title */}
                            <div className='absolute bottom-full left-12 
                            group-hover:bottom-16 lg:group-hover:bottom-16 transition-all duration-700 z-50'>
                            <Link href={link}><span className='text-3xl font-bold text-green-500 hover:text-green-300'>{name}</span></Link>
                            </div>
                            {/* pretitle */}
                            <div className='absolute bottom-full left-12 
                            group-hover:bottom-24 transition-all duration-500 z-50'>
                            <span className='text-green-50'>{description}</span>             
                            </div>
                            {/* button */}
                            <div className='absolute bottom-full left-12 
                            group-hover:bottom-2 transition-all duration-700 z-50'>
                                <Link href={link}>
                                    <button className='btn btn-outline flex items-center align-middle navbar-btn'>
                                        <span className="md:text-xl">{name}</span>
                                        <span className="navbar-arrow"><FaArrowRight className="md:text-xl ml-2 self-center" /></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                </div>
                );
                })}
            </div>
  )
}

export default Categories