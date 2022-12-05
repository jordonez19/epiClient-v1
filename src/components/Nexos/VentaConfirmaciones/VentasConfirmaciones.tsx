import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Card , Breadcrumb } from 'react-bootstrap'

export default class VentasConfirmaciones extends Component {
  render() {
    return (
      
  <div>
  {/* <!-- breadcrumb --> */}
  <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">MODULO DE CONFIRMACIONES</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Confirmaciones
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20 text-center card-hover ">
          <Card.Body className=" br-5 bd bd-danger">
          <Link to={`${process.env.PUBLIC_URL}/dashboard/dashboard-1`} className="text-muted">
          <img src={require("../../../assets/img/media/Comics.jpg")} className="w-100" alt="..."/>
          <h5 className="mg-b-10 mg-t-15 tx-18">Venta</h5>
          <h6>Adquirir un nuevo servicio</h6>
          </Link>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20 text-center card-hover">
          <Card.Body className=" br-5 bd bd-danger">
          <Link to={`${process.env.PUBLIC_URL}/dashboard/dashboard-2`} className="text-muted">
          <img src={require("../../../assets/img/media/Comics.jpg")} className="w-100" alt="..."/>
          <h5 className="mg-b-10 mg-t-15 tx-18">Confirmacion</h5>
          <h6>Rectificar un producto adquirido</h6>
          </Link>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
    </Row>
      </div>
    )
  }
}
