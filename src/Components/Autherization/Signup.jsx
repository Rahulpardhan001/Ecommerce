import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { signupuser } from "../../Redux/actions/signupAction";


function Signup() {
  const dispatch = useDispatch();

//  useSelector((state)=> console.log(state))

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    firstname: "",
    phonenumber: "",
    password: "",
  });

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle form
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(signupuser(formData));
  };

  return (
    <>
      <div className="container">
        <div className="signup d-flex justify-content-center mt-5">
          <form onSubmit={handleForm} className="w-50 p-4 shadow-lg">
            <h2 className="text-center">Signup</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor=" username" className="form-label">
                Username
              </label>
              <input
                type="username"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                Firstname
              </label>
              <input
                type="firstname"
                className="form-control"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phonenumber" className="form-label">
                Phonenumber
              </label>
              <input
                type="text"
                className="form-control"
                id="phonenumber"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 font-monospace"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
