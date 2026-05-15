import { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'

import {
  useNavigate,
  useParams
} from 'react-router-dom'

import type Categoria from '../../models/Categoria'
import api from '../../services/Services'

function FormCategoria() {

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

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement>
  ) {

    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    })
  }

  async function gerarNovaCategoria(
    e: ChangeEvent<HTMLFormElement>
  ) {

    e.preventDefault()

    try {

      if (id !== undefined) {

        await api.put('/categorias', categoria)

        alert('Categoria atualizada com sucesso!')

      } else {

        await api.post('/categorias', categoria)

        alert('Categoria cadastrada com sucesso!')
      }

      navigate('/categorias')

    } catch (error) {

      console.log(error)

      alert('Erro ao salvar categoria')
    }
  }

  return (
    <div className="container flex mx-auto items-center justify-center min-h-screen">

      <form
        className="flex flex-col w-1/2 gap-4 bg-white p-8 rounded-2xl shadow-xl"
        onSubmit={gerarNovaCategoria}
      >

        <h1 className="text-4xl text-center text-green-800 font-bold">

          {id ? 'Editar Categoria' : 'Cadastrar Categoria'}

        </h1>

        <div className="flex flex-col gap-2">

          <label
            htmlFor="nome"
            className="font-semibold"
          >
            Nome da Categoria
          </label>

          <input
            type="text"
            placeholder="Digite o nome"
            name="nome"
            className="border-2 border-green-700 rounded p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              atualizarEstado(e)
            }
          />

        </div>

        <div className="flex flex-col gap-2">

          <label
            htmlFor="descricao"
            className="font-semibold"
          >
            Descrição
          </label>

          <input
            type="text"
            placeholder="Digite a descrição"
            name="descricao"
            className="border-2 border-green-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              atualizarEstado(e)
            }
          />

        </div>

        <button
          className="rounded text-white bg-green-700 hover:bg-green-900 w-1/2 py-2 mx-auto font-semibold"
          type="submit"
        >

          {id ? 'Atualizar' : 'Cadastrar'}

        </button>

      </form>

    </div>
  )
}

export default FormCategoria