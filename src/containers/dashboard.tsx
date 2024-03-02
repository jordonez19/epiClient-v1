import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BreadCrumb, TitleComponent } from '../components/Global';
import CardComponent from '../components/Global/CardComponent';

const cardsData = [
    {
        image: require('../../../../assets/img/media/dashboard/VENTAS.png'),
        title: 'Ventas',
        link: 'ventasconfirmaciones',
        description: 'Adquirir un nuevo servicio para un cliente',
    },
    {
        image: require('../../../../assets/img/media/dashboard/CONFIGURACION.png'),
        title: 'Configuraciones',
        link: 'configuraciones',
        description: 'Configuraciones del sistema',
    },
    {
        image: require('../../../../assets/img/media/dashboard/AGENDAMIENTO.png'),
        title: 'Agendamiento',
        link: 'visitasdemosreuniones',
        description: 'Gestionar agendamiento de clientes',
    },
    {
        image: require('../../../../assets/img/media/dashboard/RESERVAS.png'),
        title: 'Reservas',
        link: 'asambleascontratadas',
        description: 'Gestionar verificaciones de clientes',
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
