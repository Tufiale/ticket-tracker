import { Routes, Route } from "react-router-dom";
import "./App.scss";
import team from "./data/Data";
import EmployeeCard from "./Components/Employees/EmployeeCard";
import Nav from "./Components/Nav/Nav";
import Profile from "./Containers/Profiles/Profiles";
import TicketCardLayout from "./Containers/Tickets/Tickets";

const App = () => {
  return (
    <>
      <section className="app">
        <Nav />
        <h1 className="app__title">Ticket Tracker</h1>
      </section>
      <Routes>
        <Route path="/" element={<EmployeeCard employees={team} />} />
        <Route
          path="/profile/:employeeId"
          element={<Profile employees={team} />}
        />
        <Route
          path="/#/ticket-tracker"
          element={<TicketCardLayout teamMembers={team} />}
        />
      </Routes>
    </>
  );
};

export default App;
