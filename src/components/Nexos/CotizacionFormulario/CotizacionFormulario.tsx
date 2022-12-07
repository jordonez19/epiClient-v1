import React , {useState} from 'react'
import { Breadcrumb, Row ,Col,Card,Button } from 'react-bootstrap'
import Select from 'react-select';
import { TextField } from '@mui/material';
import ModalFormulario from './ModalFormulario/ModalFormulario';
import { ciudadesColombia } from '../Funciones/Funciones';
import {
  CForm,
  CCol,
  CFormLabel,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CButton,
  CFormCheck,
} from "@coreui/react";


const CotizacionFormulario =() => {

  const optionCustom = [
    {
      value: "Choose...-1",
      label: "Choose...",
    },
    {
      value: "Mountain Time-2",
      label: "Mountain Time",
    },
    {
      value: "Wyoming-3",
      label: "Wyoming",
    },
    {
      value: "Utah-4",
      label: "Utah",
    },
    {
      value: "Montana-5",
      label: "Montana",
    },
    {
      value: "Colorado-6",
      label: "Colorado",
    },
    {
      value: "Mountain Time Zone-7",
      label: "Mountain Time Zone",
    },
    {
      value: "Wyoming-8",
      label: "Wyoming",
    },
  ];

  //custom validation
  const [Custom, setCustom] = useState("");

  const handleOnchangeCustom = () => {
    setCustom(Custom);
  };
  const [validatedCustom, setValidatedCustom] = useState(false);
  const handleSubmitCustom = (event:any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedCustom(true);
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
              <h3 className="card-title">Custom Validation</h3>
            </Card.Header>
            <Card.Body>
            <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validatedCustom}
      onSubmit={handleSubmitCustom}
    >
      <CCol md={5}>
        <CFormLabel htmlFor="validationCustom01">Nombre de la entidad</CFormLabel>
        <CFormInput
          type="text"
          id="validationCustom01"
          defaultValue=""
          required
        />
        <CFormFeedback invalid>Looks bad!</CFormFeedback>
      </CCol>
      <CCol md={5}>
        <CFormLabel htmlFor="validationCustom02">Correo</CFormLabel>
        <CFormInput
          type="text"
          id="validationCustom02"
          defaultValue=""
          required
        />
        <CFormFeedback invalid>Looks bad!</CFormFeedback>
      </CCol>
      <CCol md={2} className='d-flex align-items-end'>
        {/*<CFormLabel htmlFor="validationCustom02">Añadir mas correos</CFormLabel>*/}
        <div >
        <ModalFormulario></ModalFormulario>
        </div>

      </CCol>
      
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom04">City</CFormLabel>
       
        <Select
        classNamePrefix="selectproduct"
			onChange={handleOnchangeCustom}
			options={ciudadesColombia()}
			isSearchable
			placeholder="--Select--"
		  />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom05">City</CFormLabel>
        <CFormInput type="text" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={6}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
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