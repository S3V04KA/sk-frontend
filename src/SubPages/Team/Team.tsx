import TeamCard from "../../Components/Card/TeamCard"
import './Team.scss';

function Team({team}: {team: {id: number, avatar: string, name: string, roles: string}[]}) {
  return (
    <div className="team">
      {team.map((member) => (
        <TeamCard
          key={member.id}
          avatar={member.avatar}
          name={member.name}
          roles={member.roles}
        />
      ))}
    </div>
  )
}

export default Team