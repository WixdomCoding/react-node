import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/register", {
                username: username,
                password: password,
            });
            navigate("/");

            console.log(response);
        } catch (error) {
            console.error("Registration failed:", error);

            alert("Registration failed");
        }
    };

    return (
        <div className="Register">
            <h1>Register</h1>
            <div>
                <form method="post" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <br />
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account?</p>
                <a href="/login">Login</a>
            </div>
        </div>
    );
}

export default Register;
