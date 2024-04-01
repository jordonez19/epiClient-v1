import React from 'react';
import { Card, Col, Row, Button, Form, FormGroup } from 'react-bootstrap';

const FormInput: React.FC<any> = ({
    fieldConfig,
    handleChange,
    handleSubmit,
    handleInputFocus,
    form,
    inputFocus
}) => {
    return (
        <Form className="form-horizontal" onSubmit={handleSubmit}>
            <Card className="w-100">
                <Card.Body className="w-100">
                    <Row>
                        {fieldConfig.map((field: any, index: number) => ( 
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
                                type="submit"
                            >
                                {"Guardar cambios"}
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Form>
    );
};

export default FormInput;
