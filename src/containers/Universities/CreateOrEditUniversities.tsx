/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Card, Col, Row, Button, Form, FormGroup, FormCheck } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import BreadCrumb from '../../components/Global/BreadCrumb';
import TitleComponent from '../../components/Global/TitleComponent';
import InputErrorMessage from '../../components/Global/InputErrorMessage';

interface FormValues {
    [key: string]: string | boolean;
}

interface FieldConfig {
    label: string;
    name: string;
    type: string;
    options?: string[];
    required?: boolean;
}

const fieldConfig: FieldConfig[] = [
    { label: "NOMBRE", name: "name", type: "text", required: true },
    { label: "CIUDAD", name: "city", type: "text", required: true },
    { label: "ÁREA", name: "area", type: "text", required: true },
    { label: "TÍTULO ESCOLAR", name: "schoolTitle", type: "text", required: true },
    { label: "PROGRAMA", name: "program", type: "text" },
    { label: "NIVEL", name: "level", type: "text" },
    { label: "DURACIÓN", name: "duration", type: "text" },
    { label: "IELTS", name: "ielts", type: "text" },
    { label: "DESCRIPCIÓN", name: "description", type: "textarea" },
    { label: "CHECKBOX", name: "checkboxField", type: "checkbox" },
    { label: "RADIO BUTTONS", name: "radioButtonsField", type: "radio", options: ["Option 1", "Option 2", "Option 3"] }
];

const CreateOrEditUniversities: React.FC = () => {
    const location: any = useLocation();
    const [form, setForm] = useState<FormValues>({});
    const [inputFocus, setInputFocus] = useState(false);

    const handleInputFocus = () => {
        setInputFocus(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;
        setForm({
            ...form,
            [name]: fieldValue
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica para enviar el formulario
    };

    return (
        <>
            <BreadCrumb
                items={['inicio', 'ciudades', location?.state?.id ? "Editar ciudad" : "Agregar ciudad"]}
                baseURL={['', 'listarciudades', location?.state?.id ? "editarciudad/" + location?.state?.id : "crearciudad"]} />
            <TitleComponent title={location?.state?.id ? "Editar ciudad" : "Agregar ciudad"} />
            <Form className="form-horizontal" onSubmit={handleSubmit}>
                <Card className="w-100">
                    <Card.Body className="w-100">
                        <Row>
                            {fieldConfig.map((field, index) => (
                                <Col key={index} sm={12} md={12} lg={6} xl={6}>
                                    <FormGroup className="form-group w-100 m-0">
                                        <Form.Label className="mb-3">{field.label}</Form.Label>
                                        {field.type === "textarea" ? (
                                            <Form.Control
                                                as="textarea"
                                                className={`form-control`}
                                                placeholder=""
                                                name={field.name}
                                                required={field.required || false}
                                                value={form[field.name].toString() || ""}
                                                onChange={handleChange}
                                                onFocus={handleInputFocus}
                                            />
                                        ) : field.type === "checkbox" ? (
                                            <FormCheck
                                                type="checkbox"
                                                className={`form-check-input`}
                                                label={field.label}
                                                name={field.name}
                                                checked={form[field.name] ? true : false}
                                                onChange={handleChange}
                                                onFocus={handleInputFocus}
                                            />
                                        ) : field.type === "radio" ? (
                                            <div>
                                                {field.options?.map((option, optionIndex) => (
                                                    <FormCheck
                                                        key={optionIndex}
                                                        type="radio"
                                                        className={`form-check-input`}
                                                        label={option}
                                                        name={field.name}
                                                        checked={form[field.name] === option}
                                                        value={option}
                                                        onChange={handleChange}
                                                        onFocus={handleInputFocus}
                                                    />
                                                ))}
                                            </div>
                                        ) : (
                                            <Form.Control
                                                type={field.type}
                                                className={`form-control`}
                                                placeholder=""
                                                name={field.name}
                                                required={field.required || false}
                                                value={form[field.name].toString() || ""}
                                                onChange={handleChange}
                                                onFocus={handleInputFocus}
                                            />
                                        )}
                                    </FormGroup>
                                </Col>
                            ))}
                        </Row>
                        <Row className='w-100' >
                            <Col className='mt-4 d-flex justify-content-end'>
                                <Button
                                    variant=""
                                    className="btn btn-primary"
                                    style={{ width: "200px" }}
                                    type="submit"
                                >
                                    {"Guardar cambios"}
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Form>
        </>
    );
}

export default CreateOrEditUniversities;
