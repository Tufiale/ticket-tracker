import SearchBox from "../../Components/SearchBox/SearchBox";
import EmployeeCard from "../../Components/Employees/EmployeeCard";
import TeamType from "../../Types/Types";
import { FormEvent, useState } from "react";

type CardContainerProps = {
  teamMembers: TeamType[];
};

const TicketCardLayout = ({ teamMembers }: CardContainerProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const inputToLower = event.currentTarget.value.toLowerCase();
    setSearchTerm(inputToLower);
  };

  const filteredMembers = teamMembers.filter((teamMember) => {
    const nameMatches = teamMember.name.toLowerCase().includes(searchTerm);

    return nameMatches;
  });

  return (
    <div className="team-card">
      <SearchBox
        key="SearchBox"
        label="Search Tickets Here:"
        handleInput={handleInput}
        searchTerm={searchTerm}
      />

      <div>
        {filteredMembers.map((filteredTeamMember) => (
          <EmployeeCard employees={[filteredTeamMember]} />
        ))}
      </div>
    </div>
  );
};
export default TicketCardLayout;
