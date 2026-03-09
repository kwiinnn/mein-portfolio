import '../styles/sections.css';

interface HobbyItem {
  name: string;
  icon: string;
  description: string;
}

interface HobbiesProps {
  items: HobbyItem[];
}

export const Hobbies: React.FC<HobbiesProps> = ({ items }) => {
  return (
    <div className="hobbies">
      {items.map((hobby) => (
        <div key={hobby.name} className="hobby">
          <div className="icon">{hobby.icon}</div>
          <div style={{ fontWeight: 600 }}>{hobby.name}</div>
          <div className="muted">{hobby.description}</div>
        </div>
      ))}
    </div>
  );
};
