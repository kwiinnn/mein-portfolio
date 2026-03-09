import '../styles/hero.css';

interface HeroProps {
  greeting: string;
  subtitle: string;
  focusLabel: string;
  focusText: string;
  locationLabel: string;
  locationText: string;
  featuredProjectLabel: string;
  featuredProjectName: string;
  profileName: string;
  profileTitle: string;
}

export const Hero: React.FC<HeroProps> = ({
  greeting,
  subtitle,
  focusLabel,
  focusText,
  locationLabel,
  locationText,
  featuredProjectLabel,
  featuredProjectName,
  profileName,
  profileTitle,
}) => {
  return (
    <section className="hero">
      <div className="card intro fade-in-up">
        <h1>{greeting}</h1>
        <p className="muted">{subtitle}</p>

        <div className="grid-2" style={{ marginTop: '18px' }}>
          <div>
            <h2>{focusLabel}</h2>
            <p className="muted">{focusText}</p>
          </div>
          <div>
            <h2>{locationLabel}</h2>
            <p className="muted">{locationText}</p>
          </div>
        </div>

        <a
          href="https://www.facebook.com/reel/746942924569357"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '18px', display: 'block' }}
          className="card featured-project"
        >
          <h2>{featuredProjectLabel}</h2>
          <p className="muted" style={{ margin: '6px 0 0 0' }}>
            {featuredProjectName}
          </p>
        </a>
      </div>

      <aside className="card profile fade-in-up" style={{ animationDelay: '0.1s' }}>
        <img className="avatar" src="/assets/gradpic-nobg.png" alt="Charles Solomon" />
        <div style={{ fontWeight: 700 }}>{profileName}</div>
        <div className="muted">{profileTitle}</div>
      </aside>
    </section>
  );
};
