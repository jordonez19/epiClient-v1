import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavbarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenuOnResize = () => {
        if (window.innerWidth >= 768) { // Tamaño md
            setMenuOpen(false);
        }
    };

    // Cerrar el menú cuando la ventana cambia de tamaño
    useEffect(() => {
        window.addEventListener('resize', closeMenuOnResize);
        return () => window.removeEventListener('resize', closeMenuOnResize);
    }, []);

    return (
        <nav className="navbar navbar-light bg-light py-4">
            <div className="container-fluid container d-flex justify-content-between align-items-center">
                <Link to="/" className="navbar-brand">
                    <img
                        src={require("../../assets/img/logos/logo.png")}
                        alt="EpiContigo"
                        style={{ width: 150 }}
                    />
                </Link>
                <div className={`d-md-block d-sm-none`}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex-row fs-navbar">
                        <li className="me-3">
                            <Link className="text-secondary" aria-current="page" to="#">HOME</Link>
                        </li>
                        <li className=" me-3">
                            <Link className="text-secondary" to="#">INGLÉS</Link>
                        </li>
                        <li className=" me-3">
                            <Link className="text-secondary" to="#">UNIVERSIDADES</Link>
                        </li>
                        <li className=" me-3">
                            <Link className="text-secondary" to="#">¿POR QUÉ EPI?</Link>
                        </li>
                        <li className=" me-3">
                            <Link className="text-secondary" to="#">NEWS</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center d-md-block d-sm-none">
                    <Link to="auth/login" >
                        <Button
                            variant=""
                            className="btn btn-primary me-2 my-1 d-lg-inline d-block"
                        >
                            Mi Tablero
                        </Button>
                    </Link>
                </div>
                <div className="d-flex align-items-center d-md-none">
                    {menuOpen ?
                        (
                            <CloseIcon
                                className="text-secondary me-2 my-1 d-lg-none"
                                onClick={handleMenuToggle}
                            />
                        ) :
                        (
                            <MenuIcon
                                className="text-secondary me-2 my-1 d-lg-none"
                                onClick={handleMenuToggle}
                            />
                        )}
                </div>
            </div>
            <div className="w-100 d-flex flex-column">
                {menuOpen &&
                    (
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0 w-100 p-4">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 w-100">
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
                            <div className="d-flex align-items-center">
                                <Button
                                    variant=""
                                    className="btn btn-primary me-2 my-1 d-lg-inline d-block"
                                >
                                    Mi Tablero
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </nav>
    );
};

export default NavbarMain;
