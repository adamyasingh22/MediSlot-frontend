import Header from "../components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointments } from "../redux/appointmentSlice";

export default function MyAppointments() {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.appointment);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, []);

  return (
    <>
      <Header />
      <div className="p-6 grid gap-4 md:grid-cols-2">
        {list.map(item => (
          <div key={item._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{item.doctorType}</h3>
            <p>Date: {item.date?.slice(0, 10)}</p>
            <p>Time: {item.time}</p>
            <p>{item.comments}</p>
          </div>
        ))}
      </div>
    </>
  );
}
