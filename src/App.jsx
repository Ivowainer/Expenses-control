import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarId } from './helpers/index'
import IconoNuevoGasto from './img/nuevo-gasto.svg';


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState([])

  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){

      const handleEditarGasto = () => {
        setModal(true)
    
        setTimeout(() => {
          setAnimarModal(true)
        }, 500)
      }

      handleEditarGasto()
    }
  }, [gastoEditar])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }


  const guardarGasto = gasto => {
    if(gasto.id) {
      //Actualizar
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setGastoEditar({})

    }else{
      //Nuevo gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id);

    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
      <>
        <main>
          <ListadoGastos 
            setGastoEditar={setGastoEditar}
            gastos={gastos}
            eliminarGasto={eliminarGasto}
          />
        </main>
        <div className="nuevo-gasto">
          <img 
            src={IconoNuevoGasto} 
            alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      </>
      )}

      {modal && <Modal 
                  guardarGasto={guardarGasto} 
                  setModal={setModal} 
                  animarModal={animarModal} 
                  setAnimarModal={setAnimarModal} 
                  gastoEditar={gastoEditar}
                  setGastoEditar={setGastoEditar}
                />}

    </div>
  )  
}

export default App
