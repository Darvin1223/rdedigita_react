import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {Layout} from './../container/Layout';
import { ThemeProvider } from './../Context/ThemeContext';
import {Home} from './../views/Home/Home'; // Asegúrate de importar tus componentes correctamente

import { CategoriesNews } from '../views/CategoriesNews/CategoriesNews';
import { News } from '../views/News/News';
import {ElScout} from './../views/ElScout/ElScout';
import { Arteria } from '../views/Arteria/Arteria';
 
function App() {
  return (
    <ThemeProvider>
 <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/news/:newsId" element={<News />} />
          <Route  path='/news/category/:nameCategorie' element={<CategoriesNews />} />
          <Route path='/el_scout'  element={<ElScout status={true} view={'ElScout'}/>}/>
          <Route path='/arteria'  element={<Arteria status={true} view={'Arteria'}/>}/>
          <Route path='/intervista'  element={<ElScout status={true} view={'Intervista'}/>}/>
          <Route path='/politica'  element={<ElScout status={true} view={'Politica'}/>}/>
          <Route path='/el_menaje'  element={<ElScout status={true} view={'ElMenaje'}/>}/>
          <Route path='/economia'  element={<ElScout status={true} view={'Economia'}/> }/>
          <Route path='/paraiso'  element={<ElScout status={true} view={'Paraiso'}/>}/>
          <Route path='/farandula'  element={<ElScout status={true} view={'Farandula'}/>}/>
        </Routes>
      </Layout>
    </Router>
    </ThemeProvider>
   
  );
}

export default App;
