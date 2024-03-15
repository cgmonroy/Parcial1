import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VehicleList = () => {
  return (
    <div className="container my-5">
      <div className="card mb-4">
        <div className="card-header">
          <h1 className="h3">TuSegundazo.com</h1>
        </div>
      </div>


      <div className="card mb-2">
          <img src="parcial1\src\Imagenes\112e3.PNG" className="card-img-top" alt="Fotico" />
        </div>


      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Marca</th>
            <th>Línea</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Renault</td>
            <td>Kangoo</td>
            <td>2017</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Renault</td>
            <td>Kangoo</td>
            <td>2017</td>
          </tr>
        </tbody>
      </table>

      <div className="text-center mt-5">
        Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo
      </div>
    </div>
  );
}

export default VehicleList;
