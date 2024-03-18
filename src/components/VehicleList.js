import React, { useState } from 'react';
import { Container, Table, Row, Col, Card } from 'react-bootstrap';
import bannerImage from '../Banner.jpg';
import Traduccion from './Traduccion';
import API from './api';
import { useEffect } from 'react';


const VehicleList = () => {

    const [language] = useState('en');
    const t = Traduccion[language];

    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState(null); 

    useEffect(() => {
        const fetchVehicles = async () => {
          try {
            const response = await API.get('/cars');
            setVehicles(response.data);
          } catch (error) {
            console.error("Error fetching vehicles:", error);
          }
        };
    
        fetchVehicles();
      }, []);
    
/*       const fetchVehicleDetails = async (vehicleId) => {
        try {
          const response = await API.get(`/cars/${vehicleId}`);
          setSelectedVehicle(response.data);
        } catch (error) {
          console.error("Error fetching vehicle details:", error);
          setSelectedVehicle(null); 
        }
      }; */

/*     const vehicles = [
        { id: 1, marca: 'Renault', linea: 'Kangoo', modelo: '2017' },
        { id: 2, marca: 'Chevrolet', linea: 'Spark', modelo: '2018' },
        { id: 3, marca: 'Chevrolet', linea: 'Sail', modelo: '2016' },
        { id: 4, marca: 'Renault', linea: 'Sandero', modelo: '2020' },
        { id: 5, marca: 'Nissan', linea: 'March', modelo: '2019' },
        { id: 6, marca: 'Chevrolet', linea: 'Tracker', modelo: '2018' }]; */


    const handleRowClick = (vehicle) => {
        setSelectedVehicle(vehicle);
    };

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12}>
                        <h1 className="text-left" style={{ textShadow: '1px 1px 2px grey' }}>TuSegundazo.com</h1>
                        <img src={bannerImage} alt="Banner" style={{ width: '100%' }} />
                        <hr style={{ borderColor: '#ddd' }} />
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col md={8}>
                        <Table striped bordered hover>
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>#</th>
                                    <th>{t.Brand}</th>
                                    <th>{t.Line}</th>
                                    <th>{t.Model}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vehicles.map((vehicle, index) => (
                                    <tr key={vehicle.id} onClick={() => handleRowClick(vehicle)}>
                                        <td>{index + 1}</td>
                                        <td>{vehicle.marca}</td>
                                        <td>{vehicle.linea}</td>
                                        <td>{vehicle.modelo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={4}>
                        {selectedVehicle && (
                            <Card style={{ backgroundColor: '#f8f9fa' }}>
                                <Card.Body>
                                    <Card.Title className="text-center">{selectedVehicle.marca} {selectedVehicle.linea}</Card.Title>
                                    <div className="d-flex justify-content-center">
                                        <img src={selectedVehicle.imagen} alt={`Imagen de ${selectedVehicle.marca} ${selectedVehicle.linea}`} style={{ maxWidth: '100%', height: 'auto' }} />
                                    </div>
                                    <Card.Text>
                                        <p>→ {t.mileage}: {selectedVehicle.kilometraje}</p>
                                        <p>→ Color: {selectedVehicle.color}</p>
                                        <p>→ {t.reference}: {selectedVehicle.referencia}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Container>

            <footer className="text-center py-3" style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', backgroundColor: '#f8f9fa' }}>
                <p>{t.contactInfo}</p>
            </footer>
        </>
    );
};


export default VehicleList;









