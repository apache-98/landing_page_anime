
import './App.css'
import images from './assets/images'
import { Header } from './Components/Header.jsx'
import { Button } from './Components/Button.jsx'
import { Formulario } from './Components/Formulario.jsx'
import { StarYellow } from "./Components/StarYellow.jsx"
import { ButtonRef } from './Components/ButtonRef.jsx'
import Footer from './Components/Footer.jsx'


function App() {


  return (
    <>

      <div className="relative h-screen bg-[url('/assets/11.jpg')] bg-cover bg-center h-screen w-full shadow-xl/30 ...">
        <Header />
        <div className='ml-12 absolute bottom-[140px] left-[100px]'>
          <Button text={"Click para Ver"} />
        </div>
        <div className='ml-12 absolute bottom-[140px] left-[300px]'>
          <Button text={"Click para Descargar"} />
        </div>
      </div>
      <div className='h-screen bg-gray-800 flex flex-col md:flex-row justify-between p-6 py-10'>
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 mb-4 md:mb-0">
        <h2 className='pb-8 text-white'>Season1 | 2024</h2>
          <h1 className="text-white text-2xl font-bold mb-2">SOLO LEVELING</h1>
          <div className='mb-4'>
            <StarYellow/>
          </div>
          <div  className="space-x-4 mb-4">
            <ButtonRef text={"Action"}/>
            <ButtonRef text={"Adventure"}/>
            <ButtonRef text={"Fantasy"}/>
          </div>
          
          <p className="text-white mb-16 ">
            En un mundo donde portales conectan la Tierra con dimensiones llenas de monstruos, ciertos humanos conocidos como cazadores reciben poderes para combatir estas amenazas. Entre ellos está Sung Jin-Woo, el cazador más débil de todos. Sin embargo, tras sobrevivir a una misteriosa mazmorra doble, Jin-Woo obtiene el poder de un sistema que lo permite subir de nivel sin límites. Así comienza su ascenso imparable desde la humillación hasta convertirse en el cazador más fuerte del mundo. ¿Hasta dónde llegará su poder?
          </p>
          <div ><Button text={"Click para ver"}/></div>
        </div>

        {/* Imagen a la derecha */}
        <div className="md:w-1/2 p-12 py-10">
          <Formulario/>
          <div className=' flex justify-center mt-12 '>
            <Button text={"Registrarme"}/>
          </div>
          
        </div>
      </div>
      <Footer/>
      



    </>
  )
}

export default App
