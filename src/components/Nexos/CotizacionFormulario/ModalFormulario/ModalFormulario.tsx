import React from 'react'
import { Breadcrumb, Button, Card, Col, Dropdown, Form, FormGroup, Row, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ModalFormulario =() =>
{
    const [show, setShow] = React.useState(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Row>
            <Col lg={6} md={6}>
                <span className="material-icons md-36 md-dark"  onClick={handleShow}>
                &#xeff3;
                </span>
                <Modal show={show}>
                    <Modal.Body className="modal-body pd-sm-40">
                    <Button
                        onClick={() => setShow(false)}
                        className="close pos-absolute t-15 r-20 tx-26"
                        variant=""
                    >
                        x
                    </Button>
                    <div className='text-center'>
                        <h5 className="modal-title mg-b-5">Correos</h5>
                        <p className="mg-b-20">
                            Se pueden ingresar maximo 3 correos
                        </p>
                    </div>
                    <FormGroup className="form-group">
                        <Form.Control placeholder="Email-1" type="text" />
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Form.Control placeholder="Email-2" type="text" />
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Form.Control placeholder="Email-3" type="text" />
                    </FormGroup>
                    <Button
                        variant=""
                        className="btn btn-primary btn-block"
                        onClick={() => setShow(false)}
                    >
                        Continue
                    </Button>
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    </div>

  )
}

export default ModalFormulario