import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {Layout} from './../container/Layout';
import { ThemeProvider } from './../Context/ThemeContext';
import {Home} from './../views/Home/Home'; // Asegúrate de importar tus componentes correctamente

import { CategoriesNews } from '../views/CategoriesNews/CategoriesNews';
import { News } from '../views/News/News';
import {ElScout} from './../views/ElScout/ElScout';
import { Arteria } from '../views/Arteria/Arteria';
import { Intervista } from '../views/Intervista/Intervista';
import { Politica } from '../views/Politica/Politica';
import { ElMenaje } from '../views/ElMenaje/ElMenaje';
import { Economia } from '../views/Economia/Economia';
import { Paraiso } from '../views/Paraiso/Paraiso';
import { Farandula } from '../views/Farandula/Farandula';
import { ElChinazo } from '../views/ElChinazo/ElChinazo';
import { Ensamble } from '../views/Ensamble/Ensamble';
 
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
