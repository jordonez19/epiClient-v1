import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CardComponent from '../../components/Global/CardComponent';
import BreadCrumb from '../../components/Global/BreadCrumb';
import TitleComponent from '../../components/Global/TitleComponent';

const cardsData = [
    {
        image: require('../../assets/img/logos/logo.png'),
        title: 'Ventas',
        link: 'ventasconfirmaciones',
        description: 'Adquirir un nuevo servicio para un cliente',
    },
];

const Dashboard = () => {
    return (
        <>
            {/* Breadcrumb */}
            <BreadCrumb items={['Inicio']} baseURL={['']} />
            <TitleComponent title='Dashboard' />
            <Row className="row-sm">
                {cardsData.map((card, index) => (
                    <Col key={index} lg={4} md={4} xl={3}>
                        <CardComponent {...card} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Dashboard;
