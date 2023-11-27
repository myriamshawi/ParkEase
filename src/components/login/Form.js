import React, {useState} from "react";
import "./Form.css";
import {Link} from "react-router-dom";

const Form = () => {

    return (
        <div className="mx-4 my-2">
            <form method="post">
                <div className="input-group col-lg mt-3 my-md-none">
                    <label htmlFor="username" className="input-group-text">
                        <i className="bi bi-envelope"></i>
                    </label>
                    <input
                        id="username"
                        type="text"
                        className="form-control input-box"
                        maxLength="40"
                        placeholder="Passcode"
                        autoComplete="off"
                        required
                    />
                </div>
                <div className="fw-light mt-3">
                    Don't have an account?&nbsp;
                    <Link to="/signup" className="link">
                        Sign Up
                    </Link>
                </div>
                <div className="my-4 text-center">
                    <input
                        type="submit"
                        className="btn btn-lg btn-outline-dark"
                        id="usersubmit"
                        rows="3"
                        value={"Login!"}
                    />
                </div>
            </form>
        </div>
    );
};

export default Form;