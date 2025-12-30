import { useEffect, useState } from "react";
import api from "../api/api";
import Header from "../components/Header";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get("/services").then(res => setServices(res.data));
  }, []);

  return (
    <>
      <Header />
      <div className="p-6 grid md:grid-cols-3 gap-4">
        {services.map(s => (
          <div key={s._id} className="bg-white p-4 shadow rounded">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm">{s.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
