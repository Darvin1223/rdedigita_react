import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {Layout} from './../container/Layout';
import {Home} from './../views/Home/Home'; // Asegúrate de importar tus componentes correctamente
 
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
