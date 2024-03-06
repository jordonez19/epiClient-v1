import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Form, FormGroup } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import { useAlert, useApi, useErrors } from '../../hooks';
import { Autocomplete, TextField } from '@mui/material';
import { inputLabelClasses } from "@mui/material/InputLabel";
import BreadCrumb from '../../components/Global/BreadCrumb';
import TitleComponent from '../../components/Global/TitleComponent';
import InputErrorMessage from '../../components/Global/InputErrorMessage';

const InitValues = {
    id: 0,
    name: '',
    status_id: 1,
    country_id: null,
}
const initialErrors = {
    name: [],
    country_id: [],
};

const CreateOrEditCities = () => {

    const [city, setCity] = useState<any>();
    const [country, setCountry] = useState<any>();
    const [selectedCity, setSelectedCity] = useState<any>(null);
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const { post, get, put } = useApi();
    const location: any = useLocation();
    const { state: editItemData } = location;
    const { handleEditConfirmation, handleSuccessAlert, handleErrorAlert } = useAlert();
    const [inputFocus, setInputFocus] = useState(false);
    const { errors, setError, clearError } = useErrors();

    const form_values = {
        id: location.state.id,
        name: location.state.name,
        status_id: location.state.status_id,
        country_id: location.state.country_id,
    }

    const [form, setForm] = useState<any>(location.state.id ? form_values : InitValues);

    const getData = async () => {
        try {
            const res = await get('api/cities/list');
            const res_countries = await get('api/countries/list');
            setCountry(res_countries);
            setCity(res);
        } catch (error) {
            console.error("Error en getData:", error);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        let newValue = type === "radio" ? parseInt(value) : value;
        if (name === 'name') {
            newValue = value
                .toLowerCase()
                .split(' ')
                .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }
        setForm((prev: any) => ({
            ...prev,
            [name]: newValue
        }));
    };

    const handleAutocompleteChange = (event: any, newValue: any) => {
        if (newValue) {
            setSelectedCity(newValue);
            setForm((prev: any) => ({
                ...prev,
                name: newValue.name,
            }));
        } else {
            setSelectedCity(null);
            setForm((prev: any) => ({
                ...prev,
                name: '',
            }));
        }
    };

    const handleCountryAutocompleteChange = (event: any, newValue: any) => {
        if (newValue) {
            setSelectedCountry(newValue);
            setForm((prev: any) => ({
                ...prev,
                country_id: newValue.id,
            }));
            // Limpiar el error si se selecciona un país
            clearError("country");
        } else {
            setSelectedCountry(null);
            setForm((prev: any) => ({
                ...prev,
                country_id: null,
            }));
            // Establecer el error si no se selecciona un país
            setError("country", ["Debe seleccionar un país"]);
        }
    };

    const handleAutocompleteClear = () => {
        if (!form.name) {
            setError("name", ["El campo nombre es obligatorio"]);
        } else {
            clearError("name");
        }
    };

    const handleCountryAutocompleteClear = () => {
        if (!form.country_id) {
            setError("country_id", ["El campo país es obligatorio"]);
        } else {
            clearError("country_id");
        }
    };

    const handleInputFocus = () => {
        setInputFocus(true);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (location?.state?.id != null) {
            handleEdit();
        } else {
            handleCreate();
        }
    };

    const handleCreate = async () => {
        try {
            await post(form, 'api/cities/save');
        } catch (error) {
            console.error("Error en handleCreate:", error);
            handleErrorAlert("Error al crear el form.");
        }
    };

    const handleEdit = async () => {
        try {
            // Mostrar la confirmación antes de editar el form
            const confirmationResult = await handleEditConfirmation("¿Estás seguro que deseas editar este servicio?");
            if (confirmationResult.isConfirmed) {
                const { id, ...rest } = form;
                const payload = {
                    ...rest,
                    id: form.id,
                };
                await put(payload, `cities/edit/${form.id}`);
            }
        } catch (error) {
            console.error("Error en handleEdit:", error);
            handleErrorAlert("Error al editar el form.");
        }
    };

    useEffect(() => {
        if (!!editItemData.id) {
            setSelectedCity({ id: editItemData.id, name: editItemData.name });
            // Buscar el país correspondiente al country_id de la ciudad editada
            const countryData = country?.find((c: any) => c.id === editItemData.country_id);
            setSelectedCountry(countryData); // Establecer el país seleccionado
            setForm(editItemData);
        }
    }, [editItemData]);

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <BreadCrumb
                items={['inicio', 'ciudades', location?.state?.id ? "Editar ciudad" : "Agregar ciudad"]}
                baseURL={['', 'listarciudades', location?.state?.id ? "editarciudad/" + location?.state?.id : "crearciudad"]} />
            <TitleComponent title={location?.state?.id ? "Editar ciudad" : "Agregar ciudad"} />
            <Form className="form-horizontal" onSubmit={handleSubmit}>
                <Card className="w-100">
                    <Card.Body className="w-100">
                        <Col sm={12} md={12} lg={6} xl={6} className='mx-auto'>
                            <Row className="justify-content-center mt-5 ">
                                <Col sm={12} md={12} lg={12} xl={12}>
                                    <FormGroup className="form-group w-100 m-0">
                                        <Form.Label className='mb-3'>CIUDAD</Form.Label>
                                        <Autocomplete
                                            id="city-autocomplete"
                                            options={city || []}
                                            size="small"
                                            getOptionLabel={(option) => option?.name}
                                            value={selectedCity || null}
                                            onChange={handleAutocompleteChange}
                                            onClose={handleAutocompleteClear}
                                            onBlur={handleInputFocus}
                                            renderInput={(params) => (
                                                <InputErrorMessage
                                                    message={form.name === "" ? ["El campo nombre es obligatorio"] : []}
                                                    inputFocus={inputFocus}
                                                >
                                                    <TextField
                                                        {...params}
                                                        label="Seleccione una ciudad"
                                                        variant="outlined"
                                                        className={`orange-outline`}
                                                        onFocus={handleInputFocus}
                                                        required
                                                        InputLabelProps={{
                                                            sx: {
                                                                [`&.${inputLabelClasses.shrink}`]: {
                                                                    color: inputFocus ? "#ff7c23" : '',
                                                                },
                                                            },
                                                        }}
                                                        InputProps={{
                                                            ...params.InputProps,
                                                            classes: {
                                                                notchedOutline: `custom-notched-outline ${inputFocus ? 'orange-outline' : ''}`,
                                                            },
                                                        }}
                                                    />
                                                </InputErrorMessage>
                                            )}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3">
                                <Col sm={12} md={12} lg={12} xl={12}>
                                    <FormGroup className="form-group w-100 m-0">
                                        <Form.Label className='mb-3'>PAIS</Form.Label>
                                        <Autocomplete
                                            id="country-autocomplete"
                                            options={country || []}
                                            size="small"
                                            getOptionLabel={(option) => option?.name}
                                            value={selectedCountry || null}
                                            onChange={handleCountryAutocompleteChange}
                                            onClose={handleCountryAutocompleteClear}
                                            onBlur={handleInputFocus}
                                            renderInput={(params) => (
                                                <InputErrorMessage
                                                    message={form.country === "" ? ["El campo país es obligatorio"] : []}
                                                    inputFocus={inputFocus}
                                                >
                                                    <TextField
                                                        {...params}
                                                        label="Seleccione un país"
                                                        variant="outlined"
                                                        className={`orange-outline`}
                                                        onFocus={handleInputFocus}
                                                        required
                                                        InputLabelProps={{
                                                            sx: {
                                                                [`&.${inputLabelClasses.shrink}`]: {
                                                                    color: inputFocus ? "#ff7c23" : '',
                                                                },
                                                            },
                                                        }}
                                                        InputProps={{
                                                            ...params.InputProps,
                                                            classes: {
                                                                notchedOutline: `custom-notched-outline ${inputFocus ? 'orange-outline' : ''}`,
                                                            },
                                                        }}
                                                    />
                                                </InputErrorMessage>
                                            )}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className='mb-2'>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                                    <FormGroup className="form-group text-center">
                                        <Form.Label className="form-label">Estado</Form.Label>
                                        <div className="custom-controls-stacked d-flex justify-content-center gap-5">
                                            <Form.Label className="custom-control custom-radio">
                                                <Form.Control
                                                    type="radio"
                                                    className="custom-control-input"
                                                    name="status_id"
                                                    value={1}
                                                    checked={form?.status_id === 1}
                                                    onChange={handleChange}
                                                />
                                                <span className="custom-control-label">Activo</span>
                                            </Form.Label>
                                            <Form.Label className="custom-control custom-radio">
                                                <Form.Control
                                                    type="radio"
                                                    className="custom-control-input"
                                                    name="status_id"
                                                    value={0}
                                                    checked={form?.status_id === 0}
                                                    onChange={handleChange}
                                                />
                                                <span className="custom-control-label">Inactivo</span>
                                            </Form.Label>
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className='mb-4'>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Button
                                        variant=""
                                        className="btn btn-primary"
                                        style={{ width: "100%" }}
                                        type="submit"
                                    >
                                        {editItemData ? "Guardar cambios" : "Editar cambios"}
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Card.Body>
                </Card>
            </Form>
        </>
    );

}

export default CreateOrEditCities;
