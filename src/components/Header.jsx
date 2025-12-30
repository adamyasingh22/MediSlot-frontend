import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-800 text-white p-4 flex">
      <h1 className="font-bold">MediSlot</h1>

      <div className="ml-auto flex gap-4 items-center">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/book">Book</Link>
        <Link to="/appointments">My Appointments</Link>
        <Link to="/services">Services</Link>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    </div>
  );
}
