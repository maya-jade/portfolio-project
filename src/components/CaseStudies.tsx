import { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const caseStudies: Project[] = [
  {
    title: 'eCommerce Platform: Encentiv Energy',
    description: 'Developed a scalable eCommerce multisite platform for a clean energy platform with integrated dynamic rebates, product filtering, and more.',
    caseStudy: '/portfolio-project/case-studies/Encentiv_Case_Study.docx'
  },
  {
    title: 'Content Management: Marriott Vacations Worldwide (Contract)',
    description: 'Led content engineering across global sites for brands including Marriott, Hyatt, and Sheraton.',
    caseStudy: '/portfolio-project/case-studies/MVW_Case_Study.docx'
  },
  {
    title: 'Freelance Web Development',
    description: 'Delivered end-to-end builds for small businesses and startups. Includes WordPress storefronts, multilingual landing pages, and custom themes.',
    caseStudy: '/portfolio-project/case-studies/Web_Dev_Case_Study.docx'
  }
];

const CaseStudies = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`case-studies-section ${isVisible ? 'animate-in' : ''}`} id="case-studies">
      <h2 className="section__title--work">Engineering Case Studies</h2>
      <p><em>These highlights showcase work across enterprise platforms, freelance projects, and custom development.</em></p>
      <ul className="project-list">
        {caseStudies.map((project, index) => (
          <li key={index}>
            <strong>{project.title}</strong> – {project.description}
            {project.caseStudy && (
              <>
                <br />
                <a href={project.caseStudy} target="_blank" rel="noopener noreferrer">
                  Read Case Study (DOCX)
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CaseStudies;
