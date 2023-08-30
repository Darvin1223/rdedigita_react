import React from 'react';
import  './Politica.scss';
const Politica = ({ status, view }) => {
    return (
        <>
        {status ? (
          <section className={`${view}-View`}>
            {/* Contenido para cuando status es true */}
          </section>
        ) : (
          <section >
            {/* Contenido para cuando status es false */}
          </section>
        )}
      </>
    );
};

export {Politica};