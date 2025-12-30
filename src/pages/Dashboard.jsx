import Header from "../components/Header";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">Welcome 👋</h2>
        <p>Select an option from the menu to continue.</p>
      </div>
    </>
  );
}
