import React from "react";

const Banner = ({ message }: any) => {
    return (
        <div className="bg-primary py-2 text-light ">
            <div className="d-flex justify-content-between align-items-center container">
                <h5 className="m-0">{message} </h5>
                <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ border: 'solid 0.5px #fff' }}
                >
                    Contactanos
                </button>
            </div>
        </div>
    );
};

export default Banner;