import React from 'react'

export const MyComponents = () => {

     const name= "NATHALIA";
     const repository= "https://github.com/nathalia1991";

     const student = {
     name: "Carlos",
     lastName: "Caro",
     mobile: "30000000",
     linkedinProfile: "https://www.linkedin.com/in/carlos-caro"
     }

  return (
    <div>
     <hr />
      <p>Este es mi primer componente</p>
      <h2>Temas de React</h2>
      <ul>
          <li>Componentes</li>
          <li>Eventos</li>
          <li>Estados- Hooks</li>
          <li>Comunicacion</li>
      </ul>
      <hr />
      <h2>Datos del docente</h2>
      <p>Nombre: { name }</p>
      <p>Repositorio:</p>
      <p>{ repository }</p>
     <hr />
     <h2>Datos del estudiante</h2>
        <p>Nombre: { student.name }</p>
        <p>Apellido: { student.lastName }</p>
        <p>Celular: { student.mobile }</p>
        <p>Perfil de LinkedIn:</p>
        <p>{ student.linkedinProfile }</p>
    </div>
  )
}
