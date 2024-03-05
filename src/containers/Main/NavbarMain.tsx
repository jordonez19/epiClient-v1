import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const NavbarMain = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // Tamaño md
                setMenu(true);
            } else {
                setMenu(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid container d-flex justify-content-between align-items-center">
                <Link to="/" className="navbar-brand">
                    <img
                        src={require("../../assets/img/logos/logo.png")}
                        alt="EpiContigo"
                        style={{ width: 150 }}
                    />
                </Link>
                <MenuIcon
                    className={`text-secondary me-2 my-1 d-lg-none`}
                    onClick={handleMenu}
                />
                <div className={`collapse navbar-collapse ${menu ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-secondary fw-bold" aria-current="page" to="#">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary fw-bold" to="#">INGLÉS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary fw-bold" to="#">UNIVERSIDADES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary fw-bold" to="#">¿POR QUÉ EPI?</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary fw-bold" to="#">NEWS</Link>
                        </li>
                    </ul>
                    {menu ? (
                        <Link to="/auth/login" >
                            <Button
                                variant=""
                                className="btn btn-primary me-2 my-1 d-none d-lg-inline d-block"
                            >
                                Mi Tablero
                            </Button>
                        </Link>
                    ) : null}
                </div>
            </div>
        </nav>
    );
};

export default NavbarMain;
