import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {Layout} from './../container/Layout';
import { ThemeProvider } from './../Context/ThemeContext';
import {Home} from './../views/Home/Home'; // Asegúrate de importar tus componentes correctamente

import { CategoriesNews } from '../views/CategoriesNews/CategoriesNews';
import { News } from '../views/News/News';
 
function App() {
  return (
    <ThemeProvider>
 <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/news/:newsId" element={<News />} />
          <Route  path='/news/category/:nameCategorie' element={<CategoriesNews />} />
        </Routes>
      </Layout>
    </Router>
    </ThemeProvider>
   
  );
}

export default App;
