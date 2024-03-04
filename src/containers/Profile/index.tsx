import React, { useState } from "react";
import { Button, FormControlLabel, Grid, Switch, TextField } from "@mui/material";
import BreadCrumb from "../../components/Global/BreadCrumb";
import TitleComponent from "../../components/Global/TitleComponent";

const ProfileContainer = ({ user, token }: any) => {
    const [status, setStatus] = useState(true);

    const handleSubmit = (values: any) => {
        console.log("Form values:", values);
    };

    const handleStatusChange = (event: any) => {
        setStatus(event.target.checked);
    };

    return (
        <div className="profile-view">
            {/* Breadcrumb */}
            <BreadCrumb items={["inicio", "profile"]} baseURL={["dashboard", "dashboard/profile/"]} />

            {/* Component Title */}
            <TitleComponent title={"Perfil"} />

            <form onSubmit={handleSubmit} className="container">
                <Grid container spacing={3}>
                    <Grid item md={6} sm={12}>
                        <div className="content-profile">
                            <div className="profile_picture_content">
                                {/* Image */}
                                <div className="circle-bg-img">
                                    <img src={require("../../assets/img/logos/logo_collapse.png")} width={200} alt="epi-foto-de-perfil" className="circle-img" />
                                    <span className={`badge ${status ? "badge-green" : "badge-red"}`}></span>
                                </div>
                                
                                <div className="mt-3">
                                    <ul>
                                        <li>Admin</li>
                                        <li>Moderador</li>
                                        <li>Usuario</li>
                                    </ul>
                                </div>
                            </div>

                            
                            <FormControlLabel control={<Switch checked={status} onChange={handleStatusChange} />} label="Estado" />
                        </div>
                    </Grid>

                    <Grid item md={6} sm={12}>
                        <TextField label="Nombre de usuario" defaultValue="Nombre de Usuario" variant="outlined" fullWidth margin="normal" />
                        <TextField label="Correo" defaultValue="Correo Electrónico" variant="outlined" fullWidth margin="normal" />
                        <TextField label="Cambiar contraseña" type="password" variant="outlined" fullWidth margin="normal" />
                        <Button variant="contained" color="primary" type="submit">
                            Guardar cambios
                        </Button>
                    </Grid>
                </Grid>

            </form>
        </div>
    );
};

export default ProfileContainer;
