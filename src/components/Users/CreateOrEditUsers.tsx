/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Form, FormGroup } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
import BreadCrumb from '../Global/BreadCrumb';
import TitleComponent from '../Global/TitleComponent';
import InputErrorMessage from '../Global/InputErrorMessage';
import { useAlert, useApi } from '../../hooks';

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
    { label: "NAME", name: "name", type: "text", required: true },
    { label: "LAST NAME", name: "last_name", type: "text", required: true },
    { label: "EMAIL", name: "email", type: "text", required: true },
    { label: "PASSWORD", name: "password", type: "password", required: true },
];

const CreateOrEditUsers: React.FC = () => {
    const location: any = useLocation();
    const [form, setForm] = useState<FormValues>({});
    const [inputFocus, setInputFocus] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
    const [showPassword, setShowPassword] = useState(false);
    const [roles, setRoles] = useState<{ role_id: number, role_name: string }[]>([]);
    const { post, put, get } = useApi();
    const navigate = useNavigate();
    const { handleSuccessAlert, handleErrorAlert } = useAlert();

    useEffect(() => {
        if (location.state && location.state.roles) {
            const userRoles = location.state.roles.reduce((acc: FormValues, role: any) => {
                acc[role.role_id] = true;
                return acc;
            }, {});
            setForm({ ...location.state, ...userRoles });
        } else if (location.state) {
            setForm({ ...location.state });
        }

        const fetchRoles = async () => {
            const response: any = await get('role');
            setRoles(response || []);
        };

        fetchRoles();
    }, [location.state]);


    const handleInputFocus = () => {
        setInputFocus(true);
    };

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;

        setForm({
            ...form,
            [name]: fieldValue
        });

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
        let res;
        let payload: any = {
            ...form,
            roles: Object.keys(form)
                .filter(key => form[key] === true && !isNaN(Number(key)))
                .map(role_id => ({ role_id: Number(role_id) }))
        };

        if (location.state) {
            payload.user_id = location.state.user_id;
            res = await post(`users`, payload);
        } else {
            res = await post('users', payload);
        }
        console.log(res)
        if (res.status) {
            handleSuccessAlert(res.message);
            navigate('/dashboard/users');
        } else {
            handleErrorAlert(res.message);
        }
    };

    return (
        <>
            <BreadCrumb
                items={['home', 'users', location?.state?.user_id ? "Edit users" : "Add user"]}
                baseURL={['dashboard', 'dashboard/users/', location?.state?.row ? "dashboard/users/action" : "dashboard/users/action"]} />

            <TitleComponent title={location?.state?.row ? "Edit user" : "Add user"} />

            <Card className="w-100">
                <p className='px-3 pt-3'>
                    Fields with <span className="text-danger ">*</span> are required.
                </p>
                <Card.Body className="w-100">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            {fieldConfig && fieldConfig.map((field, index) => (
                                <Col key={index} sm={12} md={12} lg={6} xl={6}>
                                    <Form.Group className="form-group w-100 m-0">
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
                                                <>
                                                    <Form.Control
                                                        type={field.name === "password" ? (showPassword ? "text" : "password") : field.type}
                                                        className={`form-control`}
                                                        placeholder=""
                                                        name={field.name}
                                                        required={field.required || false}
                                                        value={form[field.name]?.toString() || ""}
                                                        onChange={handleChange}
                                                        onFocus={handleInputFocus}
                                                    />
                                                    {field.name === "password" && (
                                                        <Button
                                                            variant="link"
                                                            className="text-decoration-none"
                                                            onClick={() => setShowPassword(!showPassword)}
                                                        >
                                                            {showPassword ? "Hide" : "Show"}
                                                        </Button>
                                                    )}
                                                </>
                                            )}
                                        </InputErrorMessage>
                                    </Form.Group>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <Col sm={12} md={12} lg={6} xl={6}>
                                <FormGroup className="form-group w-100 m-0">
                                    <Form.Label className="mb-3">Roles</Form.Label>
                                    {roles.map((role) => (
                                        <Form.Check
                                            key={role.role_id}
                                            type="checkbox"
                                            label={role.role_name}
                                            name={String(role.role_id)}
                                            checked={!!form[role.role_id]}
                                            onChange={handleChange}
                                        />
                                    ))}
                                </FormGroup>
                            </Col>
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

export default CreateOrEditUsers;
