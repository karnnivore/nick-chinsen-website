import styles from '../../styles/common/CareerCard.module.css'

export const CareerCards = ({selected} : any) => {

  const renderBoxhub = () => {
    return (
      <div className={styles.careerCard}>
        <h3>Full Stack Engineer <span>@ Boxhub</span></h3>
        <h4>May 2022 - Present</h4>
        <h4>Developing logistics application to simplify the process of buying and selling shipping containers</h4>
        <h4>(React, Next.js, .NET, TypeScript, Tailwind, CSS, HTML, SQL, Github actions CI)</h4>
        <ul>
      
        </ul>
      </div>
    )
  }

  const renderAbledocs = () => {
    return (
      <div className={styles.careerCard}>
        <h3>Intermediate Full Stack Engineer<span> @ Abledocs</span></h3>
        <h4>January 2022 - May 2022</h4>
        <h4>Developed components for the ADAlign online education portal in React and .NET</h4>
        <h4>(React, .NET, TypeScript, Redux, NoSQL, Azure, Auth0, Stripe)</h4>
        <ul>
          <li>Developed login and registration flow integrating Auth0, using JWT tokens for user authentication</li>
          <li>Created billing components, integrating Stripe API to accept payments in the application</li>
          <li>Engineered reusable React components with a focus on accessibility</li>
          <li>Develop .Net API REST endpoints to support business needs</li>
          <li>Responsible for production build deployements using Azure pipelines</li>
          <li>Interact with a document NoSQL database, creating documents when needed</li>
        </ul>
      </div>
    )
  }

  const renderLBC = () => {
    return (
    <div className={styles.careerCard}>
      <h3>Full Stack Engineer <span>@ LBC IT</span></h3>
      <h4>April 2021 - January 2022</h4>
      <h4>Developed enterprise web applications for TELUS & TIFF and other clients</h4>
      <h4>(React, .NET, TypeScript, Bootstrap, CSS, HTML, SQL, Git, SQL Server, Azure, PHP, Ruby)</h4>
      <ul>
        <li>
          Develope reusable web components using Typescript & Bootstrap for enterprise React/.Net application
        </li>
        <li>
          Debuged and created solutions for problems within existing codebase   
        </li>
        <li>
          Created REST APIs using .NET to connect backend & frontend
        </li>
        <li>
          Designed repository functions to efficiently query database tables
        </li>
        <li>
          Updated legacy websites using HTML, CSS, Typescript, PHP, and Ruby
        </li>
        <li>
          Interacted with business partners gathering needs and feedback for components
        </li>
      </ul>
    </div>
    )
  }

  const renderFreelance = () => {
    return (
    <div className={styles.careerCard}>
      <h3>Freelance Developer</h3>
      <h4>April 2018 - Present</h4>
      <h4>Design and develop websites for local clients implementing accessible, human-centred designs</h4>
      <h4>(React, Next.js, Typescript, Javascript, HTML, CSS, Figma, AWS, CMS)</h4>
      <ul>
        <li>
          Full Stack development using mainly React 
        </li>
        <li>
          Extensive knowledge in website hosting, domains, and website builders
        </li>
        <li>
          Fantastic eye for user-friendliness regarding UI/UX for websites
        </li>
        <li>
          Used CMS to meet project needs (WordPress, WooCommerce, Webflow, Shopify)
        </li>
      </ul>
    </div>
    )
  }

  const renderAxcys = () => {
    return (
    <div className={styles.careerCard}>
      <h3>Frontend Engineer co-op <span>@ Axcys</span></h3>
      <h4>Jan 2021 - Apr 2021</h4>
      <h4>Developed a web application for the build-to-order furniture supply chain industry</h4>
      <h4>(React, Redux, CSS, HTML, .NET, MySQL, Axios, Git, Microsoft Azure, Visual Paradigm)</h4>
      <ul>
        <li>
          Design, develop, and test HTML, CSS, JavaScript and React.JS code that meets accessibility and browser standards for websites.
        </li>
        <li>
          Modelled and created MySQL database for storage of key application data. 
        </li>
        <li>
          Create and utilise REST APIs for interactions with the database and backend server processes.
        </li>
        <li>
          Actively participate in project meetings, working closely with project stakeholders, designers and other developers to discover project requirements, goals, and required functionalities.
        </li>
      </ul>
    </div>
    )
  }

  
  const renderCrue = () => {
    return (
    <div className={styles.careerCard}>
      <h3>Web Developer & Designer <span>@ Crue TV</span></h3>
      <h4>May 2020 - Dec 2020</h4>
      <h4>Designed and implemented an online education platform for youths in the GTA, with the Red Cross.</h4>
      <h4>(Figma, AWS EC2, AppStream 2.0, Adobe Creative Suite, CMS)</h4>
      <ul>
        <li>
          Created a low-latency Adobe Creative Cloud application streaming service using AWS AppStream 2.0 which provided on-demand instances directly to students browsers.
        </li>
        <li>
          Deployed websites with AWS EC2 servers running Linux and utilising Route 53 for DNS management.
        </li>
        <li>
          Designed websites for the project using Figma for the wireframes, implementing them using a CMS (WordPress)
        </li>
      </ul>
    </div>
    )
  }
  return (
    <>
      {selected === 1 && renderBoxhub()}
      {selected === 2 && renderAbledocs()}
      {selected === 3 && renderLBC()}
      {selected === 4 && renderAxcys()}
      {selected === 5 && renderCrue()}
      {selected === 6 && renderFreelance()}
    </>
  )
}