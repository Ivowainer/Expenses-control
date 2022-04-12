import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
{/* <> */}

    /* Valida numero de Presupuesto */
    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = e => {
        e.preventDefault()

        if(!presupuesto || presupuesto < 0){
            setMensaje('No es un presupuesto valido')

            return
        }
        setMensaje('')
        setIsValidPresupuesto(true)
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra"> 
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label htmlFor="">Definir presupuesto</label>
                    
                    <input 
                        className="nuevo-presupuesto"
                        type="text" 
                        placeholder="Añade tu presupuesto"
                        onChange={e => setPresupuesto(parseInt(e.target.value))}
                    />
                    
                </div>
                <input 
                    type="submit" 
                    value="Añadir"
                />
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto