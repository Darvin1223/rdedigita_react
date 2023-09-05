import React from 'react'; 
import { Link } from 'react-router-dom';
import "./SocialMediaIcons.scss";
const SocialMediaIcons = () => {

    const socialMedias = [
        {element:"fa-brands fa-meta", className:"Facebookicon", url:"#"},
        {element:"fa-brands fa-instagram", className:"Instagramicon", url:"#"},
        {element:"fa-brands fa-x-twitter", className:"Xicon", url:"#"},
        {element:"fa-brands fa-youtube", className:"Youtubeicon", url:"https://www.youtube.com/channel/UCoNQaZF-AFNaFgPU1Y0anpw"},
        // {element:"fa-brands fa-linkedin-in", className:"Linkedinicon", url:"https://www.linkedin.com/in/rd%C3%A9-digital-35027a289/"},
    ];

    return (
        <ul className='Social_Media_Lists'>
        {socialMedias.map((element,index) =>(
            <Link key={index} to={element.url} className={element.className}> 
                <i className={element.element}></i>
            </Link>
        ))}
        </ul>
    );
};

export  {SocialMediaIcons};