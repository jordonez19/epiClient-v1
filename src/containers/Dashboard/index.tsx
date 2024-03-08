import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadCrumb from '../../components/Global/BreadCrumb';
import TitleComponent from '../../components/Global/TitleComponent';


const Dashboard = () => {
    let user_name = sessionStorage.getItem('nombre')
    return (
        <>
            {/* Breadcrumb */}
            <BreadCrumb items={['Inicio']} baseURL={['']} />
            <TitleComponent title='Dashboard' />

            <Row className="row-sm">
                <Col xl={12} lg={12} md={12} sm={12}>
                    <Card>
                        <Card.Body>
                            <Row >
                                <div className="text-justified align-items-center">
                                    <h3 className="text-dark font-weight-semibold mb-2 mt-0">
                                        Bienvenido de vuelta{" "}
                                        <span className="text-primary">{user_name}!</span>
                                    </h3>
                                    <p className="text-dark tx-14 mb-3 lh-3">
                                        Recuerda que, Lo importante no es lo que se promete, sino lo que se cumple.
                                    </p>
                                </div>
                            </Row >
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={3} lg={3} md={3} xs={3}>
                    <Card className=" sales-card">
                        <Row>
                            <div className="col-8">
                                <div className="ps-4 pt-4 pe-3 pb-4">
                                    <div className="">
                                        <h6 className="mb-2 tx-12 ">Today Orders</h6>
                                    </div>
                                    <div className="pb-0 mt-0">
                                        <div className="d-flex">
                                            <h4 className="tx-20 font-weight-semibold mb-2">
                                                5,472
                                            </h4>
                                        </div>
                                        <p className="mb-0 tx-12 text-muted">
                                            Last week
                                            <i className="fa fa-caret-up mx-2 text-success"></i>
                                            <span className="text-success font-weight-semibold">
                                                +427
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="circle-icon bg-primary-transparent text-center align-self-center overflow-hidden">
                                    <i className="fe fe-shopping-bag tx-16 text-primary"></i>
                                </div>
                            </div>
                        </Row>
                    </Card>
                </Col>
                <Col xl={3} lg={3} md={3} xs={3}>
                    <Card className="sales-card">
                        <Row>
                            <div className="col-8">
                                <div className="ps-4 pt-4 pe-3 pb-4">
                                    <div className="">
                                        <h6 className="mb-2 tx-12">Today Earnings</h6>
                                    </div>
                                    <div className="pb-0 mt-0">
                                        <div className="d-flex">
                                            <h4 className="tx-20 font-weight-semibold mb-2">
                                                $47,589
                                            </h4>
                                        </div>
                                        <p className="mb-0 tx-12 text-muted">
                                            Last week
                                            <i className="fa fa-caret-down mx-2 text-danger"></i>
                                            <span className="font-weight-semibold text-danger">
                                                -453
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="circle-icon bg-info-transparent text-center align-self-center overflow-hidden">
                                    <i className="fe fe-dollar-sign tx-16 text-info"></i>
                                </div>
                            </div>
                        </Row>
                    </Card>
                </Col>
                <Col xl={3} lg={3} md={3} xs={3}>
                    <Card className=" sales-card">
                        <Row>
                            <div className="col-8">
                                <div className="ps-4 pt-4 pe-3 pb-4">
                                    <div className="">
                                        <h6 className="mb-2 tx-12">Profit Gain</h6>
                                    </div>
                                    <div className="pb-0 mt-0">
                                        <div className="d-flex">
                                            <h4 className="tx-20 font-weight-semibold mb-2">
                                                $8,943
                                            </h4>
                                        </div>
                                        <p className="mb-0 tx-12 text-muted">
                                            Last week
                                            <i className="fa fa-caret-up mx-2 text-success"></i>
                                            <span className=" text-success font-weight-semibold">
                                                +788
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="circle-icon bg-secondary-transparent text-center align-self-center overflow-hidden">
                                    <i className="fe fe-external-link tx-16 text-secondary"></i>
                                </div>
                            </div>
                        </Row>
                    </Card>
                </Col>
                <Col xl={3} lg={3} md={3} xs={3}>
                    <Card className="sales-card">
                        <Row>
                            <div className="col-8">
                                <div className="ps-4 pt-4 pe-3 pb-4">
                                    <div className="">
                                        <h6 className="mb-2 tx-12">Total Earnings</h6>
                                    </div>
                                    <div className="pb-0 mt-0">
                                        <div className="d-flex">
                                            <h4 className="tx-22 font-weight-semibold mb-2">
                                                $57.12M
                                            </h4>
                                        </div>
                                        <p className="mb-0 tx-12  text-muted">
                                            Last week
                                            <i className="fa fa-caret-down mx-2 text-danger"></i>
                                            <span className="text-danger font-weight-semibold">
                                                -693
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="circle-icon bg-warning-transparent text-center align-self-center overflow-hidden">
                                    <i className="fe fe-credit-card tx-16 text-warning"></i>
                                </div>
                            </div>
                        </Row>
                    </Card>
                </Col>
            </Row>
            
        </>
    );
};

export default Dashboard;
