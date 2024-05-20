import { Typography } from "antd";
import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { NavLink } from "react-router-dom";

interface BreadCrumbProps {
    items: string[];
    baseURL: string[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items, baseURL }) => {
    if (!Array.isArray(items) || items.length === 0 || !Array.isArray(baseURL) || baseURL.length !== items.length) {
        return null; // Return null if the items array is empty, baseURL is not an array, or the lengths of items and baseURL don't match
    }
    return (
        <div className="breadcrumb-header justify-content-between">
            <div className="left-content">
                {/*<span className="main-content-title mg-b-0 mg-b-lg-1">EMPTY PAGE</span>*/}
                <div className="main-img-user avatar-md">
                    <img
                        alt="avatar"
                        className="rounded-circle"
                        style={{
                            objectFit: "contain",
                        }}
                        src={"https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307-user-account-image-log-user.png"}
                    /* src={"/logos/logo_collapse.png"} */
                    />
                </div>
            </div>
            <div className="justify-content-center mt-3 align-items-center">
                <Breadcrumb className="breadcrumb">
                    {items.map((item, index) => {
                        return (index === items.length - 1) ? (
                            <Typography key={index} className={
                                index === items.length - 1
                                    ? "breadcrumb-item active"
                                    : "breadcrumb-item tx-15"
                            }>
                                {item.toUpperCase()}
                            </Typography>
                        ) : (
                            <NavLink
                                key={index}
                                to={
                                    index === items.length - 1
                                        ? process.env.PUBLIC_URL + `/${baseURL[index].toLowerCase()}`
                                        : baseURL[index].toLowerCase() === "/"
                                            ? "/"
                                            : process.env.PUBLIC_URL + `/${baseURL[index].toLowerCase()}`
                                }
                                className={
                                    index === items.length - 1
                                        ? "breadcrumb-item active"
                                        : "breadcrumb-item tx-15"
                                }
                                //active={index === items.length - 1}
                                aria-current={index === items.length - 1 ? "page" : undefined}
                            >
                                {item.toUpperCase()}
                            </NavLink>
                        )
                    })}
                </Breadcrumb>
            </div>
        </div>
    );
};
export default BreadCrumb;