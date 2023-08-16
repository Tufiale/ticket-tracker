import "./App.css";
import team from "./data/Data";
import EmployeeCard from "./Components/Employees/EmployeeCard";

const App = () => {
  const employeeJSX = team.map((employee) => (
    <EmployeeCard name={employee.name} role={employee.role} />
  ));

  return employeeJSX;
};

export default App;
