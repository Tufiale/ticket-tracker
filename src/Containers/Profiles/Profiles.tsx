import TeamType from "../../Types/Types";
import { useParams } from "react-router-dom";

type profile = {
  employees: TeamType[];
};

const Profile = ({ employees }: profile) => {
  const { employeeId } = useParams();

  const employee = employees.find(
    (employee) => employee.id === Number(employeeId)
  );

  return (
    <section className="profile__container">
      <h1 className="profile__name">Name: {employee?.name} </h1>
      <h2 className="profile__role">Role: {employee?.role}</h2>
      <ul>
        <li>Experience:{employee?.profile.experience} </li>
        <li>Department:{employee?.profile.department}</li>
        <li>Tech Stack:{employee?.profile.techstack.join(",")}</li>
      </ul>
      <div>
        <img src={employee?.profile.profilePicture} alt="Profile Picture" />
      </div>
    </section>
  );
};

export default Profile;
