import "./Card.scss";

function TeamCard({ avatar, name, roles }: { avatar: string; name: string; roles: string }) {
  return (
    <div className="team-card">
      <div
        className="avatar"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
      <div className="name">{name}</div>
      <div className="roles">{roles}</div>
    </div>
  );
}

export default TeamCard;
