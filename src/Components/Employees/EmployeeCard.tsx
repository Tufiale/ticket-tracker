import "../../Components/Employees/EmployeeCard.scss";

type teamProp = {
  id?: number;
  name: string;
  role: string;
};

const EmployeeCard = ({ name, role }: teamProp) => {
  return (
    <div className="card">
      <div className="employee__container">
        <h2>Name:{name}</h2>
        <h2>Role:{role}</h2>
      </div>
    </div>
  );
};

export default EmployeeCard;
