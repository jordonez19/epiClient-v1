import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { TextField } from '@mui/material';
import { Breadcrumb, Card, Col, Row, Button } from 'react-bootstrap';
import { modalGlobal } from '../Funciones/Funciones';
import {
    CFormLabel,
    CFormInput,
} from "@coreui/react";
import { isEmpty } from 'lodash';
import { PostCreateServices,PutCreateServices } from '../Servicios/Services';


function CreateServiceCotizar(props: any) {
    const location = useLocation()
    const model = {id: 0,name: "",status_id: "",description: ""}

    const [data, setData] = useState<any>(model)

    useEffect(() => {
        if(location.state!=null) {
            console.log(location.state)
            setData(location.state)
            location.state = null
            
        }else{     
        }


    }, [data, location, location.state]);

    const changeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const sendData = async () => {

        if (data.id === 0 && !isEmpty(data.name) && data.status_id !== '' && !isEmpty(data.description)) {
            PostCreateServices(data);
                let message = 'El nuevo servicio a sido creado correctamente'
                let icon = 'success'
                let title = 'Servicio Creado'
                modalGlobal(title,message,icon)
                setData(model)
        } else {
            if(!isEmpty(data.name) && data.status_id !== '' && !isEmpty(data.description)){
            PutCreateServices(data);
                let message = 'La edicion del servicio ha sido exitoso'
                let icon = 'success'
                let title = 'Servicio Editado'
                modalGlobal(title,message,icon)
                setData(model)
            }else{
                let message = 'Los datos para enviar no estan completos'
                let icon = 'error'
                let title = 'Falta Datos'
                modalGlobal(title,message,icon)
            }
            
        }

    }
    const { name, description } = data;

    return (
        <div>{/* <!-- breadcrumb --> */}
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
                            CREAR COTIZACIÓN
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="text-center mt-5">
                <h2>CREAR SERVICIO</h2>
            </div>
            <div className='mt-4'>
                <Row className="row-sm justify-content-center">
                    <Col sm={12} md={12} lg={4} xl={4}>
                        <Card>
                            <Card.Body className="mx-5">
                                <CFormLabel className='text-center font-weight-bold' htmlFor="validationCustom01">NOMBRE DEL SERVICIO</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="validationCustom01"
                                    placeholder='Indique el nombre'
                                    name='name'
                                    value={name}
                                    onChange={changeHandler}
                                    required
                                />

                                <Row className="justify-content-center mt-5">
                                    <Col sm={12} md={12} lg={12} xl={12}>
                                    <CFormLabel className='text-center font-weight-bold' htmlFor="validationCustom01">DESCRIPCIÓN</CFormLabel>
                                        <TextField
                                            id="outlined-basic"
                                            label="Indique la descripción"
                                            
                                            variant="outlined"
                                            name='description'
                                            value={description}
                                            onChange={changeHandler}
                                            multiline={true}
                                            fullWidth={true}
                                        />
                                    </Col>
                                </Row>
                                <div className='mt-4'>
                                <CFormLabel className='text-center font-weight-bold' htmlFor="validationCustom01">ESTADO</CFormLabel>
                                    <div className="group-btn">
                                        <Row className='d-flex flex-row justify-content-around mt-4'>
                                            <Col sm={12} md={12} lg={12} xl={12} className='form-check form-check-inline justify-content-around'>
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="status_id"
                                                    id="btnradio21"
                                                    value={1}
                                                    checked={data.status_id==='1'||data.status_id===1?true:false}
                                                    onChange={changeHandler}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="btnradio21"
                                                >
                                                    ACTIVO
                                                </label>
                                                &emsp;
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="status_id"
                                                    id="btnradio22"
                                                    value={0}
                                                    
                                                    checked={data.status_id==='0'||data.status_id===0?true:false}
                                                    onChange={changeHandler}
                                                    
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="btnradio22"
                                                >
                                                    INACTIVO
                                                </label>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col>
                    <div className='d-flex justify-content-end'>
                        <Button onClick={sendData} className="btn me-5 mt-3 px-5 py-3 btn-primary">
                            CONTINUAR
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );

}

CreateServiceCotizar.propTypes = {}

CreateServiceCotizar.defaultProps = {};

export default CreateServiceCotizar
