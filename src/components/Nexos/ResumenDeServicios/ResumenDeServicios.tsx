import React from 'react';
import { Breadcrumb, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

import { DatosTablaCotizaciones } from './../Funciones/Funciones'

const ResumenDeServicios = () => {
    return (
        <div>
        
          {/* <!-- breadcrumb --> */}
          <div className="breadcrumb-header justify-content-between">
          <div className="left-content">
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
                <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
                  INICIO
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  className="breadcrumb-item "
                  active
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
                <Breadcrumb.Item
                  className="breadcrumb-item "
                  active
                  aria-current="page"
                >
                  NUEVO
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          {/* <!-- /breadcrumb -->*/}
    
         <div className='text-center mt-5'>
              <h1 > <strong>PASO 4</strong></h1>
              <h2>ITEMS SELECCIONADOS</h2>
            </div>
        
    {/* <!-- modulo de search --> */}
    <div className='container'>
        <Row className='d-flex text-center'>
            <Col sm={10} className='px-0'>
                <div className="table-responsive container">
                <table className="table">

                    <thead className='bg-primary bg-gradient' >
                        <tr className='text-center'>
                        <th scope="col">#</th>
                        <th scope="col">Nombre Item</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Ver</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DatosTablaCotizaciones().map(d =>(
                        <tr key={d.id} className='text-center'>
                            <th scope="row">{d.id}</th>
                            <th>{d.conjunto}</th>
                            <th>{d.nit}</th>
                            <th>{d.consecutivo}</th>
                            <th>
                                <Link to={'#'}>
                                    <span className="material-icons md-36 md-dark" >&#xe873;</span>
                                </Link>
                            </th>
                        
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </Col>
            <Col sm={2} >
                <Link to={`${process.env.PUBLIC_URL}/nexos/cotizacionformulario/`} className="text-muted">
                <Button variant="" className="btn me-5  px-5 py-3 btn-primary">
                    CONTINUAR
                </Button>
                </Link>
            </Col>
        </Row>
    </div>
    <Row>
        <Col>
        <div className='d-flex justify-content-end'>
        <Link to={`${process.env.PUBLIC_URL}/nexos/cotizacionformulario/`} className="text-muted">
          <Button variant="" className="btn me-5 mt-3 px-5 py-3 btn-primary">
            CONTINUAR
          </Button>
        </Link>
      </div>
        </Col>
    </Row>   

        </div>
        
      )
}

export default ResumenDeServicios