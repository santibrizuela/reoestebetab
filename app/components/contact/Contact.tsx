import React from 'react';
// motion
import { FaInstagram, FaWhatsapp, FaRegClock, FaEnvelope } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { IoLocationOutline } from "react-icons/io5";


const Contact = () => {
  return (
    <section className='py-24 lg:py-32 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row'>
          
          {/* form */}
          <div className='flex hover:scale-100 ease-in duration-300 md:h-[60vh] md:w-[60vw] mx-auto md:px-2'>

            
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.0462961091475!2d-58.50180233042073!3d-34.59947849830973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb72f954dd41b%3A0x47148b971370c8f1!2sSach%20Automotriz!5e0!3m2!1ses-419!2sar!4v1715100775497!5m2!1ses-419!2sar" 
              className='relative flex-shrink-0 w-full rounded-xl'
              loading="lazy" 
            ></iframe>
            
          </div>
          {/* text */}
          <div 
            className='max-w-[1240px] flex items-center mx-auto text-center lg:text-start md:px-2'
          >
            <div>
              <h2 className='text-yellow-500 font-bold text-[45px] lg:text-[86px] leading-none mb-8'>
                Contacto
              </h2>
              <a className='flex menuNav' target='_blank' rel='noreferrer' href='https://wa.me/5491122502345?text=Hola!%20Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20un%20veh%C3%ADculo%20publicado%20en%20la%20web.'>
              
                  <FaWhatsapp className='my-auto mx-1'/> 11-2250-2345
         
              </a>
              <a className='flex menuNav' href='mailto:sachautomotriz@gmail.com'>
                
                  <AiOutlineMail className='my-auto mx-1'/> sachautomotriz@gmail.com
             
              </a>
              <a className='flex menuNav' target='_blank' rel='noreferrer' href='https://maps.app.goo.gl/JatUye5irxAN2pWB7'>
                
                  <IoLocationOutline  className='my-auto mx-1'/> Av. Francisco Beiró 3420
               
              </a>
              <a className='flex menuNav' target='_blank' rel='noreferrer' href='https://maps.app.goo.gl/JatUye5irxAN2pWB7'>
                  <FaRegClock className='my-2 mx-1'/> <div className='text-justify'>Lun a Vie: 8:30hs a 18hs <br/> Sábados : 10hs a 17hs</div>
              </a>

              
              {/* socials */}
              <div 
                className='flex-1 flex text-[20px] gap-x-6 my-6 max-w-max mx-auto lg:mx-2'
              >
                <a target='_blank' rel='noreferrer' href='https://wa.me/5491122502345?text=Hola!%20Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20un%20veh%C3%ADculo%20publicado%20en%20la%20web.'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <FaWhatsapp/>
                    </div>
                </a>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/sach_usados/'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <FaInstagram/>
                    </div>
                </a>    
                <a target='_blank' rel='noreferrer' href='mailto:sachautomotriz@gmail.com'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                </a>    
                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/organizacionsach'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <AiOutlineFacebook/>
                    </div>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
