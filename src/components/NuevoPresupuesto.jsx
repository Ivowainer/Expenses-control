const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra"> 
        <form className="formulario">
            <div className="campo">
                <label htmlFor="">Definir presupuesto</label>
                
                <input 
                    className="nuevo-presupuesto"
                    type="text" 
                    placeholder="Añade tu presupuesto"
                    /* onChange={ e => setPresupuesto(e.target.value)} */
                />
                
            </div>
            <input 
                type="submit" 
                value={presupuesto}
            />
        </form>
    </div>
  )
}

export default NuevoPresupuesto