import EmployeeCard from "../../Components/Employees/EmployeeCard";
import TeamType from "../../Types/Types";

type HomeProps = {
  teams: TeamType[];
};

const Home = ({ teams }: HomeProps) => {
  console.log(teams);
  return (
    <>
      {teams.map((team: TeamType) => (
        <EmployeeCard employee={team} />
      ))}
    </>
  );
};

export default Home;
