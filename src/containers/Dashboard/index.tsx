/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../components/Global/BreadCrumb';
import { useApi } from '../../hooks';

const Dashboard = () => {
    const { get } = useApi();

    const user_name = sessionStorage.getItem('nombre') || 'User';

    const [data, setData] = useState<any>({ universities: 0, users: 0 });

    const handleGetData = async () => {
        const response: any = await get('universities/all/count');
        setData(response);
    };

    const cardData = [
        {
            title: "USERS",
            link: "users/",
            dataField: "users",
            count: data.users,
            iconClass: (
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="side-menu__icon m-auto"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24" fill="#FCB33C">
                    <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
                </svg>
            ),
            bgColorClass: "bg-primary-transparent",
            textColorClass: "text-primary"
        },
        {
            title: "UNIVERSITIES",
            link: "universities/",
            dataField: "universities",
            count: data.universities,
            iconClass: (
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="side-menu__icon m-auto"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24" fill="#FCB33C"><path d="M3 19V5.70046C3 5.27995 3.26307 4.90437 3.65826 4.76067L13.3291 1.24398C13.5886 1.14961 13.8755 1.28349 13.9699 1.54301C13.9898 1.59778 14 1.65561 14 1.71388V6.6667L20.3162 8.77211C20.7246 8.90822 21 9.29036 21 9.72079V19H23V21H1V19H3ZM5 19H12V3.85543L5 6.40089V19ZM19 19V10.4416L14 8.77488V19H19Z"></path></svg>
            ),
            bgColorClass: "bg-primary-transparent",
            textColorClass: "text-primary"
        },
        // Add more card data here for other sections
    ];

    useEffect(() => {
        handleGetData();
    }, []);

    return (
        <>
            {/* Breadcrumb */}
            <BreadCrumb items={['home']} baseURL={['']} />

            <Row>
                <Col xl={12} lg={12} md={12} sm={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <div className="text-justified align-items-center">
                                    <h3 className="text-dark font-weight-semibold mb-2 mt-0">
                                        Welcome back,{" "}
                                        <span className="text-primary">{user_name}!</span>
                                    </h3>
                                    <p className="text-dark tx-14 mb-3 lh-3">
                                        Believe in yourself and anything is possible.
                                    </p>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>



            <Row>
                {cardData.map((card, index) => (
                    <Col key={index} xl={3} lg={3} md={3} xs={12}>
                        <Link to={card.link}>
                            <Card className="sales-card">
                                <Row className="align-items-center">
                                    <Col className="col-8">
                                        <div className="ps-4 pt-4 pe-3 pb-4">
                                            <div>
                                                <h3 className="mb-2 text-start">{card.title}</h3>
                                                <h5 className="mb-0 text-start">{card.count}</h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="col-4">
                                        <div className={`circle-icon ${card.bgColorClass} d-flex align-items-center justify-content-center text-primary overflow-hidden`}>
                                            {card.iconClass}
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Dashboard;
