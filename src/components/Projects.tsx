import { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const clientProjects: Project[] = [
  {
    title: 'MobileQubes.com',
    description: 'Custom WordPress site developed from Figma designs using Blocksy. Focused on mobile-first UX and performance optimization.'
  },
  {
    title: 'RenLasan.com',
    description: 'Elementor-based WordPress site for an independent YouTube vlogger. Delivered flexible content layout with built-in SEO enhancements.'
  },
  {
    title: 'ExclusiveVIPTaxi.com',
    description: 'Multilingual landing page built with Bootstrap. Features user language toggle and geo-targeted metadata for SEO.'
  },
  {
    title: 'BungalowSavings.com',
    description: 'WooCommerce WordPress storefront. Responsible for backend upkeep, plugin stack, and custom UI styling.'
  }
];

const personalProjects: Project[] = [
  {
    title: 'Blackjack Game',
    description: 'A fully functional vanilla JavaScript game. Implements real-time score tracking and basic game logic.',
    link: 'https://github.com/maya-jade/blackjack-game'
  },
  {
    title: 'Login Page',
    description: 'Responsive login form with social button styling and accessible form controls using semantic HTML/CSS.',
    link: 'https://github.com/maya-jade/login-page'
  },
  {
    title: 'HognoseQueen.com',
    description: 'My (archived) personal business site built to market and sell reptiles. Custom-built and optimized for small business sales.',
    link: 'https://github.com/maya-jade/hognose-queen-website'
  },
  {
    title: 'This Website!',
    description: 'A portfolio site built with hand-coded HTML and CSS, designed for performance and clarity. Deployed via GitHub Pages.',
    link: 'https://github.com/maya-jade/portfolio-project'
  }
];

const cybersecurityProjects: Project[] = [
  {
    title: 'Hack The Box Writeups',
    description: 'Documented walkthroughs on various HTB machines including web, Linux, Windows, and AD environments.',
    link: 'https://github.com/maya-jade/htb-writeups'
  }
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`projects-section ${isVisible ? 'animate-in' : ''}`} id="work">
      <h2 className="section__title--work section__title section__title--services">Web Development Projects</h2>
      <p>
        <em>
          Note: The projects below showcase some of my early development work completed while I was first learning to code. 
          My more recent, professional experience is reflected in the case studies above.
        </em>
      </p>
      <p>
        <em>
          Please note that several client sites are no longer live due to inactivity or project handoff. Screenshots and 
          archives are included within my freelance case studies for reference.
        </em>
      </p>

      <h3>Client Projects</h3>
      <ul className="project-list">
        {clientProjects.map((project, index) => (
          <li key={index}>
            <strong>{project.title}</strong> – {project.description}
          </li>
        ))}
      </ul>

      <h3>Personal Projects</h3>
      <ul className="project-list">
        {personalProjects.map((project, index) => (
          <li key={index}>
            <strong>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </strong> – {project.description}
          </li>
        ))}
      </ul>

      <h2 className="project-list-header section__title section__title--services">Cybersecurity Projects</h2>
      <p>
        As part of my pivot into cybersecurity, I've been actively participating in red team labs, Hack The Box challenges, 
        and CTF-style scenarios. <br />These projects focus on areas such as enumeration, privilege escalation, web app 
        exploitation, and Active Directory attacks.
      </p>
      <ul className="project-list">
        {cybersecurityProjects.map((project, index) => (
          <li key={index}>
            <strong>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </strong> – {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
