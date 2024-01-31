import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AdSimulator from '../Componet/AdSimulator';
import Footer from '../Componet/Footer'
import Header from '../Componet/Header'
import videoR from '../Videos/Diseño sin título.mp4'




function Home() {
 


  return (
    <>
      <Header/>
      <div className='home-div'>
        <img src='' alt=''/>
      </div>
      <div className="container">
        <h1 className='h1-bienve'>¡Bienvenido a nuestro sitio web!</h1>
        <div className='movie'>
          <video className='movie-vi' autoPlay loop muted>
            <source className='movie-sour' src={videoR} type="video/mp4" 
            controls/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='p-home'>
         <p>
         <p className='mi-p-home'> Mi  empresa llamada CJ CAMARA,
      </p> es un emprendimeinto ubicado en la Ciudad de Buenaventura desde 
      el año 2021, aquí ofrecemos fiferentes tipos de servicios sobre 
      camaras de seguridad. <Link to={'/portafolio'}>Más</Link>
         </p>
         <di className='div-beneficio'>
          <h1>¡Porque se debe instalar la camara de seguridad!</h1>
         
         </di>

          <ul class="two-columns">
          <li>Protección inmediata y constante.</li>
            <li>Detección temprana de posibles delitos o peligro.</li>
              <li>Apoyo a las autoridades si es requerido.</li>
              <li> La seguridad del espacio</li>
              <li> Mejorar el control sin invadir</li>
              <li>Tranquilidad en la ausencia </li>
</ul>

        </div>
        {/* <div className='publi'>
        <AdSimulator />
</div>
     */}
      </div>
      <Footer/>
    </>
  )
}

export default Home