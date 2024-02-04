import React from 'react'
import Footer from '../Componet/Footer'
import Header from '../Componet/Header'
import portafolio from '../Imag/Portafolio.png'
import { SiWhatsapp } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";



function Portafolio() {
  return (
    <>
   
    <Header/>   <br/>
   <h1 className='h1-bioe-por'> ¡Bienvenido a mi portafolio!  </h1>
   <br/>

   <figure className='figure-porta'>
    <img className='figure-img-porta' src={portafolio} alt="imagen de portada del portafolio"/>

   </figure>
   <div className='div-text-porta'>
          <p className='parafo-portafolio'>
          CJ CAMARA tiene para ofrecerle los siguientes servicion:
Instalacion de camaras
Configuracion de camaras 
Mantenimiento de camaras y mas.
Si deseas alguno de estos servicios ponte en contacto con nosotros, nos ajustamos a tu presupuesto y por supuesto te brindaremos la mejor asesoria de acuerdo a 
tu necesidad. ¿Qué esperas? ¡ contactanos YA!
          </p>
          <div className='conct-porf'>
            <SiWhatsapp size={60} color="#47C569"
            onClick= { () => window.open("https://api.whatsapp.com/send/?phone=+5731647982496&text=")} />

            &nbsp; &nbsp;
          
            <FaPhoneVolume className='faph' size={62} color="#47C569" 
            onClick ={ ()=>window.location=
              "tel:+5731647982496"}/>
            
         

          </div>
         
        </div>
    <Footer/>
    </>
  )
}

export default Portafolio