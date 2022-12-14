import React from 'react';
import { Breadcrumb} from 'react-bootstrap';

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
    </div>
  )
}

export default ServiciosACotizar