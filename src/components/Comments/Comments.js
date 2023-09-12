import React, { useEffect, useState } from 'react';

const Comments = ({id}) => {
    const [comments,setCommens] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const API_URL = `https://api.rdedigital.com/api/v2/comments/${id}`;
    useEffect(()=>{
        fetch(API_URL)
        .then(response => response.json())
        .then((data)=>{
            setCommens(data);
            setIsLoading(false);
            
        })
        .catch(error =>{
            console.error(error)
            setIsLoading(false);
        })
    },[isLoading,API_URL]);

    // console.log(comments)
    
    return (
        <section className="comments_container">
        
        <section className="comments_content">

        </section>
      </section>
    );
};

export {Comments};