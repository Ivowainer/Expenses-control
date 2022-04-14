import { useState, useEffect } from 'react'
import Mensaje from './Mensaje';
import cerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) => {

    const [mensaje, setMensaje] = useState('');

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, [])

    const handleOcultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
            setGastoEditar({})
        }, 500)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if([ nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 2000)
            return;
        }

        guardarGasto({nombre, cantidad, categoria, id, fecha})

        setNombre('')
        setCantidad('')
        setCategoria('')

        handleOcultarModal()
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={cerrarBtn} 
                    alt="cerrar modal" 
                    onClick={handleOcultarModal}
                />
            </div>
            
            <form 
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}
            >
                <legend>{gastoEditar.nombre ? 'Editar gasto' : 'Nuevo gasto'}</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input 
                        id='nombre'
                        type="text"
                        placeholder='Añade el nombre del Gasto'
                        onChange={e => setNombre(e.target.value)}
                        value={nombre}
                        autoComplete="off"
                    />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad Gasto</label>
                    <input 
                        id='cantidad'
                        type="number"
                        placeholder='Añade la cantidad del gasto, ej: 300'
                        onChange={e => setCantidad(Number(e.target.value))}
                        value={cantidad}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select 
                        id="categoria" 
                        onChange={e => setCategoria(e.target.value)} 
                        value={categoria}
                    >
                        <option value="">-- Seleccione</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input 
                    type="submit" 
                    value={gastoEditar.nombre ? 'Guardar Cambios' : 'Nuevo gasto'}
                />
            </form>
        </div>
    )
}

export default Modal