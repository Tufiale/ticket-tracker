import "../../Components/Employees/EmployeeCard.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

type teamProp = {
  id: number;
  name: string;
  role: string;
};

const EmployeeCard = ({ name, role, id }: teamProp) => {
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
    <div key={id} className="card">
      <div className="employee__container">
        <h2>Name:{name}</h2>
        <button onClick={ticketCountPlus}>+</button>
        <p>Ticket: {ticket} </p>
        <button onClick={ticketCountMinus}>-</button>
        <h2>Role:{role}</h2>
        <Link to={`/profile/${id}`} key={id}>
          <h2>Click here for more info!</h2>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;
