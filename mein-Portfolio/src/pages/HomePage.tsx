import { useRef } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { TechStack } from '../components/TechStack';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { Hobbies } from '../components/Hobbies';
import { ContactForm } from '../components/ContactForm';
import { CertificationsGrid } from '../components/CertificationsGrid';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { skills, techStack, experience, education, hobbies, certifications } from '../data/portfolio';

export const HomePage: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef}>
      <Header scrollToSection={scrollToSection} />

      <div className="container" style={{ marginTop: '34px', marginBottom: '40px' }}>
        <Hero
          greeting={t.hero.greeting}
          subtitle={t.hero.subtitle}
          focusLabel={t.hero.focus}
          focusText={t.hero.focusText}
          locationLabel={t.hero.location}
          locationText={t.hero.locationText}
          featuredProjectLabel={t.hero.featuredProject}
          featuredProjectName={t.hero.featuredProjectName}
          profileName={t.profile.name}
          profileTitle={t.profile.title}
        />

        <main>
          <Section id="about" title={t.sections.about} delay="0.2s">
            <p className="muted">{t.sections.aboutText}</p>
          </Section>

          <Section id="techstack" title={t.sections.techStack} delay="0.3s">
            <TechStack items={techStack} />
          </Section>

          <Section id="experience" title={t.sections.experience} delay="0.4s">
            <Experience items={experience} />
          </Section>

          <Section id="certifications" title={t.sections.certifications} delay="0.5s">
            <CertificationsGrid items={certifications.slice(0, 3)} />
            <a href="/certifications" className="btn btn-ghost" style={{ marginTop: '10px' }}>
              {t.sections.viewAll}
            </a>
          </Section>

          <Section id="education" title={t.sections.education} delay="0.6s">
            <Education items={education} />
          </Section>

          <Section id="skills" title={t.sections.skills} delay="0.7s">
            <Skills items={skills} />
          </Section>

          <Section id="hobbies" title={t.sections.hobbies} delay="0.8s">
            <Hobbies items={hobbies} />
          </Section>

          <Section id="contact" title={t.sections.contact} delay="0.9s">
            <p className="muted">{t.sections.contactText}</p>
            <ContactForm
              clearLabel={t.buttons.clear}
              sendLabel={t.buttons.sendMessage}
              nameLabel={t.form.name}
              emailLabel={t.form.email}
              messageLabel={t.form.message}
            />
          </Section>

          <div className="footer muted">{t.footer}</div>
        </main>
      </div>
    </div>
  );
};
