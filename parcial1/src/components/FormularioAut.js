import React, { useState } from "react"
import { Route } from 'react-router-dom';
import "./FormularioAut.css"

function FormularioAut() {
    //const [nombreUsuario = setNombreUsuario] = useState('');
    //const [contraseña = setContraseña] = useState('');
    //const [error = setError] = useState('');
    //const historia = useHistory();

    return (
        <div className="container my-2">
        <div className="card mb-2">
          <div className="card-header">
            TuSegundazo.com
          </div>
        </div>
  




        <div className="card mb-2">
          <img src=".\Imagenes\112e3.jpg" className="card-img-top" alt="Fotico" />
        </div>
  
        <div className="card mb-2 mx-auto custom-card">
          <div className="card-body">
            <h5 className="card-title">Inicio de sesión</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Nombre de usuario</label>
                <input type="text" className="form-control" id="username" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <button type="submit" className="btn btn-primary">Ingresar</button>
              <button type="button" className="btn btn-danger">Cancelar</button>
            </form>
          </div>
        </div>
  




        <div className="card ">
          <div className="card-footer text-muted">
            Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo
          </div>
        </div>
      </div>
   );
}

export default FormularioAut;

