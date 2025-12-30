import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error } = useSelector(state => state.auth);

  const submit = async (e) => {
    e.preventDefault();

    const result = await dispatch(loginUser({ email, password }));

    // navigate only if login is successful
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={submit}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-xl mb-4 font-bold text-center">
          Login
        </h2>

        <input
          type="email"
          className="border p-2 w-full mb-3 rounded"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-2 w-full mb-3 rounded"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        <button className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700">
          Login
        </button>

        {/* Signup Redirect */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
