import { Routes, Route } from "react-router-dom";
import "./App.scss";
import team from "./data/Data";
import EmployeeCard from "./Components/Employees/EmployeeCard";
import Nav from "./Components/Nav/Nav";
import Profile from "./Containers/Profiles";

const App = () => {
  const employeeJSX = team.map((employee) => (
    <EmployeeCard name={employee.name} role={employee.role} id={employee.id} />
  ));

  return (
    <>
      <section className="app">
        <Nav />
        <h1 className="app__title">Ticket Tracker</h1>
      </section>
      <Routes>
        <Route path="/" element={employeeJSX} />
        <Route
          path="/profile/:employeeId"
          element={<Profile employees={team} />}
        />
      </Routes>
    </>
  );
};

export default App;
