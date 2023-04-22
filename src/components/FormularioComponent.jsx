import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({});

    const conseguirDatosFormulario = (e) => {
        e.preventDefault();
        let datos = e.target;

        const usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value
        }
        console.log(usuario);

        setUsuario(usuario)
    }

    const cambiarDatos = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
    
  return (
    <div className="content">
      <h2>Formularios con React</h2>

      <form onSubmit={conseguirDatosFormulario}>
        <input type="text" placeholder="Nombre" name="nombre" onChange={cambiarDatos}/>
        <input type="text" placeholder="Apellido" name="apellido" onChange={cambiarDatos}/>
        <select name="genero" onChange={cambiarDatos}>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea placeholder="Escribe tu mensaje" name="bio" onChange={cambiarDatos}></textarea>
        <input type="submit" value="Enviar" />
      </form>

      {usuario.bio && usuario.bio.length >= 1 && (
        <div className="user_info label">
          {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su
          biografia es esta: {usuario.bio}
        </div>
      )}
    </div>
  );
}
