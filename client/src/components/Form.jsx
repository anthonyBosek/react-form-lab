import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../assets/Logo.jpeg";
import useValidate from "../handlers/useValidate";

const Form = ({ handleAuth }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [inputValues, setInputValues] = useState({});
  const { errors, validate } = useValidate(inputValues, isRegister);

  const handleClick = () => setIsRegister(!isRegister);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) {
      toast.error("Please fill in all fields correctly.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    handleAuth(inputValues);
    toast.success("Success!", {
      position: toast.POSITION.TOP_CENTER,
    });

    setInputValues({});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <img className="mb-4 logo" src={Logo} alt="Logo" />
        <h3 className="mb-3">
          {isRegister ? "Register New Account" : "Please Log In"}
        </h3>

        {isRegister && (
          <>
            <div className="form-floating my-4">
              <input
                type="text"
                className="form-control"
                name="name"
                value={inputValues.name || ""}
                onChange={handleChange}
                placeholder="Name"
              />
              <label>Name</label>
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                name="location"
                value={inputValues.location || ""}
                onChange={handleChange}
                placeholder="Location"
              />
              <label>Location</label>
              {errors.location && (
                <p className="text-danger">{errors.location}</p>
              )}
            </div>
          </>
        )}

        <div className="form-floating my-4">
          <input
            type="text"
            className="form-control"
            name="email"
            value={inputValues.email || ""}
            onChange={handleChange}
            placeholder="Email"
          />
          <label>Email</label>
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>

        <div className="form-floating my-4">
          <input
            type="password"
            className="form-control"
            name="password"
            value={inputValues.password || ""}
            onChange={handleChange}
            placeholder="Password"
          />
          <label>Password</label>
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </div>

        <input
          type="submit"
          className="btn btn-primary w-50 py-2"
          value={isRegister ? "Register" : "Log In"}
        />

        <p className="mt-3 mb-3 switch" onClick={handleClick}>
          {isRegister
            ? "Already a member? Login here."
            : "Don't have an account? Register here."}
        </p>

        <p className="mt-5 mb-3 text-body-secondary">© 2024 Bosek</p>
      </form>
    </>
  );
};

export default Form;
