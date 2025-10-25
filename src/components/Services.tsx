import { Service } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const servicesData: Service[] = [
  {
    title: 'Front-End Engineering',
    description: 'Scalable, accessible UI development using HTML, CSS, JavaScript, React.js, and TypeScript. Strong focus on performance, responsive design, and modular architecture.'
  },
  {
    title: 'Content Architecture',
    description: 'Enterprise CMS implementation and optimization (WordPress, Jahia). Experience with multi-region publishing workflows, localization, and SEO enhancements.'
  },
  {
    title: 'eCommerce Platforms',
    description: 'Experience with Shopify and WooCommerce. Delivered multi-storefront systems and custom integrations at Encentiv Energy and in freelance contracts.'
  },
  {
    title: 'Offensive Cybersecurity',
    description: 'Actively training in offensive security, CTF platforms (HTB), red team labs, and penetration testing methodologies. Pursuing a B.S. in Cybersecurity and Information Assurance (expected 2026).'
  }
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`my-services ${isVisible ? 'services-visible' : ''}`} id="services">
      <h2 className="section__title section__title--services">Technical Expertise</h2>
      <div className="services">
        {servicesData.map((service, index) => (
          <div key={index} className="service">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <a href="#work" className="btn">My Work</a>
    </section>
  );
};

export default Services;
