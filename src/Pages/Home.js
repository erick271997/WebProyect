import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdSimulator from '../Componet/AdSimulator';
import Footer from '../Componet/Footer';
import Header from '../Componet/Header';
import videoR from '../Videos/Diseño sin título.mp4';
import { useMediaQuery } from 'react-responsive';

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 320 });

  return (
    <div className='container-home'>
      <Header />
      <div className="home-div">
        <img src="" alt="" />
      </div>
      <div className="container">
      <p className='bienvenido'>¡Bienvenido a nuestro sitio web!</p>
        <div className="movie">
          <video className="movie-vi" autoPlay loop muted>
            <source className="movie-sour" src={videoR} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-home">
          <p>
            <p className="mi-p-home">
              Mi empresa llamada CJ CAMARA,
            </p>
            es un emprendimeinto ubicado en la Ciudad de Buenaventura desde el
            año 2021, aquí ofrecemos fiferentes tipos de servicios sobre
            camaras de seguridad.{' '}
            <Link to={'/portafolio'}>Más</Link>
          </p>
          <div className="div-beneficio">
            <h1>¡Porque se debe instalar la camara de seguridad!</h1>
          </div>

          <ul className="two-columns">
            <li>Protección inmediata y constante.</li>
            <li>Detección temprana de posibles delitos o peligro.</li>
            <li>Apoyo a las autoridades si es requerido.</li>
            <li>La seguridad del espacio</li>
            <li>Mejorar el control sin invadir</li>
            <li>Tranquilidad en la ausencia</li>
          </ul>
        </div>
        {/* <div className='publi'>
        <AdSimulator />
</div>
     */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;