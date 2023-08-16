import "./App.scss";
import team from "./data/Data";
import EmployeeCard from "./Components/Employees/EmployeeCard";

const App = () => {
  const employeeJSX = team.map((employee) => (
    <EmployeeCard name={employee.name} role={employee.role} />
  ));

  return (
    <section className="app">
      <h1>Ticket Tracker</h1>
      {employeeJSX}
    </section>
  );
};

export default App;
