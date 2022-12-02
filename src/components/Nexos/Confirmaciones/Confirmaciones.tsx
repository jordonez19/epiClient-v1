
import React from 'react';
import dayjs from 'dayjs';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DatosTabla } from './../Funciones/Funciones'





const Confirmaciones = () => {

const [value, setValue] = React.useState(dayjs('2023-01-01T21:11:54'));
console.log(value)

const current = new Date();

const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


const handleChange = (newValue:any) => {
    setValue(newValue);
  };




return(
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
    
        <Row className="row-sm ">
            <Col sm={12} md={12} lg={4} xl={4}>
            <Card>
                <Card.Body className='mx-auto'>
                <TextField id="outlined-basic"  label="Buscar por cliente" variant="outlined" />
                </Card.Body>
            </Card>
            </Col>
            <Col sm={12} md={12} lg={4} xl={4}>
            <Card >
                <Card.Body className='mx-auto' >
                <TextField  id="outlined-basic"  label="Buscar por Nit" variant="outlined" />
                </Card.Body>
            </Card>
            </Col>
            <Col sm={12} md={12} lg={4} xl={4}>
            <Card >
                <Card.Body className='mx-auto'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker

                    label="Date mobile"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    
                />
                </LocalizationProvider>
                </Card.Body>
            </Card>
            </Col>
        </Row>
      </div>
      {/* <!-- modulo de search --> */}


      <div className="table-responsive container">
      <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">email</th>
            <th scope="col">Paso</th>
            <th scope="col">Fecha</th>
            </tr>
        </thead>
        <tbody>
            {DatosTabla().map(d =>(
              <tr key={d.id}>
                <th scope="row">{d.id}</th>
                <th>{d.nombre}</th>
                <th>{d.apellido}</th>
                <th>{d.email}</th>
                <th>{d.path}</th>
                <th>{date}</th>
                <th><input type="checkbox" /></th>
              </tr>
            ))}
        </tbody>
        </table>
    </div>    


      <div className='d-flex justify-content-end mt-5'>
    <Col sm={12} md={12} lg={4} xl={4}>
          <Card className='bg-primary text-center'>
            <Card.Body>
              <h5 className="card-title">¿Que se puede hacer?</h5>
              <h6 className="card-subtitle mb-2  ">Consejos</h6>
              <p className="card-text">
                At vero ducimus qui blanditiis leniti atque coret quas molestias
                excepturi sint similique sunt in culpa qui officia deserunt
                mollitia Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, quidem!
              </p>
              <Link to="#" className="card-link  font-weight-bold ">
                Card link
              </Link>
              
            </Card.Body>
          </Card>
        </Col>
    </div>
      

    </div>
    );
}

Confirmaciones.propTypes = {};

Confirmaciones.defaultProps = {};

export default Confirmaciones;
