import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerImage from './Banner.jpg';
import VehicleList from './components/VehicleList';
import Traduccion from './components/Traduccion';
import API from './components/api';

const App = () => {
  const [language] = useState('en');
  const t = Traduccion[language];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/login', {
        login: username,
        password: password,
      });
      console.log(response.data.message); 
      setIsAuthenticated(true);
      setShowError(false);
    } catch (error) {
      console.log(error.response.data.message); 
      setIsAuthenticated(false);
      setShowError(true);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          isAuthenticated ?
            <Navigate replace to="/listado" /> :


            (
              <div className="d-flex flex-column min-vh-100">

                <Container className="flex-grow-1">

                  <Row className="justify-content-md-center">

                    <Col xs={12}>
                      <h1 className="text-left" style={{ textShadow: '1px 1px 2px grey' }}>TuSegundazo.com</h1>
                      <img src={bannerImage} alt="Banner" style={{ width: '100%' }} />
                      <hr style={{ borderColor: '#ddd' }} />
                    </Col>

                    <Col xs={12} md={6}>
                      <h2 className="text-center my-4">{t.loginTitle}</h2>
                      <Form onSubmit={authenticateUser} noValidate>

                        <Form.Group className="mb-3" controlId="InicioDeSesion">
                          <Form.Label style={{ fontWeight: 'bold' }}>{t.username}</Form.Label>
                          <Form.Control
                            type="text"
                            value={username}
                            isInvalid={showError}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ borderColor: showError ? 'red' : 'grey', boxShadow: 'none', borderRadius: '0' }}
                            className="bg-light"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Contrasena">
                          <Form.Label style={{ fontWeight: 'bold' }}>{t.password}</Form.Label>
                          <Form.Control
                            type="password"
                            value={password}
                            isInvalid={showError}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ borderColor: showError ? 'red' : 'grey', boxShadow: 'none', borderRadius: '0' }}
                            className="bg-light"
                          />
                        </Form.Group>

                        <Row className="mb-3">

                          <Col>
                            <Button variant="primary" type="submit" className="w-100" style={{ borderRadius: '0', fontWeight: 'bold' }}>
                              {t.loginButton}
                            </Button>
                          </Col>

                          <Col>
                            <Button variant="danger" type="button" className="w-100" style={{ borderRadius: '0', fontWeight: 'bold', color: 'black' }}>
                              {t.cancelButton}
                            </Button>
                          </Col>

                        </Row>

                        {showError && (
                          <div className="text-center text-danger mb-3">
                            {t.authenticationError}
                          </div>
                        )}
                      </Form>
                    </Col>

                  </Row>
                </Container>

                <footer className="text-center py-3 mt-auto" style={{ backgroundColor: '#f8f9fa' }}>
                  <p>{t.contactInfo}</p>
                </footer>
              </div>
            )


        } />
        <Route path="/listado" element={<VehicleList />} />
      </Routes>
    </Router>
  );
};

export default App;
