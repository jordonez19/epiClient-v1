import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalDetails = ({ show, onHide, data }: any) => (
    <Modal size='lg' show={show} onHide={onHide} scrollable>
        <Modal.Header closeButton>
            <Modal.Title>Detalles de la Universidad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p><strong>UNIVERSITY:</strong> {data.UNIVERSIDAD}</p>
            <p><strong>CITY:</strong> {data.CIUDAD}</p>
            <p><strong>AREA:</strong> {data.AREA}</p>
            <p><strong>LEVEL:</strong> {data.NIVEL}</p>
            <p><strong>TITLE:</strong> {data.TITULO}</p>
            <p><strong>PROGRAM:</strong> {data.PROGRAMA}</p>
            <p><strong>NFQ:</strong> {data.NFQ}</p>
            <p><strong>DURATION:</strong> {data.DURACION}</p>
            <p><strong>IELTS:</strong> {data.IELTS}</p>
            <p><strong>START DATE:</strong> {data.home}</p>
            <p><strong>CONTENT:</strong> {data.CONTENIDO}</p>
            <p><strong>FEES:</strong> {data.FEES}</p>
            <p><strong>SCHOLARSHIPS:</strong> {data.BECAS}</p>
            <p><strong>DESCRIPTION:</strong> {data.DESCRIPCION}</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
                Cerrar
            </Button>
        </Modal.Footer>
    </Modal>
);

export default ModalDetails;
