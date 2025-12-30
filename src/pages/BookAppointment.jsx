import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { createAppointment } from "../redux/appointmentSlice";
import { useState } from "react";

export default function BookAppointment() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    dispatch(createAppointment(data));
    alert("Appointment booked");
  };

  return (
    <>
      <Header />
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Book Appointment</h2>

        <form onSubmit={submit} className="space-y-3">
          <input type="date" onChange={e => setForm({...form, date: e.target.value})} className="input" />
          <input type="time" onChange={e => setForm({...form, time: e.target.value})} className="input" />

          <select className="input" onChange={e => setForm({...form, doctorType: e.target.value})}>
            <option>Select Doctor Type</option>
            <option>Cardiologist</option>
            <option>Dermatologist</option>
            <option>General Physician</option>
          </select>

          <textarea
            placeholder="Comments"
            className="input"
            onChange={e => setForm({...form, comments: e.target.value})}
          />

          <input type="file" onChange={e => setForm({...form, report: e.target.files[0]})} />

          <button className="bg-blue-600 text-white w-full p-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
