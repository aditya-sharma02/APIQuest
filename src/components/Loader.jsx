import React from "react";
import { BallTriangle } from "react-loader-spinner";
import "../styles/component.css"
const Loader = () => {
    return (
        <>
            <div className="loader">
                <div>
                    <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="black"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                    />
                </div>
            </div>
        </>
    )
}

export default Loader;