import React from 'react'; 
import { Link } from 'react-router-dom';
import "./SocialMediaIcons.scss";
const SocialMediaIcons = () => {

    const socialMedias = [
        {element:"fa-brands fa-meta", className:"Facebookicon", url:"https://www.facebook.com/profile.php?id=100093289464970"},
        {element:"fa-brands fa-instagram", className:"Instagramicon", url:"https://www.instagram.com/rde.digital/"},
        {element:"fa-brands fa-x-twitter", className:"Xicon", url:"https://twitter.com/rdedigital"},
        {element:"fa-brands fa-youtube", className:"Youtubeicon", url:"https://www.youtube.com/channel/UCoNQaZF-AFNaFgPU1Y0anpw"},
        // {element:"fa-brands fa-linkedin-in", className:"Linkedinicon", url:"https://www.linkedin.com/in/rd%C3%A9-digital-35027a289/"},
    ];

    return (
        <ul className='Social_Media_Lists'>
        {socialMedias.map((element,index) =>(
            <Link key={index} to={element.url} target='_blank' className={element.className}> 
                <i className={element.element}></i>
            </Link>
        ))}
        </ul>
    );
};

export  {SocialMediaIcons};