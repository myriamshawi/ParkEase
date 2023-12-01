import React, { useState } from "react";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Form = () => {
    const [passcode, setPasscode] = useState('');
    const navigate = useNavigate();

    const DEMO_PASSCODE = "demo123";

    const handleLogin = async (e) => {
        e.preventDefault();

        if (passcode === DEMO_PASSCODE) {
            // Show a SweetAlert2 popup for successful login
            await Swal.fire({
                title: 'Success!',
                text: 'Login successful!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });

            // Redirect to a different page upon successful login
            navigate("/");
        } else {
            // Show an error message if login is unsuccessful
            Swal.fire({
                title: 'Error!',
                text: 'Incorrect passcode',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    };

    return (
        <div className="mx-4 my-2">
            <form method="post" onSubmit={handleLogin}>
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
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
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
