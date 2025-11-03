import adminstyles from "./adminstyles.module.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const addRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/register", {
        name,
        email,
        password,
        phonenumber,
        address,
      })
      .then((res) => {
        alert(res.data.message);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main>
      <section>
        <div className={adminstyles.bread}>
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Admin Signup</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className={`col-md-3 mx-auto ${adminstyles.bx_shadow}`}>
              <form className="p-4" onSubmit={addRegister}>
                {/* Name */}
                <div className="mb-4">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="User Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* Email */}
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Password */}
                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* phone number*/}
                <div className="mb-4">
                  <input
                    type="phone"
                    name="phonenumber"
                    className="form-control"
                    placeholder="Phone Number"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                </div>
                {/* address */}
                <div className="mb-4">
                  <input
                    type="address"
                    name="address"
                    className="form-control"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                {/* Submit Button */}
                <div className="col-md-12 text-center">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
