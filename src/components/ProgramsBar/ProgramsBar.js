import React from 'react';
import { Link } from 'react-router-dom';
import {SocialMediaIcons} from "../SocialMediaIcons/SocialMediaIcons";

import "./ProgramsBar.scss";
const ProgramsBar = () => {

    const programs = [
        {
            "id": 1,
            "name": "Intervista",
            "url": "/intervista"
        },
        {
            "id": 2,
            "name": "El Chinazo",
            "url": "/elchinazo"
        },
        {
            "id": 3,
            "name": "Paraíso",
            "url": "/paraiso"
        },
        {
            "id": 4,
            "name": "Peso Oro",
            "url": "/peso-oro"
        },
        {
            "id": 5,
            "name": "Ensamble Etéreo",
            "url": "/ensamble-etereo"
        },
        {
            "id": 6,
            "name": "El Scout",
            "url": "/el-scout"
        },
        {
            "id": 7,
            "name": "El Menaje",
            "url": "/el-menaje"
        },
    ]

    console.log(programs);
    return (
        <section className='programs_container desktop'>
        <section className='programs_container-section'>

        <ul>
            {programs.map((element, index) => (
                <li key={index}>
                    <Link to={`${element.url}`}>{element.name}</Link>
                </li>
            ))}
        </ul>
        <SocialMediaIcons />
        </section>
        </section>
    );
};

export { ProgramsBar };
