import React from 'react';
import './ElMenaje.scss';
const ElMenaje = ({ status, view }) => {
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

export {ElMenaje};