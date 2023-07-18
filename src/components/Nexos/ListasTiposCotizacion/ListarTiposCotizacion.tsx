import React, { useState } from 'react';
import { Breadcrumb, Card, Col, Row, Button  } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';
import { GetAllServices } from '../Servicios/Services';
import { isEmpty } from 'lodash';

function ListarTiposCotizacion() {
    const [posts, setPosts] = useState<any>([]);
    const [filteredList, setFilteredList] = useState(posts);


    React.useEffect(() => {
        const fetchService = async () => {
          let resp = await GetAllServices();
          let posts2 = await resp?.['content'];
          setPosts(posts2)
          setFilteredList(posts2)
        };
        if(isEmpty(posts)){
        fetchService();
      }
      }, [posts]);


      const filterBySearch = (event:any) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        let updatedList = [...posts];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
          return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
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
                  <Breadcrumb.Item href={`${process.env.PUBLIC_URL}/nexos/ventasconfirmaciones`} className="breadcrumb-item tx-15">
                    INICIO
                  </Breadcrumb.Item>
                  
                  <Breadcrumb.Item
                  
                    className="breadcrumb-item"
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
                </Breadcrumb>
              </div>
            </div>
              <div className='text-center mt-5'>
                <h1 >COTIZACIONES</h1>
              </div>
      
      
          {/* <!-- Modulo de search --> */}
          <div className='mt-5'>
              <Row className="row-sm d-flex justify-content-around">
                  <Col sm={12} md={12} lg={3} xl={3} className=''>
                  <Card>
                      <Card.Body className='mx-auto'>
                      <TextField id="outlined-basic"  label="Buscar servicio" variant="outlined" onChange={filterBySearch}/>
                      </Card.Body>
                  </Card>
                  </Col>
                  <Col sm={12} md={12} lg={3} xl={3}>
                  <Card >
                      <Card.Body className='mx-auto' >
                        <Link to={`${process.env.PUBLIC_URL}/nexos/createservicecotizar`}>
                      <Button variant='' className="btn py-3 px-5  me-2 btn-primary-light">
                          + Registrar Cliente
                      </Button>
                      </Link>
                      </Card.Body>
                  </Card>
                  </Col>
              </Row>
      
            </div>
            {/* <!-- modulo de search --> */}
            <div className="table-responsive container">
            <table className="table">
              <thead className='bg-primary bg-gradient'>
                  <tr className='text-center'>
                  {/* <th scope="col">#</th> */}
                  <th scope="col">Conjunto</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Editar</th>
                  
                  </tr>
              </thead>
              <tbody>
                  {filteredList.map((post:any) =>(
                    <tr key={post.id} className='text-center'>
                      {/* <th scope="row">{d.id}</th> */}
                      <th>{post.name}</th>
                      <th> {post.status_id === 1 ? (<p>Activo</p>):'Inactivo'}</th>
                      <th>
                      <Link to={`${process.env.PUBLIC_URL}/nexos/createservicecotizar`} state={post}>
                              <span className="material-icons md-36 md-dark"  >&#xe3c9;</span>
                          </Link>
                      </th>                  
                    </tr>
                  ))}
              </tbody>
              </table>a
          </div>    
      
          </div>
          );
}

export default ListarTiposCotizacion

