import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";


const Footer = () => {
    return ( 
        <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between mt-16 pb-8">
                    <FooterList>
                        <h3 className="text-lg font-bold w-fit">Shop Categories</h3>
                        <Link className="w-fit" href="/planesdeahorro">Plan de Ahorro</Link>
                        <Link className="w-fit" href="/multimarca">Multimarca</Link>
                        <Link className="w-fit" href="/usadospremium">Usados Premium</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-lg font-bold w-min">Navegación</h3>
                        <Link className="inline-block max-w-content" href="/">Inicio</Link>
                        <Link className="w-fit" href="/about">Acerca de</Link>
                        <Link className="w-fit" href="#contact">Contacto</Link>
                    </FooterList>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-base font-bold mb-2">Acerca De</h3>
                        <p className="mb-2">En Organización Sach, tenemos planes a tu medida con la flexibilidad para financiar tu 0km. De forma accesible y transparente, con cuotas en pesos y sin interés, en hasta 120 cuotas. </p>
                        <a 
                            href="https://organizacionsach.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {new Date().getFullYear()} &copy; Todos los derechos reservados Organización Sach.
                        </a>
                    </div>
                    <FooterList>
                        <h3>Seguinos!</h3>
                        <div className="flex gap-2">
                            <Link 
                                href="https://www.instagram.com/sach_usados/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiFillInstagram size={24}/>
                            </Link>
                            <Link 
                                href="https://wa.me/5491122502345?text=Hola!%20Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20un%20veh%C3%ADculo%20publicado%20en%20la%20web."
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaSquareWhatsapp size={24}/>
                            </Link>
                            <Link 
                                href="https://www.facebook.com/organizacionsach"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebookSquare size={24}/>
                            </Link>
                        </div>
                    </FooterList>
                </div>
            </Container>
        </footer>
     );
}
 
export default Footer;