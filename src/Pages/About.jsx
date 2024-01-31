import React from 'react'
import Footer from '../Componet/Footer'
import Header from '../Componet/Header'
import nosotro from '../Imag/acerca de.png'

function About() {
  return (
    <>
    <Header/>
    <div className="about">
        <h1 className='h1-Acer'>Acerca de Nosotros

        </h1>
        <br/>
        <figure className='figu-nostro'>
          <img className='img-nostro' src={nosotro} alt="Imagen de nosotros"/>
        </figure>
        <div className='div-text-nos'>
          <p className='parafo-nosotro'>
          Desde hace muchos años la seguridad de nuestros hogares, empresas,
           negocios y demas se han convertido en uno de las principales
            preocupaciones de nuestra vida diaria, por ello a partir de 
            esta necesidad se crea el emprendimiento CJ CAMARA para cuidar 
            todo lo que se consideras valioso para ti. 
Las camaras de seguridad permiten filmar y vigilar el lugar que desees, 
estas pueden funcionar con detectores de movimientos, permitiendo asi 
detectar delitos en tiempo real, ademas poseer camaras de vigilancia permite 
que los delicuentes piensen dos veces antes de atentas contra tu bien o inmueble.
          </p>

        </div>
        <div className='div-Mesange-h1-abo'>
<h1 className='Mesange-h1-abo'>
        !No te preocupes por tu seguridad aquí estamos para asesorarte¡
        </h1>

        </div>
        
    </div>
    <Footer/>
      
    </>
  )
}

export default About
