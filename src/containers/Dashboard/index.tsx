import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../components/Global/BreadCrumb';

const cardData = [
    {
        title: "SCHOOLS",
        link: "schools/",
        iconClass: (
            <svg xmlns="http://www.w3.org/2000/svg"
                className="side-menu__icon"
                width="24"
                height="24"
                viewBox="0 0 24 24" fill="#FCB33C"><path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path></svg >
        ),
        bgColorClass: "bg-primary-transparent",
        textColorClass: "text-primary"
    }, {
        title: "UNIVERSITIES",
        link: "universities/",
        iconClass: (
            <svg xmlns="http://www.w3.org/2000/svg"
                className="side-menu__icon m-auto"
                width="24"
                height="24"
                viewBox="0 0 24 24" fill="#FCB33C"><path d="M3 19V5.70046C3 5.27995 3.26307 4.90437 3.65826 4.76067L13.3291 1.24398C13.5886 1.14961 13.8755 1.28349 13.9699 1.54301C13.9898 1.59778 14 1.65561 14 1.71388V6.6667L20.3162 8.77211C20.7246 8.90822 21 9.29036 21 9.72079V19H23V21H1V19H3ZM5 19H12V3.85543L5 6.40089V19ZM19 19V10.4416L14 8.77488V19H19Z"></path></svg>
        ),
        bgColorClass: "bg-primary-transparent",
        textColorClass: "text-primary"
    }, {
        title: "CITIES",
        link: "cities/",
        iconClass: (
            <svg xmlns="http://www.w3.org/2000/svg"
                className="side-menu__icon m-auto"
                width="24"
                height="24"
                viewBox="0 0 24 24" fill="#FCB33C">
                <path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path>
            </svg>
        ),
        bgColorClass: "bg-primary-transparent",
        textColorClass: "text-primary"
    },


];

const Dashboard = () => {
    const user_name = sessionStorage.getItem('nombre') || 'User';

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
                    <Col key={index} xl={4} lg={4} md={4} xs={12}>
                        <Link to={card.link}>
                            <Card className="sales-card">
                                <Row className="align-items-center">
                                    <Col className="col-8">
                                        <div className="ps-4 pt-4 pe-3 pb-4">
                                            <div>
                                                <h3 className="mb-2 text-center">{card.title}</h3>
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
