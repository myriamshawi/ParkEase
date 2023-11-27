import React, {useState} from "react";
import "../login/Form.css";

const Form = () => {

    return (
        <div className="mx-4 my-2">
            <form method="post" >
                <div className="input-group col-lg mt-3 my-md-none">
                    <label htmlFor="username" className="input-group-text">
                        <i className="bi bi-person"></i>
                    </label>
                    <input
                        id="username"
                        type="text"
                        className="form-control input-box"
                        maxLength="30"
                        placeholder="Passcode"
                        autoComplete="off"
                        required
                    />
                </div>
                <div className="input-group col-lg mt-3 my-md-none">
                    <label htmlFor="useremail" className="input-group-text">
                        <i className="bi bi-envelope"></i>
                    </label>
                    <input
                        id="useremail"
                        type="email"
                        className="form-control input-box"
                        maxLength="40"
                        placeholder="Email Address"
                        autoComplete="off"
                        required
                    />
                </div>

                <div className="my-4 text-center">
                    <input
                        type="submit"
                        className="btn btn-lg btn-outline-dark"
                        id="usersubmit"
                        rows="3"
                        value={"Sign Up!"}
                    />
                </div>
                <hr></hr>
            </form>
        </div>
    );
};

export default Form;