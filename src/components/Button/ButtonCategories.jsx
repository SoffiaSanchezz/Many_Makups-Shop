import React from 'react'

const ButtonCategories = (props) => {
  return (
    <div>
          <button onClick={() => props.onCategoriaSeleccionada(null)}>Todos</button>
          <button onClick={() => props.onCategoriaSeleccionada("Labial")}>Labial</button>
          <button onClick={() => props.onCategoriaSeleccionada("Accesorios")}>Accesorios</button>
          <button onClick={() => props.onCategoriaSeleccionada("ojos")}>Ojos</button>
          <button onClick={() => props.onCategoriaSeleccionada("facial")}>Facial</button>
    </div>
  )
}

export default ButtonCategories