import React, { useEffect, useState } from 'react';

const Currency = ({ bank }) => {
  const [currencyData, setCurrencyData] = useState([]);
  const [status, setStatus] = useState('loading');
  let Buy;
  let Sell;
  const API = `https://api.indexa.do/api/rates?bank=${bank}`;

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyData(data);
        setStatus('loaded');
      })
      .catch((error) => {
        setStatus('error');
        console.error(`Error fetching currency Data: ${error}`);
      });
  }, []);

  // Verificar si currencyData.data existe antes de mapearlo
  if (currencyData.data && currencyData.data.length > 0) {
    currencyData.data.forEach((element) => {
      if (element.currency === "USD") {
        if (element.type === "buy") {
          Buy = element.rate;
        } else {
          Sell = element.rate;
        }
      }
    });
  }

  return (
    <>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error loading data</p>}
      {status === 'loaded' && (
        <p className='currency'><span>Compra:</span> {Buy} DOP <span>/</span> <span>Venta:</span>{Sell} DOP</p>
      )}
    </>
  );
};

export { Currency };
