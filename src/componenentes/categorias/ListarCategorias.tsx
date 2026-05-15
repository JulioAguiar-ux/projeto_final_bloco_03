import { useEffect, useState } from 'react'

import type Categoria from '../../models/Categoria'
import api from '../../services/Services'

import CardCategorias from './cardcategorias/CardCategorias'

function ListaCategorias() {

  const [categorias, setCategorias] = useState<Categoria[]>([])

  async function buscarCategorias() {

    try {

      const resposta = await api.get('/categorias')

      setCategorias(resposta.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [])

  return (
    <div className="container mx-auto my-10">

      <h1 className="text-5xl text-center text-green-800 font-bold my-8">
        Categorias
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {categorias.map((categoria) => (
          <CardCategorias
            key={categoria.id}
            categoria={categoria}
          />
        ))}

      </div>

    </div>
  )
}

export default ListaCategorias