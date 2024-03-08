import React from "react";
import { Form,Col } from "react-bootstrap";

const InputField = ({
  type,
  name,
  value,
  handleChange,
  onFocus,
  setOnFocus,
  onBlur,
  error
}: any) => {
  return (
    <Form.Group as={Col} controlId={name}>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={setOnFocus}
        onBlur={onBlur}
        isInvalid={!!error}
      />
      {error && (
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default InputField;
