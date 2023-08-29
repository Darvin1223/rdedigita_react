import React from 'react';

import './Arteria.scss';
const Arteria = ({ status, view }) => {
  return (
    <>
      {status ? (
        <section className={`${view}-View`}>
          {/* Contenido para cuando status es true */}
        </section>
      ) : (
        <section className={`${view}-View`}>
          {/* Contenido para cuando status es false */}
        </section>
      )}
    </>
  );
};

export { Arteria };
