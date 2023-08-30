import React from 'react';
import './Ensamble.scss';
const Ensamble = ({status,view}) => {
    return (
        <>
        {status ? (
            <section className={`${view}-View`}>
            </section>
        ) : (
            <section >
            </section>
        )}
     
        </>
    );
};

export {Ensamble};