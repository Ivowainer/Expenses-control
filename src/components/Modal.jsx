import { useState } from 'react'
import cerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const[nombre, setNombre] = useState('');
    const[cantidad, setCantidad] = useState('');
    const[categoria, setCategoria] = useState('');

    const handleOcultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 350)
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
            
            <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>Nuevo gasto</legend>

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input 
                        id='nombre'
                        type="text"
                        placeholder='Añade el nombre del Gasto'
                        onChange={e => setNombre(e.target.value)}
                        value={nombre}
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
                    value="Añadir gasto"
                />
            </form>
        </div>
    )
}

export default Modal