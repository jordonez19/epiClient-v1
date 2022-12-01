
import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
import { TextField } from '@mui/material';

const Confirmaciones = () => (
  <div>
    
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          {/*<span className="main-content-title mg-b-0 mg-b-lg-1">EMPTY PAGE</span>*/}
            <div className="main-img-user avatar-lg">
                <img
                    alt="avatar"
                    className="rounded-circle"
                    src={require("../../../assets/img/faces/6.jpg")}
                />
            </div>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Empty Page
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
        <div className='text-center mt-5'>
          <h1 >MODULO DE CONFIRMACIONES</h1>
        </div>


    {/* <!-- Modulo de search --> */}
    <div className='mt-5'>
    
        <Row className="row-sm">
            <Col sm={12} md={12} lg={4} xl={4}>
            <Card>
                <Card.Body className='mx-auto'>
                <TextField id="outlined-basic" helperText="Enter para buscar" label="Buscar por liente" variant="outlined" />
                </Card.Body>
            </Card>
            </Col>
            <Col sm={12} md={12} lg={4} xl={4}>
            <Card >
                <Card.Body className='mx-auto' >
                <TextField id="outlined-basic" helperText="Enter para buscar" label="Buscar por Nit" variant="outlined" />
                </Card.Body>
            </Card>
            </Col>
            <Col sm={12} md={12} lg={4} xl={4}>
            <Card className=" bg-danger text-white">
                <Card.Body>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
                </Card.Body>
            </Card>
            </Col>
        </Row>
      </div>
      {/* <!-- modulo de search --> */}

        
    </div>
);

Confirmaciones.propTypes = {};

Confirmaciones.defaultProps = {};

export default Confirmaciones;
