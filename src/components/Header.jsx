import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">MediSlot</h1>

      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/book">Book</Link>
        <Link to="/appointments">My Appointments</Link>
        <Link to="/services">Services</Link>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    </div>
  );
}
