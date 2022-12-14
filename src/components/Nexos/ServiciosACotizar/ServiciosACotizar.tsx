import React from 'react';
import { Breadcrumb,Row,Col,Button} from 'react-bootstrap';
import Highcharts from '../../../assets/plugins/HighChart/highcharts.js'
import { Link } from 'react-router-dom'


const ServiciosACotizar = () => {
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
          <h1 > <strong>PASO 3</strong></h1>
          <h2>SELECCIONE LOS SERVICIOS A COTIZAR</h2>
      </div>

      <div id="container" style={{width:"100%",height:"400px"}}>
        
      </div>

      <Row>
        <Col>
        <div className='d-flex justify-content-end'>
        <Link to={`${process.env.PUBLIC_URL}/nexos/resumendeservicios`} className="text-muted">
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

export default ServiciosACotizar