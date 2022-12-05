
import React from 'react';
import { Breadcrumb, Card, Col, Row, Button  } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';


import { DatosTablaCotizaciones } from './../Funciones/Funciones'

const VistaListadoCotizaciones = () => {


return(
  <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          {/*<span className="main-content-title mg-b-0 mg-b-lg-1">EMPTY PAGE</span>*/}
            <div className="main-img-user avatar-lg">
                <img
                    alt="avatar"
                    className="rounded-circle"
                    src={require("../../../assets/img/brand/logo-nexos2.png")}
                />
            </div>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15">
            <Link to={`${process.env.PUBLIC_URL}/nexos/ventasconfirmaciones`}>
              INICIO
              </Link>
            </Breadcrumb.Item>
            
            <Breadcrumb.Item
            
              className="breadcrumb-item"
              aria-current="page"
            >
              VENTAS
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              COTIZACIONES
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
        <div className='text-center mt-5'>
          <h1 >COTIZACIONES</h1>
        </div>


    {/* <!-- Modulo de search --> */}
    <div className='mt-5'>
        <Row className="row-sm ">
            <Col sm={12} md={12} lg={3} xl={3}>
            <Card>
                <Card.Body className='mx-auto'>
                <TextField id="outlined-basic"  label="Buscar por consecutivo" variant="outlined" />
                </Card.Body>
            </Card>
            </Col>
            <Col sm={12} md={12} lg={3} xl={3}>
            <Card >
                <Card.Body className='mx-auto' >
                <TextField  id="outlined-basic"  label="Buscar por conjunto" variant="outlined" />
                </Card.Body>
            </Card>
            </Col>
            <Col sm={12} md={12} lg={3} xl={3}>
            <Card >
                <Card.Body className='mx-auto' >
                <TextField  id="outlined-basic"  label="Buscar por Nit" variant="outlined" />
                </Card.Body>
            </Card>
            </Col>
            <Col sm={12} md={12} lg={3} xl={3}>
            <Card >
                <Card.Body className='mx-auto' >
                <Button variant='' className="btn py-3 px-5  me-2 btn-primary-light">
                    + Registrar Cliente
                </Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>

      </div>
      {/* <!-- modulo de search --> */}
      <div className="table-responsive container">
      <table className="table">
        <thead>
            <tr className='text-center'>
            <th scope="col">#</th>
            <th scope="col">Conjunto</th>
            <th scope="col">Nit</th>
            <th scope="col">Consecutivo</th>
            <th scope="col">Estado</th>
            <th scope="col">Ver</th>
            <th scope="col">Editar</th>
            <th scope="col">Nuevo</th>
            <th scope="col">Mas</th>
            </tr>
        </thead>
        <tbody>
            {DatosTablaCotizaciones().map(d =>(
              <tr key={d.id} className='text-center'>
                <th scope="row">{d.id}</th>
                <th>{d.conjunto}</th>
                <th>{d.nit}</th>
                <th>{d.consecutivo}</th>
                <th>{d.estado}</th>
                <th>
                    <a href="" >
                        <span className="material-icons md-36 md-dark" >&#xe873;</span>
                    </a>
                </th>
                <th>
                    <a href="" >
                        <span className="material-icons md-36 md-dark" >&#xe3c9;</span>
                    </a>
                </th>
                <th>
                    <a href="" >
                        <span className="material-icons md-36 md-dark" >&#xe148;</span>
                    </a>
                </th>
                <th>
                    <a href="" >
                        <span className="material-icons md-36 md-dark" >&#xe145;</span>
                    </a>
                </th>
            
              </tr>
            ))}
        </tbody>
        </table>
    </div>    

    </div>
    );
}

VistaListadoCotizaciones.propTypes = {};

VistaListadoCotizaciones.defaultProps = {};

export default VistaListadoCotizaciones;
