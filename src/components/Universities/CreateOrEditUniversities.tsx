import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Form, FormGroup } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import BreadCrumb from '../Global/BreadCrumb';
import TitleComponent from '../Global/TitleComponent';
import InputErrorMessage from '../Global/InputErrorMessage';
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
    { label: "UNIVERSITY", name: "UNIVERSIDAD", type: "text", required: true },
    { label: "CITY", name: "CIUDAD", type: "text", required: true },
    { label: "AREA", name: "AREA", type: "text", required: true },
    { label: "LEVEL", name: "NIVEL", type: "text", required: true },
    { label: "TITLE", name: "TITULO", type: "text", required: true },
    { label: "PROGRAM", name: "PROGRAMA", type: "text" },
    { label: "NFQ", name: "NFQ", type: "text" },
    { label: "DURATION", name: "DURACION", type: "text" },
    { label: "IELTS", name: "IELTS", type: "text" },
    { label: "START DATE", name: "home", type: "text" },
    { label: "FEES", name: "FEES", type: "text" },
    { label: "SCHOLARSHIPS", name: "BECAS", type: "textarea" },
    { label: "DESCRIPTION", name: "DESCRIPCION", type: "textarea" },
    { label: "CONTENT", name: "CONTENIDO", type: "textarea" }
];

const CreateOrEditUniversities: React.FC = () => {
    const location: any = useLocation();
    const [form, setForm] = useState<FormValues>({});
    const [inputFocus, setInputFocus] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
    const { get, post, put, del } = useApi();
    useEffect(() => {
        if (location.state) {
            setForm(location.state);
            console.log(location.state);
        }
    }, []);

    const handleInputFocus = () => {
        setInputFocus(true);
    };

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        let fieldValue = type === "checkbox" ? checked : value;

        if (["NFQ", "DURACION", "IELTS"].includes(name)) {
            const regex = /^[0-9]*$/;
            if (regex.test(value) && Number(value) >= 0) {
                fieldValue = value;
                setErrors({ ...errors, [name]: undefined });
            } else {
                setErrors({ ...errors, [name]: "Debe ser un número" });
                return; // Invalid input, do not update the state
            }
        }

        setForm({
            ...form,
            [name]: fieldValue
        });

        // Check required fields
        if (fieldConfig.find(field => field.name === name && field.required)) {
            if (!value.trim()) {
                setErrors({ ...errors, [name]: "Este campo es requerido" });
            } else {
                setErrors({ ...errors, [name]: undefined });
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Use put or post based on whether it's an edit or add operation
        if (location.state) {

            await put(`universities/${location.state.ID}`, form);
        } else {
            await post('universities', form);
        }
    };

    return (
        <>
            <BreadCrumb
                items={['home', 'universitiies', location?.state?.row ? "Edit universities" : "Add university"]}
                baseURL={['dashboard', 'dashboard/universities/', location?.state?.row ? "dashboard/universities/action" : "dashboard/universities/action"]} />

            <TitleComponent title={location?.state?.row ? "Edit university" : "Add university"} />

            <Card className="w-100">
                <p className='px-3 pt-3'>
                    Fields with <span className="text-danger ">*</span> are required.
                </p>
                <Card.Body className="w-100">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            {fieldConfig && fieldConfig.map((field, index) => (
                                <Col key={index} sm={12} md={12} lg={field.type === "textarea" ? 6 : 4} xl={field.type === "textarea" ? 6 : 4}>
                                    <FormGroup className="form-group w-100 m-0">
                                        <Form.Label className="mb-3">{field.label} {field.required ? <span className="text-danger">*</span> : ""}</Form.Label>
                                        <InputErrorMessage
                                            message={errors[field.name]}
                                            inputFocus={inputFocus}
                                        >
                                            {field.type === "textarea" ? (
                                                <Form.Control
                                                    as="textarea"
                                                    rows={5}
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
                                        </InputErrorMessage>
                                    </FormGroup>
                                </Col>
                            ))}
                        </Row>
                        <Row className='w-100'>
                            <Col className='mt-4 d-flex justify-content-end'>
                                <Button
                                    variant="primary"
                                    style={{ width: "200px" }}
                                    type="submit"
                                >
                                    {"Guardar cambios"}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default CreateOrEditUniversities;

