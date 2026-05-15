import { Link } from 'react-router-dom'
import { House, SquaresFour, PlusCircle } from "@phosphor-icons/react";

function Navbar() {
  return (
    <div className="w-full bg-green-700 text-white flex justify-center py-4 shadow-md">

      <div className="container flex justify-between items-center px-4">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-bold hover:text-green-200"
        >
          Farmácia Vida
        </Link>

        {/* Links */}

        <div className="flex gap-6 text-lg font-semibold">

         <Link
  to="/"
  className="hover:text-green-200 transition duration-300 flex items-center gap-2"
>
  <House size={24} />
  Home
</Link>

         <Link
  to="/categorias"
  className="hover:text-green-200 transition duration-300 flex items-center gap-2"
>
  <SquaresFour size={24} />
  Categorias
</Link>

          <Link
  to="/cadastrarCategoria"
  className="hover:text-green-200 transition duration-300 flex items-center gap-2"
>
  <PlusCircle size={24} />
  Cadastrar
</Link>

        </div>

      </div>

    </div>
  )
}

export default Navbar