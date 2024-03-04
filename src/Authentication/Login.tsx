import React, { useState } from 'react';
import { Button, Col, Form, Row, Alert } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
//Importando el servicio post 

import { useDispatch } from 'react-redux';
import { actionLogin } from '../redux/actions/authActions';
import validator from 'validator'
import axios from "axios";
import Config from '../services/config';
import InputErrorMessage from '../components/Global/InputErrorMessage';

const initialErrors = {
  email: "",
  password: ""
}

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setError] = useState("");
  const [errors, setErrors] = useState<any>(initialErrors);
  const [hasErrors, setHasErrors] = useState(true);

  const [check, setCheck] = useState(true);
  //const [message, setMessage] = useState('');

  const [data, setData] = useState({
    "email": "",
    "password": ""
  });
  // Expresion regular - valida que la contraseña cumpla con la documentacion (Un numero, una letra mayuscula y una minuscula, al menos 8 caracteres de longitud, )

  function isValidEmail(email: any) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const { email, password } = data;

  const changeHandler = (e: any) => {
    const validationErrors: any = { ...errors };

    if (e.target.name === "email") {
      //si no es digitado el correo o esta vacio . saldra error si tambien se verifica que lo que se este verificando sea el campo correo o pass
      if (!isValidEmail(e.target.value) || e.target.value.length === 0) {
        validator.isEmail(e.target.value)
        validationErrors.email = "Correo Invalido o vacio";

      } else {
        delete validationErrors.email;
      }

      setData({ ...data, [e.target.name]: e.target.value })
      setError("");
    }

    if (e.target.name === 'password') {

      // Expresion regular - valida que la contraseña cumpla con la documentacion (Un numero, una letra mayuscula y una minuscula, al menos 8 caracteres de longitud, )
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      validationErrors.password = [];

      if (!passwordRegex.test(e.target.value)) {
        // Agregamos los mensajes de error al array 'validationErrors.password'
        if (e.target.value.length < 8) {
          validationErrors.password.push(" La contraseña debe tener al menos 8 caracteres");
        }
        if (!/\d/.test(e.target.value)) {
          validationErrors.password.push(" Contener al menos un número");
        }
        if (!/[A-Z]/.test(e.target.value)) {
          validationErrors.password.push(" Incluir al menos una letra mayúscula");
        }
        if (!/[a-z]/.test(e.target.value)) {
          validationErrors.password.push(" Incluir al menos una letra minúscula");
        }
      } else {
        delete validationErrors.password;
      }

      setData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    //Se evalua si el checkbox a sido clickeado y se actualiza el estado
    if (e.target.type === "checkbox") {
      setCheck(!e.target.checked)
    }

    // Si hay errores, actualiza el estado con ellos
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setHasErrors(true);
    } else {
      setErrors({});
      setHasErrors(false);
    }
  }


  // Dentro de tu función Login
  const Login = async (e: any) => {
    e.preventDefault();
    const config = Config();
    const { endpoint } = config;
    const payload = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await axios.post(`${endpoint}/api/auth/signin`, payload);
      if (response?.data.success) {
        sessionStorage.setItem("nombre", response.data.user.user_name);
        sessionStorage.setItem("token", response.data.user.token);
        dispatch(actionLogin(response.data.user));
        navigate(`${process.env.PUBLIC_URL}/dashboard`);
      } else {
        let mensaje = response?.data.message || 'Error en la petición';
        setError(mensaje);
      }
    } catch (error) {
      console.error('Error en la petición:', error);
      setError('Error en la petición');
    }
  };

  return (
    <React.Fragment>
      <div className="square-box"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div>
      <div className="page bg-primary">
        <div className="page-single">
          <div className="container" style={{ marginTop: "89px" }} >
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
                      <div className="text-center mb-5">
                        <Link to="#">
                          <img
                            src={require("../assets/img/logos/logo.png")}
                            className="sign-favicon"
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <div className="my-5">
                        <div className="main-signup-header">
                          <div className="panel panel-primary">
                            <div className=" tab-menu-heading mb-2 border-bottom-0">
                              <div className="tabs-menu1">
                                <div className='text-center text-primary'>
                                  {err && <Alert variant="danger">{err}</Alert>}
                                </div>
                                <Form >
                                  <Form.Group className="form-group">
                                    <Form.Label className=''>Email</Form.Label>{""}
                                    <InputErrorMessage message={errors.email} inputFocus={true}>
                                      <Form.Control
                                        className="form-control"
                                        placeholder="Enter your email"
                                        name="email"
                                        type='text'
                                        value={email}
                                        onChange={changeHandler}
                                        required
                                      />
                                    </InputErrorMessage>
                                  </Form.Group>

                                  <Form.Group className="form-group">
                                    <Form.Label>Password</Form.Label>{" "}
                                    <InputErrorMessage message={errors.password} inputFocus={true}>
                                      <Form.Control
                                        className="form-control"
                                        placeholder="Enter your password"
                                        name="password"
                                        type='password'
                                        value={password}
                                        onChange={changeHandler}
                                        autoComplete='current-password'
                                        required
                                      />
                                    </InputErrorMessage>
                                  </Form.Group>
                                  <Button
                                    variant=""
                                    disabled={hasErrors || check}
                                    type='submit'
                                    className="btn btn-primary btn-block"
                                    onClick={Login}
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
                                          <p><a
                                            href='https://votacioneselectronicas.com.co/politica-de-privacidad/' target="_blank" rel="noreferrer">
                                            Terminos y condiciones</a></p>
                                        </div>
                                      </label>
                                      <div className="invalid-feedback">
                                        Aceptar los terminos y condiciones
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-4 d-flex text-center justify-content-center mb-2">
                                    <a className='btn btn-icon me-3'
                                      href='https://web.facebook.com/estudiosprofesionaleseningles'
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <span className="btn-inner--icon">
                                        {" "}
                                        <i className="bx bxl-facebook tx-18 tx-prime"></i>{" "}
                                      </span>
                                    </a>
                                    <a
                                      href="https://www.tiktok.com/@epicontigo"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="btn btn-icon me-3"

                                    >
                                      <span className="btn-inner--icon">
                                        {" "}
                                        <i className="bxl-tiktok tx-18 tx-prime"></i>{" "}
                                      </span>
                                    </a>
                                    <a
                                      href="https://www.linkedin.com/company/estudios-profesionales-en-ingles/"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="btn btn-icon me-3"
                                    >
                                      <span className="btn-inner--icon">
                                        {" "}
                                        <i className="bx bxl-linkedin tx-18 tx-prime"></i>{" "}
                                      </span>
                                    </a>
                                    <a
                                      href="https://www.instagram.com/epicontigo/"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="btn  btn-icon me-3"
                                      type="button"
                                    >
                                      <span className="btn-inner--icon">
                                        {" "}
                                        <i className="bx bxl-instagram tx-18 tx-prime"></i>{" "}
                                      </span>
                                    </a>
                                  </div>
                                  {/* <div className="main-signin-footer text-center mt-3">
                              <p><Link to="#" className="mb-3">Forgot password?</Link></p>
                               <p>Don't have an account ? <Link to={`${process.env.PUBLIC_URL}/authentication/signup`} className=""> Create an Account</Link></p>
                                </div> */}
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
