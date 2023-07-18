import React, { useState } from 'react';
import { Breadcrumb, Card, Col, Form, FormGroup, Button , Popover, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { activeTypeServices } from "../Servicios/Services";
import { isEmpty } from 'lodash';

const Cotizar = () => {

  const [posts, setPosts] = useState<any>([]);
  
  React.useEffect(() => {
    const fetchService = async () => {
      let resp = await activeTypeServices();
      let posts2 = await resp?.['content'];
      setPosts(posts2)
    };
    if(isEmpty(posts)){
    fetchService();
  }
  }, [posts]);

  const hendlerSelect = (e:any)=>{
    console.log('Check',e.target.value)
  }


    return (
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
              <Breadcrumb.Item
                href={`${process.env.PUBLIC_URL}/nexos/ventasconfirmaciones`}
                className="breadcrumb-item tx-15"
              >
                INICIO
              </Breadcrumb.Item>

              <Breadcrumb.Item className="breadcrumb-item" aria-current="page">
                VENTAS
              </Breadcrumb.Item>
              <Breadcrumb.Item
                className="breadcrumb-item "
                active
                aria-current="page"
                href={`${process.env.PUBLIC_URL}/nexos/vistalistadocotizaciones`}
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
        <div className="text-center mt-5">
          <h1>
            {" "}
            <strong>PASO 1</strong>
          </h1>
          <h2>SELECCIONE EL SERVICIO QUE DESEA COTIZAR</h2>
        </div>

        <div className="row justify-content-center mt-5">
          <Col sm={12} md={12} lg={4} xl={4}>
            <Card>
              <Card.Header className=" pb-0">
                <p className=" card-title text-center fs-4">
                  Seleccione el tipo de cotizacion
                </p>
              </Card.Header>
              <Card.Body>
                <Col className=" mt-4 mt-xl-0 d-flex justify-content-start">
                  <FormGroup className="form-group ">
                    <div className="custom-controls-stacked">
                      <div>
                        {posts.map((post: any) => (
                          <div key={post.id}>
                            <Form.Label className="custom-control custom-radio custom-control-md">
                              <Form.Control
                                type="radio"
                                className="custom-control-input"
                                name="example-radios1"
                                value={post.id}
                                onChange={hendlerSelect}
                                // defaultChecked
                              />
                              <OverlayTrigger
                                trigger={["hover", "focus"]}
                                placement="right"
                                overlay={
                                  <Popover className="popover-primary">
                                    <Popover.Body style={{ margin: "0px" }}>
                                      {post.description}
                                    </Popover.Body>
                                  </Popover>
                                }
                              >
                                <span className="custom-control-label custom-control-label-md tx-17 px-3 ">
                                  {post.name}
                                </span>
                              </OverlayTrigger>
                            </Form.Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FormGroup>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div className="d-flex justify-content-end">
          <Link
            to={`${process.env.PUBLIC_URL}/nexos/cotizacionformulario/`}
            className="text-muted"
          >
            <Button variant="" className="btn me-5 mt-3 px-5 py-3 btn-primary">
              CONTINUAR
            </Button>
          </Link>
        </div>
      </div>
    );

}

Cotizar.propTypes = {};

Cotizar.defaultProps = {};

export default Cotizar;
