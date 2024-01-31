import React, { useState } from 'react';

const AdSimulator = () => {
  const [showAd, setShowAd] = useState(false);

  const simulateAd = () => {
    // Mostrar el anuncio durante 3 segundos. 3000 este si le pone un cero cambia 
    setShowAd(true);
    setTimeout(() => {
      setShowAd(false);
    }, 10000);
  };

  return (
    <div>
      <h1>Simulador de Anuncios</h1>
      <button onClick={simulateAd}>Mostrar Anuncio</button>

      {showAd && (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
          <img
            src="https://example.com/ad-image.jpg"
            alt="Ad Image"
            style={{ border: '1px solid #ccc', padding: '10px', width: '300px', height: '250px' }}
          />
        </div>
      )}
    </div>
  );
};

export default AdSimulator;