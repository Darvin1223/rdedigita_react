import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {Layout} from './../container/Layout';
import { ThemeProvider } from './../Context/ThemeContext';
import {Home} from './../views/Home/Home'; // Asegúrate de importar tus componentes correctamente

import { CategoriesNews } from '../views/CategoriesNews/CategoriesNews';
import { News } from '../views/News/News';
import {Opinion} from '../views/ElScout/Opinion';
import { Arteria } from '../views/Arteria/Arteria';
import { Intervista } from '../views/Intervista/Intervista';
import { Politica } from '../views/Politica/Politica';
import { ElMenaje } from '../views/ElMenaje/ElMenaje';
import { Economia } from '../views/Economia/Economia';
import { Paraiso } from '../views/Paraiso/Paraiso';
import { Farandula } from '../views/Farandula/Farandula';
import { ElChinazo } from '../views/ElChinazo/ElChinazo';
import { Ensamble } from '../views/Ensamble/Ensamble';
import { Prueba_news } from '../views/News/Prueba';
import { AllViews } from '../views/AllViews/AllViews';
 


function App() {
  const [categories,setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    // Realiza la solicitud sin procesar la respuesta
    fetch('https://api.rdedigital.com/api/v2/categories')
    .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false)
      })
      .catch((error) => {
        // Maneja cualquier error que pueda ocurrir durante la solicitud
        console.error('Error en la solicitud:', error);
      });
  }, []); 
  useEffect(() => {
    // Realiza la solicitud sin procesar la respuesta
    fetch('https://back.rdedigital.com/', {
      method: 'GET', // Puedes ajustar el método HTTP según tus necesidades
    })
      .then(() => {
        // La solicitud se completó con éxito, puedes agregar aquí cualquier lógica adicional si es necesario
        console.log('Solicitud exitosa');
      })
      .catch((error) => {
        // Maneja cualquier error que pueda ocurrir durante la solicitud
        console.error('Error en la solicitud:', error);
      });
  }, []); 
  if(isLoading){
    console.log("cargando")
  }else{

    console.log(categories)
  }
  return (

    <ThemeProvider>
 <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/news/:newsId" element={<News />} />
          <Route  path='/news/category/:nameCategorie' element={<CategoriesNews />} />
          {/* {categories.map((Element, index) => (
  <Route
    path={`/${Element.category_post}`}
    key={index}
    element={<AllViews status={false} categorie={Element.category_post} />}
  />
))} */}

          <Route path='/opinion'  element={<Opinion status={false} view={'Opinion'}/>}/>
          <Route path='/arteria'  element={<Arteria status={true} view={'Arteria'}/>}/>
          <Route path='/intervista'  element={<Intervista status={true} view={'Intervista'}/>}/>
          <Route path='/politica'  element={<Politica status={true} view={'Politica'}/>}/>
          <Route path='/el_menaje'  element={<ElMenaje status={true} view={'ElMenaje'}/>}/>
          <Route path='/economia'  element={<Economia status={true} view={'Economia'}/> }/>
          <Route path='/paraiso'  element={<Paraiso status={true} view={'Paraiso'}/>}/>
          <Route path='/farandula'  element={<Farandula status={true} view={'Farandula'}/>}/>
          <Route path='/chinazo'  element={<ElChinazo status={true} view={'El_Chinazo'}/>}/>
          <Route path='/ensamble'  element={<Ensamble status={true} view={'Ensamble'}/>}/>
        </Routes>
      </Layout>
    </Router>
    </ThemeProvider>
   
  );
}

export default App;
