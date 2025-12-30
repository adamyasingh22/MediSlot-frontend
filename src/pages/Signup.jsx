import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    await dispatch(registerUser(form));
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={submit} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-3">Signup</h2>

        <input name="name" placeholder="Name" className="input" onChange={handleChange} />
        <input name="email" placeholder="Email" className="input" onChange={handleChange} />
        <input name="phone" placeholder="Phone" className="input" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="input" onChange={handleChange} />

        <button className="bg-blue-600 text-white w-full mt-3 p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
