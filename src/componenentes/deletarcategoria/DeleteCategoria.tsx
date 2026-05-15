import { useEffect, useState } from 'react'

import {
  useNavigate,
  useParams
} from 'react-router-dom'

import type Categoria from '../../models/Categoria'
import api from '../../services/Services'

function DeleteCategoria() {

  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: '',
  })

  async function buscarPorId(id: string) {

    try {

      const resposta = await api.get(`/categorias/${id}`)

      setCategoria(resposta.data)

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {

    if (id !== undefined) {
      buscarPorId(id)
    }

  }, [id])

  async function deletarCategoria() {

    try {

      await api.delete(`/categorias/${id}`)

      alert('Categoria apagada com sucesso!')

    } catch (error) {

      console.log(error)

      alert('Erro ao apagar categoria')
    }

    navigate('/categorias')
  }

  return (
    <div className="container mx-auto w-1/3 my-10">

      <h1 className="text-4xl text-center my-4">
        Deletar Categoria
      </h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza que deseja apagar a categoria:
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">

        <header className="py-2 px-6 bg-red-600 text-white font-bold text-2xl">
          Categoria
        </header>

        <p className="p-8 text-3xl bg-slate-200 h-full">
          {categoria.nome}
        </p>

        <div className="flex">

          <button
            className="text-slate-100 bg-gray-500 hover:bg-gray-700 w-full py-2"
            onClick={() => navigate('/categorias')}
          >
            Não
          </button>

          <button
            className="w-full text-slate-100 bg-red-600 hover:bg-red-800 py-2"
            onClick={deletarCategoria}
          >
            Sim
          </button>

        </div>

      </div>

    </div>
  )
}

export default DeleteCategoria