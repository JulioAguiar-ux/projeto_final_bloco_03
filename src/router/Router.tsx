import { Routes, Route } from 'react-router-dom'

import Home from '../componenentes/home/Home'
import ListaCategorias from '../componenentes/categorias/ListarCategorias'
import FormCategoria from '../componenentes/formcategoria/FormCategoria'

import DeleteCategoria from '../componenentes/deletarcategoria/DeleteCategoria'


function Router() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/categorias"
        element={<ListaCategorias />}
      />

      <Route
        path="/cadastrarCategoria"
        element={<FormCategoria />}
      />

      <Route
        path="/editarCategoria/:id"
        element={<FormCategoria />}
      />

      <Route
  path="/deletarCategoria/:id"
  element={<DeleteCategoria />}
/>

    </Routes>
  )
}

export default Router