import "../../Components/Employees/EmployeeCard.scss";
import { useState } from "react";

type teamProp = {
  id?: number;
  name: string;
  role: string;
};

const EmployeeCard = ({ name, role }: teamProp) => {
  const [ticket, setTicket] = useState(0);

  const ticketCountPlus = () => {
    setTicket(ticket + 1);
  };

  const ticketCountMinus = () => {
    if (ticket === 0) {
      return 0;
    } else {
      setTicket(ticket - 1);
    }
  };

  return (
    <div className="card">
      <div className="employee__container">
        <h2>Name:{name}</h2>
        <button onClick={ticketCountPlus}>+</button>
        <p>Ticket: {ticket} </p>
        <button onClick={ticketCountMinus}>-</button>
        <h2>Role:{role}</h2>
      </div>
    </div>
  );
};

export default EmployeeCard;
