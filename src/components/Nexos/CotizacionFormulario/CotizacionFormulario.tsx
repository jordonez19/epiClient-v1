import React, { useState } from 'react'
import { Breadcrumb, Row, Col, Card, Button, Modal, FormGroup, Form } from 'react-bootstrap'
import Select from 'react-select';
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material';
//import ModalFormulario from './ModalFormulario/ModalFormulario';
import { ciudadesColombia } from '../Funciones/Funciones';
import {
  CForm,
  CCol,
  CFormLabel,
  CFormFeedback,
  CFormInput,
  CButton,
} from "@coreui/react";

// Importaciones para el campo fecha 
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const CotizacionFormulario = () => {
  //Constante de valor acutal de fecha
  const defaultValue = new Date();
  //State de el campo fecha
  const [value, setValue] = useState<Dayjs | null>(dayjs(defaultValue));
  //
  const [nit, setNit] = useState('');
  const handlerNit = ((e: any) => {
    //If del handler para llamar la funcion de relleno a formulario
    if (e.target.value.length >= 5) {
      console.log('Se paso de los 5 caractares')
      console.log(data)
      llenar()
    }
    setNit(e.target.value)
  })

  //UseState de los datos del formularoi

  const [data, setData] = useState({
    "entidad": '',
    "correo1": '',
    "correo2": '',
    "correo3": '',
    "direccion": '',
    "ciudad": '',
    "unidad": '',
    'telefono1': '',
    'telefono2': '',
    'telefono3': '',
    'dirigir': ''

  })

  const handlerSelect = ((e: any) => {
    setData({ ...data, [e.name]: e.value })
  })

  const handlerFormulario = ((e: any) => {
    if (e.target.type === 'tel') {
      const resultPhone = e.target.value.replace(/\D/g, '');
      setData({ ...data, [e.target.name]: resultPhone })
    } else {
      setData({ ...data, [e.target.name]: e.target.value })
    }
  })

  const { entidad, correo1, correo2, correo3, direccion, ciudad, unidad, telefono1, telefono2, telefono3, dirigir } = data

  const llenar = (() => {
    const newArray = { entidad: 'Bosques Azules', correo1: 'Marisol_Milk@gomail.com', correo2: 'Carmensa_joda@gomail.com', correo3: 'Gildegart_Passion@gomail.com', direccion: 'Calle58 # 58 - 68', ciudad: 'Neiva', unidad: '1-52', telefono1: '1111111111', telefono2: '2222222222', telefono3: '3333333333', dirigir: 'Esperanza' }
    setData(newArray)


  })
  const [validatedCustom, setValidatedCustom] = useState(false);

  const handleSubmit = (event: any) => {
    setValidatedCustom(true);
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      console.log(data)
      console.log(value?.format('L'))
    }

  };

  //UseState para collapsar campos como telefonos y correos
  let [isFirstCollapsed, setisFirstCollapsed] = useState(false);
  let [isSecondCollapsed, setisSecondCollapsed] = useState(false);

  //Funciones para al momento de dar click se cambiaran los estados de visible o invisible
  let phones = () => {
    if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    } else if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    }
  };
  let emails = () => {
    if (isSecondCollapsed === true) {
      setisSecondCollapsed(false);
    } else if (isSecondCollapsed === false) {
      setisSecondCollapsed(true);
    }
  };


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
          <strong>PASO 2</strong>
        </h1>
        <h2>DATOS PARA SU COTIZACIÓN</h2>
      </div>
      |{/* <!-- Modulo de search --> */}
      <div className="mt-5">
        <Row className="row-sm justify-content-center">
          <Col sm={12} md={12} lg={8} xl={8}>
            <Card>
              <Card.Body className="mx-auto">
                <TextField
                  id="outlined-basic"
                  label="Buscar por Nit"
                  variant="outlined"
                  size="small"
                  value={nit}
                  onChange={handlerNit}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* <!--Formulario--> */}
        <div className="row">
          <Col lg={12} md={12}>
            <Card>
              <Card.Header>
                <h3 className="card-title text-center">FORMULARIO COTIZACIÓN</h3>
              </Card.Header>
              <Card.Body>
                <CForm
                  className="row g-3 needs-validation"
                  noValidate
                  validated={validatedCustom}
                  onSubmit={handleSubmit}
                >
                  <CCol md={5}>
                    <CFormLabel htmlFor="validationCustom01">Nombre de la entidad</CFormLabel>
                    <CFormInput
                      type="text"
                      id="validationCustom01"
                      name='entidad'
                      value={entidad}
                      onChange={handlerFormulario}
                      required
                    />
                  </CCol>

                  <CCol md={5} >
                    <CFormLabel htmlFor="validationCustom02">Correo</CFormLabel>
                    <div className='d-flex'>
                      <CFormInput
                        type="email"
                        id="validationCustom02"
                        name='correo1'
                        value={correo1}
                        onChange={handlerFormulario}
                        required
                      />


                    </div>
                    <CFormFeedback invalid>Campo Vacio!</CFormFeedback>


                  </CCol>


                  <CCol md={1} className='d-flex align-items-end' onClick={() => emails()}  >
                    <div>
                      <Row>
                        <span className="material-icons md-36 md-dark" >
                          &#xeff3;
                        </span>
                      </Row>
                    </div>
                  </CCol>

                  {isSecondCollapsed ? (
                    <CCol md={4}>
                      <div className="col">
                        <div
                          className=" multi-collapse"
                          id="multiCollapseExample1"
                        >

                          <FormGroup className="form-group">
                            <CFormLabel htmlFor="validationCustom03">Correo-2</CFormLabel>
                            <Form.Control name='correo2' onChange={handlerFormulario} value={correo2} type="email" />
                          </FormGroup>

                        </div>
                      </div>
                    </CCol>
                  ) : null}
                  {isSecondCollapsed ? (
                    <CCol md={4}>
                      <div className="col">
                        <div
                          className=" multi-collapse"
                          id="multiCollapseExample2"
                        >

                          <FormGroup className="form-group">
                            <CFormLabel htmlFor="validationCustom03">Correo-3</CFormLabel>
                            <Form.Control name='correo3' onChange={handlerFormulario} value={correo3} type="email" />
                          </FormGroup>

                        </div>
                      </div>
                    </CCol>
                  ) : null}





                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustom03">Direccion</CFormLabel>
                    <CFormInput type="text" id="validationCustom03" name='direccion' onChange={handlerFormulario} required value={direccion} />
                    <CFormFeedback invalid>Porfavor indica una direccion valida.</CFormFeedback>
                  </CCol>
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustom04">Ciudad</CFormLabel>

                    <Select
                      classNamePrefix="selectproduct"
                      onChange={handlerSelect}
                      options={ciudadesColombia()}
                      isSearchable
                      placeholder={ciudad}
                    />
                    <CFormFeedback invalid>Seleciona una ciudad</CFormFeedback>
                  </CCol>

                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustom03">Unidades</CFormLabel>
                    <CFormInput type="text" id="validationCustom03" name='unidad' onChange={handlerFormulario} value={unidad} required />
                    <CFormFeedback invalid>Porfavor provee una Unidad</CFormFeedback>
                  </CCol>

                  <CCol md={3}>
                    <CFormLabel htmlFor="validationCustom03">Telefono</CFormLabel>
                    <CFormInput type="tel" id="validationCustom03" name='telefono1' onChange={handlerFormulario} value={telefono1} required />
                    <CFormFeedback invalid>Porfavor provee un telefono</CFormFeedback>
                  </CCol>
                  <>
                    <CCol md={1} className='d-flex align-items-end' >
                      <div>
                        <Row>
                          <Col lg={6} md={6}>
                            <span className="material-icons md-36 md-dark " onClick={() => phones()}  >
                              &#xeff3;
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </CCol>


                    {isFirstCollapsed ? (
                      <CCol md={4}>
                        <div className="col">
                          <div
                            className=" multi-collapse"
                            id="multiCollapseExample1"
                          >

                            <FormGroup className="form-group">
                              <CFormLabel htmlFor="validationCustom03">Telefono-2</CFormLabel>
                              <Form.Control placeholder="Telefono-2" name='telefono2' onChange={handlerFormulario} value={telefono2} type="tel" />
                            </FormGroup>

                          </div>
                        </div>
                      </CCol>
                    ) : null}
                    {isFirstCollapsed ? (
                      <CCol md={4}>
                        <div className="col">
                          <div
                            className=" multi-collapse"
                            id="multiCollapseExample2"
                          >

                            <FormGroup className="form-group">
                              <CFormLabel htmlFor="validationCustom03">Telefono-3</CFormLabel>
                              <Form.Control placeholder="Telefono-3" name='telefono3' onChange={handlerFormulario} value={telefono3} type="tel" />
                            </FormGroup>

                          </div>
                        </div>
                      </CCol>
                    ) : null}

                  </>

                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustom03">Dirigir a</CFormLabel>
                    <CFormInput type="text" id="validationCustom03" name='dirigir' onChange={handlerFormulario} value={dirigir} required />
                    <CFormFeedback invalid>¿a quien va dirigido?</CFormFeedback>

                  </CCol>
                  <CCol md={4} className='d-flex align-items-end'>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        disablePast
                        label="Fecha de la asamblea"
                        openTo="month"
                        views={['year', 'month', 'day']}
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </CCol>

                  <CCol className=' d-flex justify-content-end mt-5'>
                    {/* <Link to={`${process.env.PUBLIC_URL}/nexos/serviciosacotizar`}> */}
                    <CButton color="primary" type="submit" >
                      Continuar
                    </CButton>
                    {/* </Link> */}
                  </CCol>
                </CForm>
              </Card.Body>
            </Card>
          </Col>
        </div>

      </div>
    </div>
  );
}

export default CotizacionFormulario