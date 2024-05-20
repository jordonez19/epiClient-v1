import React, { useState } from 'react';
import { Card, Col, Row, Button, Form, FormGroup, FormCheck } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import BreadCrumb from '../../components/Global/BreadCrumb';
import TitleComponent from '../../components/Global/TitleComponent';
import InputErrorMessage from '../../components/Global/InputErrorMessage';
import { useApi } from '../../hooks';

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
    { label: "TÍTULO ESCOLAR", name: "title", type: "text", required: true },
    { label: "PROGRAMA", name: "programme", type: "text" },
    { label: "NIVEL", name: "level", type: "text" },
    { label: "DURACIÓN", name: "duration", type: "text" },
    { label: "IELTS", name: "ielts", type: "text" },
    { label: "DESCRIPCIÓN", name: "description", type: "textarea" },

];

const CreateOrEditSchools: React.FC = () => {
    const location: any = useLocation();
    const [form, setForm] = useState<FormValues>({});
    const [inputFocus, setInputFocus] = useState(false);
    const { get, post, put, del } = useApi();

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

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await post('/schools', form)
    };

    return (
        <>
            <BreadCrumb
                items={['home', 'schools', location?.state?.id ? "Edit school" : "Add schools"]}
                baseURL={['', 'school/action', location?.state?.id ? "school/action" + location?.state?.id : "crearciudad"]} />
            
            <TitleComponent title={location?.state?.id ? "Edit schools" : "Add schools"} />
            
            <Card className="w-100">
                <Card.Body className="w-100">
                    <Row>
                        {fieldConfig && fieldConfig?.map((field, index) => (
                            <Col key={index} sm={12} md={12} lg={4} xl={4}>
                                <FormGroup className="form-group w-100 m-0">
                                    <Form.Label className="mb-3">{field.label}</Form.Label>
                                    {field.type === "textarea" ? (
                                        <Form.Control
                                            as="textarea"
                                            className={`form-control`}
                                            placeholder=""
                                            name={field.name}
                                            required={field.required || false}
                                            value={form[field.name]?.toString() || ""}
                                            onChange={handleChange}
                                            onFocus={handleInputFocus}
                                        />
                                    ) : (
                                        <Form.Control
                                            type={field.type}
                                            className={`form-control`}
                                            placeholder=""
                                            name={field.name}
                                            required={field.required || false}
                                            value={form[field.name]?.toString() || ""}
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
                                variant="primary"
                                style={{ width: "200px" }}
                                onClick={handleSubmit}
                            >
                                {"Guardar cambios"}
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default CreateOrEditSchools;
