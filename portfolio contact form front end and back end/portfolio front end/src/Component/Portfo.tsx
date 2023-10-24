
import { useState ,useEffect,} from 'react';
import { useLocation } from 'react-router-dom';
import Styles from './Porto.module.css'
import profilePicPng from '../Component/assets/profile-pic.png'
import githubPng from '../Component/assets/github.png'
import linkedInImg from '../Component/assets/linkedin.png'
import aboutPicPng from '../Component/assets/about-pic.jpg'
import experiencePng from '../Component/assets/experience.png'
import educationPng from '../Component/assets/education.png'
import arrowPng from '../Component/assets/arrow.png'
import checkMarkpng from '../Component/assets/checkmark.png'
import project1Png from '../Component/assets/project-1.png'
import project2Png from '../Component/assets/project-2.png'
import project3Png from '../Component/assets/project-3.png'
import emailPng from '../Component/assets/email.png'


export const Portfo = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  


 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  

  return (
    <>
      
      
      <section id={Styles.profile}>
        <div className={Styles.sectionPicContainer}>
          <img src={profilePicPng} alt="Elaiya Barathi profile picture" />
        </div>
        <div className={Styles.sectionText}>
          <p className={Styles.sectionTextP1}>Hello, I'm</p>
          <h1 className={Styles.title}>Elaiya Barathi</h1>
          <p className={Styles.sectionTextP2}>Frontend Developer</p>
          <div className={Styles.btnContainer}>
            <button
              // className={[styles.zero, styles.neumorphic].join(' ')}
              // "btn btnColor2"
              className={[Styles.btn, Styles.btnColor2].join(' ')}
            // onClick={()=> window.open('./assets/resume-example.pdf')}
            >
              Download CV
            </button>
            <button className={[Styles.btn, Styles.btnColor1].join(' ')}
            // onClick={() =>location.href = './#contact'}
            >
              Contact Info
            </button>
          </div>
          <div id={Styles.socialsContainer}>
            <img
              src={linkedInImg}
              alt="My LinkedIn profile"
              className={Styles.icon}
            // onClick={() => location.href='https://linkedin.com/'}
            />
            <img
              src={githubPng}
              alt="My Github profile"
              className={Styles.icon}

            />
          </div>
        </div>
      </section>
      <section id={Styles.about}>
        <p className={Styles.sectionTextP1}>Get To Know More</p>
        <h1 className={Styles.title}>About Me</h1>
        <div className={Styles.sectionContainer}>
          <div className={Styles.sectionPicContainer}>
            <img
              src={aboutPicPng}
              alt="Profile picture"
              className={Styles.aboutPic}
            />
          </div>
          <div className={Styles.aboutDetailsContainer}>
            <div className={Styles.aboutContainers}>
              <div className={Styles.detailsContainer}>
                <img
                  src={experiencePng}
                  alt="Experience icon"
                  className={Styles.icon}
                />
                <h3>Experience</h3>
                <p>2+ years <br />Frontend Development</p>
              </div>
              <div className={Styles.detailsContainer}>
                <img
                  src={educationPng}
                  alt="Education icon"
                  className={Styles.icon}
                />
                <h3>Education</h3>
                <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
              </div>
            </div>
            <div className={Styles.textContainer}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus sint
                delectus velit in eos quo officiis explicabo deleniti dignissimos.
                Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                reiciendis ea magnam? Nulla, impedit fuga!
              </p>
            </div>
          </div>
        </div>
        <img
          src={arrowPng}
          alt="Arrow icon"
          // className={[styles.zero, styles.neumorphic].join(' ')}
          className={[Styles.icon, Styles.arrow].join(' ')}
        // onClick={() => location.href='./#experience'}

        />
      </section>
      <section id={Styles.experience}>
        <p className={Styles.sectionTextP1}>Explore My</p>
        <h1 className={Styles.title}>Experience</h1>
        <div className={Styles.experienceDetailsContainer}>
          <div className={Styles.aboutContainers}>
            <div className={Styles.detailsContainer}>
              <h2 className={Styles.experienceSubTitle}>Frontend Development</h2>
              <div className={Styles.articleContainer}>
                <article>
                  <img
                    src={checkMarkpng}
                    alt="Experience icon"
                    className={Styles.icon}
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkpng}
                    alt="Experience icon"
                    className={Styles.icon}
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkpng}
                    alt="Experience icon"
                    className={Styles.icon}
                  />
                  <div>
                    <h3>SASS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkpng}
                    alt="Experience icon"
                    className={Styles.icon}
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkpng}
                    alt="Experience icon"
                    className={Styles.icon}
                  />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkpng}
                    alt="Experience icon"
                    className={Styles.icon}
                  />
                  <div>
                    <h3>Material UI</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className={Styles.detailsContainer}>
              <h2 className={Styles.experienceSubTitle}>Frontend Development</h2>
              <div className={Styles.articleContainer}>
                <article>
                  <img
                    src={checkMarkpng}
                    alt="Experience icon"
                    className={Styles.icon}
                  />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkpng}
                    alt="Experience icon"
                    className={Styles.icon}
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkpng}
                    alt="Experience icon"
                    className={Styles.icon}
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkpng}
                    alt="Experience icon"
                    className={Styles.icon}
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrowPng}
          alt="Arrow icon"
          className={[Styles.icon, Styles.arrow].join(' ')}

        // onClick= {() => location.href='./#projects' }
        />
      </section>
      <section id={Styles.projects}>
        <p className={Styles.sectionTextP1}>Browse My Recent</p>
        <h1 className={Styles.title}>Projects</h1>
        <div className={Styles.experienceDetailsContainer}>
          <div className={Styles.aboutContainers}>


            <div
              className={[Styles.detailsContainer, Styles.colorContainer].join(' ')}>

              <div className={Styles.articleContainer}>
                <img
                  src={project1Png}
                  alt="Project 1"
                  className={Styles.projectImg}
                />
              </div>
              {/* className= {[Styles.detailsContainer, Styles.colorContainer].join(' ')} */}
              <h2 className={[Styles.experienceSubTitle, Styles.projectTitle].join(' ')}>Project One</h2>
              <div className={Styles.btnContainer}>
              <a
      href="https://github.com/"  // Replace with your GitHub link
      className={[Styles.btn, Styles.btnColor2, Styles.projectBtn].join(' ')}
      target="_blank"  // Opens link in a new tab
      rel="noopener noreferrer"  // Security best practice when using target="_blank"
    >
      Github
    </a>
    <a
      href="https://example.com/"  // Replace with your Live Demo link
      className={[Styles.btn, Styles.btnColor2, Styles.projectBtn].join(' ')}
      target="_blank"  // Opens link in a new tab
      rel="noopener noreferrer"  // Security best practice when using target="_blank"
    >
      Live Demo
    </a>
              </div>
            </div>
            <div className={[Styles.detailsContainer, Styles.colorContainer].join(' ')}>
              <div className={Styles.articleContainer}>
                <img
                  src={project2Png}
                  alt="Project 2"
                  className={Styles.projectImg}
                />
              </div>
              <h2 className={[Styles.experienceSubTitle, Styles.projectTitle].join(' ')}>Project Two</h2>
              <div className={Styles.btnContainer}>
                <button
                  className={[Styles.btn, Styles.btnColor2, Styles.projectBtn].join(' ')}
                // onClick= {() => location.href='https://github.com/' }
                >
                  Github
                </button>
                <button
                  className={[Styles.btn, Styles.btnColor2, Styles.projectBtn].join(' ')}
                // onClick= {() => location.href='https://github.com/' }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className={[Styles.detailsContainer, Styles.colorContainer].join(' ')}>
              <div className={Styles.articleContainer}>
                <img
                  src={project3Png}
                  alt="Project 3"
                  className={Styles.projectImg}
                />
              </div>
              <h2 className={[Styles.experienceSubTitle, Styles.projectTitle].join(' ')}>Project Three</h2>
              <div className={Styles.btnContainer}>
                <button
                  className={[Styles.btn, Styles.btnColor2, Styles.projectBtn].join(' ')}
                // onClick= {() => location.href='https://github.com/' }
                >
                  Github
                </button>
                <button
                  className={[Styles.btn, Styles.btnColor2, Styles.projectBtn].join(' ')}
                // onClick= {() => location.href='https://github.com/' }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrowPng}
          alt="Arrow icon"
          className={[Styles.icon, Styles.arrow].join(' ')}
          onClick={() => window.location.href = './#contact'}
        />

      </section>
      <section id={Styles.Contact}>
        <p className={Styles.sectionTextP1}>Get in Touch</p>
        <h1 className={Styles.title}>Contact Me</h1>
        <div className={Styles.contactInfoUpperContainer}>
          <div className={Styles.contactInfoContainer}>
            <img
              src={emailPng}
              alt="Email icon"
              className={[Styles.icon, Styles.contactIcon, Styles.emailIcon].join(' ')}
            />
            <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
          </div>
          <div className={Styles.contactInfoContainer}>
            <img
              src={linkedInImg}
              alt="LinkedIn icon"
              className={[Styles.icon, Styles.contactIcon].join(' ')}
            />
            <p><a href="https://www.linkedin.com">LinkedIn</a></p>
          </div>
        </div>
      </section>
      
    
      <footer>
        <nav>
          <div className={Styles.navLinksContainer}>
            <ul className={Styles.navLinks}>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Elaiya Barathi. All Rights Reserved.</p>
      </footer>
    </>
  )
}
