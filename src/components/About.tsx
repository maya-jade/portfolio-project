import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`about-me ${isVisible ? 'animate-in' : ''}`} id="about">
      <h2 className="section__title section__title--about">About me</h2>
      <p className="section__subtitle section__subtitle--about">Senior Software Engineer | Cybersecurity Student</p>
      <div className="about-me__body">
        <p>
          I am currently unemployed and working on completing my B.S. in Cybersecurity and Information Assurance by 2026, 
          with a growing focus on offensive security through hands-on labs, CTF platforms like Hack The Box, and real-world 
          attack simulation environments.
        </p>
        <p>
          As an professional software engineer with over 5 years of experience, I specialize in building custom solutions 
          tailored to drive business success. My skills span front-end and back-end development, including expertise in Python, 
          JavaScript/Typescript, React.js, Next.js, and scalable architectures. I've had the privilege of contributing to 
          diverse projects—from dynamic web applications to enterprise-grade eCommerce platforms—through my work with companies 
          like Encentiv Energy and my freelance ventures.
        </p>
        <p>
          You can also view my full résumé <a href="/portfolio-project/resume.docx">here</a>.
        </p>
      </div>
      <img src="/portfolio-project/body.jpg" alt="selfie" className="about-me__img" />
    </section>
  );
};

export default About;
