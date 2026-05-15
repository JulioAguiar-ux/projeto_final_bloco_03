import { Link } from 'react-router-dom'
import type Categoria from '../../../models/Categoria'

interface CardCategoriasProps {
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {

  return (
    <div className="border-2 border-green-700 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between">

      <div>

        <div className="bg-green-700 text-white py-4 px-6">
          <h2 className="text-2xl font-bold">
            {categoria.nome}
          </h2>
        </div>

        <div className="p-6">

          <p className="text-lg text-gray-700">
            {categoria.descricao}
          </p>

        </div>

      </div>

      <div className="flex">

        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="w-full text-slate-100 bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center py-3"
        >
          Editar
        </Link>

        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="text-slate-100 bg-red-600 hover:bg-red-700 w-full flex items-center justify-center py-3"
        >
          Deletar
        </Link>

      </div>

    </div>
  )
}

export default CardCategorias