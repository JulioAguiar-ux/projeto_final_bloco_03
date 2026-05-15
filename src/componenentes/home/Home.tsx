
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-green-50 min-h-screen flex justify-center items-center">
      
      <div className="container grid grid-cols-1 md:grid-cols-2 text-green-900">
        
        <div className="flex flex-col justify-center gap-4 p-8">
          
          <h2 className="text-5xl font-bold">
            Sua saúde em primeiro lugar
          </h2>

          <p className="text-xl">
            Medicamentos, cosméticos e cuidados para toda família.
          </p>

          <Link
  to="/categorias"
  className="bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
>
  Ver Produtos
</Link>

        </div>

        <div className="flex justify-center">
          <img
            src="https://ik.imagekit.io/devstorage/pharmacy.png"
            alt="Farmácia"
            className="w-2/3"
          />
        </div>

      </div>

    </div>
  )
}

export default Home