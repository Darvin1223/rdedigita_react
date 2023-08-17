import React from 'react';

const Btn = (props) => {
    return (
       <React.Fragment>
        <a href={props.url} className='btn-link'>
            <button className='btn'>{props.text}</button>
        </a>
       </React.Fragment>
    );
};

export default Btn;