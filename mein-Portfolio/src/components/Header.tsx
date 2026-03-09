import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { socialLinks } from '../data/portfolio';
import '../styles/header.css';

interface HeaderProps {
  scrollToSection?: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const { isDark, toggleTheme } = useTheme();
  const { lang, setLang } = useLanguage();

  const handleNavClick = (id: string) => {
    scrollToSection?.(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="brand">
        <div className="logo">CS</div>
        <div className="brand-text">
          <div className="brand-name">Charles Solomon</div>
          <div className="brand-title">Frontend Developer</div>
        </div>

        <div className="socials">
          <a href={socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <img src="/assets/LinkedIn.svg" alt="LinkedIn" />
          </a>
          <a href={socialLinks.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <img src="/assets/Github.svg" alt="GitHub" />
          </a>
          <a href={socialLinks.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <img src="/assets/Facebook.svg" alt="Facebook" />
          </a>
          <a href={socialLinks.email} aria-label="Email">
            <img src="/assets/Google.svg" alt="Email" />
          </a>
        </div>
      </div>

      <nav className="nav">
        <a href="#about" onClick={() => handleNavClick('about')}>
          About
        </a>
        <a href="#skills" onClick={() => handleNavClick('skills')}>
          Skills
        </a>
        <a href="#hobbies" onClick={() => handleNavClick('hobbies')}>
          Hobbies
        </a>
        <a href="#contact" onClick={() => handleNavClick('contact')}>
          Contact
        </a>
        <a href="/certifications" className="btn btn-ghost" style={{ color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginLeft: '8px' }}>
          Certs
        </a>
        <button
          className="lang-toggle"
          onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
          aria-label="Switch language"
        >
          {lang === 'en' ? 'DE' : 'EN'}
        </button>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
};
