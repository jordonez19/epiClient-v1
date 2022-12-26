import React, { useState } from 'react';
import { Button, Col, Form, Row,Alert} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../Firebase/firebase';
import validator from 'validator'

//Importando el servicio post 
 import { PostLogin } from '../components/Nexos/Servicios/Services';



const SignIn = () => {
  const [err, setError] = useState("");
  //const [errorMessage, setErrorMessage] = useState('')
  const [errorEmailmessage,setErrorEmailMessage] = useState(" ")
  const [errorPassmessage,setErrorPassMessage] = useState(" ")
  const [check,setCheck]= useState(true)
  //const [message, setMessage] = useState('');


  const [data, setData] = useState({
  "email": "",
  "password": "",

  })

  let mensaje = ()=>{
    let Mapa  = JSON.stringify(data)
    console.log(typeof(Mapa))
    console.log(Mapa)
    PostLogin(Mapa)
  }

  function isValidEmail(email:any) {
    return /\S+@\S+\.\S+/.test(email);
  }



  const { email, password } = data;


  const changeHandler = (e:any) => {


    if(e.target.name === "email"){
      //si no es digitado el correo o esta vacio . saldra error si tambien se verifica que lo que se este verificando sea el campo correo o pass
      if (!isValidEmail(e.target.value) || e.target.value.lenght === 0) {
        validator.isEmail(e.target.value)

        setErrorEmailMessage("Correo Invalido o vacio")
       
        } else {
          setErrorEmailMessage("")
        }

        setData({ ...data, [e.target.name]: e.target.value })
        setError("");
    }

    if(e.target.name === 'password'){
      //Password solo numeros
      if(!validator.isNumeric(e.target.value) || e.target.value === ""){
        setErrorPassMessage("Password Debil o vacio")
      }else{
        setErrorPassMessage("")
        
      }

    setData({ ...data, [e.target.name]: e.target.value })
    setError("");
      
    }
    //Se evalua si el checkbox a sido clickeado y se actualiza el estado
    if(e.target.type === "checkbox"){
      setCheck(!e.target.checked)
    }

  }

  


  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `${process.env.PUBLIC_URL}/dashboard/dashboard-1/`; 
    navigate(path);
  }

  const Login = (e:any) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
      user => {console.log(user);routeChange()}).catch(err => {console.log(err);setError(err.message)})
  }
  
  return (
    <React.Fragment>
      <div className="square-box"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div>
      <div className="page bg-primary">
    <div className="page-single">
      <div className="container"  style={{ marginTop: "89px" }} >
        <Row>
          <Col
            xl={5}
            lg={6}
            md={8}
            sm={8}
            xs={10}
            className="card-sigin-main mx-auto my-auto py-4 justify-content-center"
          >
            <div className="card-sigin">
              {/* <!-- Demo content--> */}
              <div className="main-card-signin d-md-flex">
                <div className="wd-100p">
                  <div className="text-center">
                    <Link to="#">
                      <img
                        src={require("../assets/img/brand/logo-nexos2.png")}
                        className="sign-favicon"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="">
                    <div className="main-signup-header">
                      <div className='text-center'>
                        <h2 onClick={mensaje}>Nexos</h2>
                        <h6 className="font-weight-semibold mb-4 ">
                          Mensaje de bienvenida.
                        </h6>
                      </div>
                      <div className="panel panel-primary">
                        <div className=" tab-menu-heading mb-2 border-bottom-0">
                          <div className="tabs-menu1">
                            {err && <Alert variant="danger">{err}</Alert>}
                            <Form >
                              <Form.Group className="form-group">
                                <Form.Label className=''>Email</Form.Label>{""}
                                <Form.Control
                                  className="form-control"
                                  placeholder="Enter your email"
                                  name="email"
                                  type='text'
                                  value={email}
                                  onChange={changeHandler}
                                  required
                                />
                                <span className="tag-outline-info">{errorEmailmessage}</span>
                                
                              </Form.Group>
                              
                              <Form.Group className="form-group">
                                <Form.Label>Password</Form.Label>{" "}
                                <Form.Control
                                  className="form-control"
                                  placeholder="Enter your password"
                                  name="password"
                                  type='password'
                                  value={password}
                                  onChange={changeHandler}
                                  required
                                />
                                <span className="tag-outline-info">{errorPassmessage}</span>
                              </Form.Group>
                              <Button
                                variant=""
                                disabled={!validator.isEmail(email) || !validator.isNumeric(password) || check}
                                type='submit'
                                className="btn btn-primary btn-block"
                                onClick={()=>[Login]}
                              >
                                Sign In
                              </Button>
                              
                              <div className="was-validated">
                                <div className="form-check mb-3 mt-3">
                                    <input
                                      type="checkbox"
                                      name='terminos'
                                      className="form-check-input"
                                      id="validationFormCheck1"
                                      onChange={changeHandler}
                                      required 
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="validationFormCheck1"
                                    > 
                                      <div className="main-signin-footer">
                                      <p><Link 
                                      to="https://votacioneselectronicas.com.co/Asambleas_ordinarias_y_extraordinarias.html" 
                                       className="mb-3"
                                      >
                                      Terminos y condiciones</Link ></p>
                                      </div>
                                    </label>
                                    <div className="invalid-feedback">
                                      Aceptar los terminos y condiciones
                                    </div>
                                  </div>
                                </div>
                                

                              <div className="mt-4 d-flex text-center justify-content-center mb-2">
                                <Link
                                  to="https://www.facebook.com/"
                                  target="_blank"
                                  className="btn btn-icon btn-facebook me-3"
                                  type="button"
                                >
                                  <span className="btn-inner--icon">
                                    {" "}
                                    <i className="bx bxl-facebook tx-18 tx-prime"></i>{" "}
                                  </span>
                                </Link>
                                <Link
                                  to="https://www.twitter.com/"
                                  target="_blank"
                                  className="btn btn-icon me-3"
                                  type="button"
                                >
                                  <span className="btn-inner--icon">
                                    {" "}
                                    <i className="bx bxl-twitter tx-18 tx-prime"></i>{" "}
                                  </span>
                                </Link>
                                <Link
                                  to="https://www.linkedin.com/"
                                  target="_blank"
                                  className="btn btn-icon me-3"
                                  type="button"
                                >
                                  <span className="btn-inner--icon">
                                    {" "}
                                    <i className="bx bxl-linkedin tx-18 tx-prime"></i>{" "}
                                  </span>
                                </Link>
                                <Link
                                  to="https://www.instagram.com/"
                                  target="_blank"
                                  className="btn  btn-icon me-3"
                                  type="button"
                                >
                                  <span className="btn-inner--icon">
                                    {" "}
                                    <i className="bx bxl-instagram tx-18 tx-prime"></i>{" "}
                                  </span>
                                </Link>
                              </div>
                              <div className="main-signin-footer text-center mt-3">
                              <p><Link to="#" className="mb-3">Forgot password?</Link></p>
                               <p>Don't have an account ? <Link to={`${process.env.PUBLIC_URL}/authentication/signup`} className=""> Create an Account</Link></p>
                                </div>
                            </Form>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div >
    </div>
</React.Fragment>
  );
}

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
