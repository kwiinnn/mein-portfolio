import '../styles/sections.css';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
  delay?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, className = '', children, delay = '0s' }) => {
  return (
    <section id={id} className={`card fade-in-up section ${className}`} style={{ animationDelay: delay }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
