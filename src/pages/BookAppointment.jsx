import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { createAppointment } from "../redux/appointmentSlice";
import { useState } from "react";

export default function BookAppointment() {
  const [form, setForm] = useState({
    date: "",
    time: "",
    doctorType: "",
    comments: "",
    report: null,
  });

  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();

    // ✅ VALIDATION
    if (!form.date || !form.time || !form.doctorType) {
      setError("Please select date, time and doctor type.");
      return;
    }

    setError("");

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    dispatch(createAppointment(data));
    alert("Appointment booked successfully!");

    // reset form
    setForm({
      date: "",
      time: "",
      doctorType: "",
      comments: "",
      report: null,
    });
  };

  return (
    <>
      <Header />

      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Book Appointment</h2>

        <form onSubmit={submit} className="space-y-3">

          {/* ERROR MESSAGE */}
          {error && (
            <p className="text-red-600 bg-red-100 p-2 rounded">
              {error}
            </p>
          )}

          <input
            type="date"
            value={form.date}
            onChange={e => setForm({ ...form, date: e.target.value })}
            className={`input ${!form.date && error ? "border-red-500" : ""}`}
          />

          <input
            type="time"
            value={form.time}
            onChange={e => setForm({ ...form, time: e.target.value })}
            className={`input ${!form.time && error ? "border-red-500" : ""}`}
          />

          <select
            value={form.doctorType}
            onChange={e => setForm({ ...form, doctorType: e.target.value })}
            className={`input ${!form.doctorType && error ? "border-red-500" : ""}`}
          >
            <option value="">Select Doctor Type</option>
            <option>Cardiologist</option>
            <option>Dermatologist</option>
            <option>General Physician</option>
          </select>

          <textarea
            placeholder="Comments (optional)"
            className="input"
            value={form.comments}
            onChange={e => setForm({ ...form, comments: e.target.value })}
          />

          <input
            type="file"
            onChange={e =>
              setForm({ ...form, report: e.target.files[0] })
            }
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white w-full p-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
