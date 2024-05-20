import React, { useState } from "react";
import { Button, FormControlLabel, Grid, Switch, TextField, IconButton, InputAdornment, Card, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import BreadCrumb from "../../components/Global/BreadCrumb";
import TitleComponent from "../../components/Global/TitleComponent";

const ProfileContainer = ({ user, token }: any) => {
    const [status, setStatus] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (values: any) => {
        console.log("Form values:", values);
    };

    const handleStatusChange = (event: any) => {
        setStatus(event.target.checked);
    };

    const handleShowPasswordClick = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="profile-view">
            {/* Breadcrumb */}
            <BreadCrumb items={["home", "profile"]} baseURL={["dashboard", "dashboard/profile/"]} />

            {/* Component Title */}
            <TitleComponent title={"Profile"} />

            <form onSubmit={handleSubmit} className="container">
                <Grid container spacing={2}>
                    {/* Primera columna: Tarjeta con la imagen y el estado */}
                    <Grid item xs={12} lg={4}>
                        <Card>
                            <Box style={{ height: '300px' }} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} p={2}>
                                <div className="">
                                    {/* Image */}
                                    <div className="">
                                        <img
                                            src={"/logos/logo_collapse.png"}
                                            alt="profile epi logo"
                                        />
                                    </div>
                                </div>
                                {/* updating status */}
                                {/* <FormControlLabel control={<Switch checked={status} onChange={handleStatusChange} />} label={status ? 'Active' : 'Inactive'} /> */}                                {/* <Button variant="contained" size="small" color="primary" type="submit">
                                    CAMBIAR IMAGEN
                                </Button> */}
                            </Box>
                        </Card>
                    </Grid>

                    {/* Segunda columna: Tarjeta con los campos de perfil */}
                    <Grid item xs={12} lg={8}>
                        <Card>
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} p={2} m={2}>
                                <TextField label="Nombre de usuario" defaultValue="Nombre de Usuario" variant="outlined" fullWidth margin="normal" />
                                <TextField label="Correo" defaultValue="Correo Electrónico" variant="outlined" fullWidth margin="normal" />
                                <TextField
                                    label="Contraseña"
                                    type={showPassword ? "text" : "password"}
                                    defaultValue=""
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handleShowPasswordClick} edge="end">
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                        </Card>
                        <Box display={'flex'} justifyContent={'end'}>
                            <Button className="my-4" variant="contained" color="primary" type="submit">
                                GUARDAR
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default ProfileContainer;
