import React from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Clases from "./pages/clases/Clases";
import Practicas from "./pages/practicas/Practicas";
import Teorias from "./pages/teorias/Teorias";
import Alumnos from "./pages/alumnos/Alumnos";
import Pagos from "./pages/pagos/Pagos";
import Facturas from "./pages/facturas/Facturas";
import Complementos from "./pages/complementos/Complementos";
import Clavesfacturacion from "./pages/clavesfacturacion/Clavesfacturacion";
import Unidadesmedida from "./pages/unidadesmedida/Unidadesmedida";
import Metodospago from "./pages/metodospago/Metodospago";
import Users from "./pages/users/Users";
import Maestros from "./pages/maestros/Maestros";
import Cargousuarios from "./pages/cargousuarios/Cargousuarios";
import Cursos from "./pages/cursos/Cursos";
import Horarios from "./pages/horarios/Horarios";
import Auth from "./auth/Auth";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={ <Auth />} />
          <Route path="escritorio/" element={
            <Dashboard 
              header={'Escritorio'}
              descripcion={'Sistema de Administración Escuela de Manejo del Sol'}
            />
          } />
          <Route path="clases/*" element={
            <Clases
              header={'Clases'} 
              descripcion={'Administración de clases de manejo'}
            />
          } />
          <Route path="practicas/*" element={
            <Practicas 
              header={'Practicas'} 
              descripcion={'Horarios de prácticas de manejo'}
            />
          } />
          <Route path="teorias/*" element={
            <Teorias 
              header={'Teorías'} 
              descripcion={'Horarios de teorías de manejo'}
            />
          } />
          <Route path="alumnos/*" element={
            <Alumnos 
              header={'Alumnos'} 
              descripcion={'Administración de alumnos'}
            />
          } />
          <Route path="pagos/*" element={
            <Pagos 
              header={'Pagos'} 
              descripcion={'Administración de pagos'}
            />
          } />
          <Route path="facturas/*" element={
            <Facturas 
              header={'Facturas'} 
              descripcion={'Creación y cancelación de facturas'}
            />
          } />
          <Route path="complementos/*" element={
            <Complementos 
              header={'Complementos de Pago'} 
              descripcion={'Creación y cancelación de complementos de pago'}
            />
          } />
          <Route path="clavesfacturacion/*" element={
            <Clavesfacturacion 
              header={'Claves de Facturación'} 
              descripcion={'Administración de claves de facturacion'}
            />
          } />
          <Route path="unidadesmedida/*" element={
            <Unidadesmedida 
              header={'Unidades de Medida'} 
              descripcion={'Administración de unidades de medida'}
            />
          } />
          <Route path="metodospago/*" element={
            <Metodospago 
              header={'Métodos de Pago'} 
              descripcion={'Administración de métodos de pago'}
            />
          } />
          <Route path="users/*" element={
            <Users 
              header={'Usuarios'} 
              descripcion={'Administración de usuarios'}
            />
          } />
          <Route path="maestros/*" element={
            <Maestros 
              header={'Maestros'} 
              descripcion={'Administración de maestros'}
            />
          } />
          <Route path="cargousuarios/*" element={
            <Cargousuarios 
              header={'Cargo de Usuarios'} 
              descripcion={'Administración de los cargos de los usuarios'}
            />
          } />
          <Route path="cursos/*" element={
            <Cursos 
              header={'Cursos'} 
              descripcion={'Administración de cursos'}
            />
          } />
          <Route path="horarios/*" element={
            <Horarios 
              header={'Horarios'} 
              descripcion={'Administración de horarios'}
            />
          } />
          <Route path="login/*" element={
            <Auth />
          } />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
