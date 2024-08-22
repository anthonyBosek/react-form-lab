import { useState } from "react";

const useValidate = (inputValues, isRegister) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const { email, password } = inputValues;
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!password || !passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 6 characters long, contain a letter, a number, and a special character.";
    }

    if (isRegister && !inputValues.name) {
      newErrors.name = "Please enter your name.";
    }

    if (isRegister && !inputValues.location) {
      newErrors.location = "Please enter your location.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validate };
};

export default useValidate;
