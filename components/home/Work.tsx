import styles from '../../styles/home/Work.module.css'
import { PlainContainer } from '../common/PlainContainer'
import { ProjectCard } from '../common/ProjectCard'
import { SectionContainer } from '../layout/SectionContainer'

export const Work = () => {
  return(
    <PlainContainer>
      <section className={styles.workSection} id="work-section">
        <h1>A Few Things I&apos;ve Built</h1>
        <div className={styles.workLayout}>
          <ProjectCard
            projectName='Portfolio Website'
            projectDesc='My portfolio website and the various iterations it has gone through'
            projectTechnologies={['Next.js', 'React', 'TypeScript', 'CSS', 'HTML', 'Vercel']}
            imageLink='/images/mockups/portfolioWebsite.gif'
            imageAlt='Portfolio website mockups mobile'
            githubLink='https://github.com/karnnivore/nick-chinsen-website'
            projectLink='https://nick-chinsen-website.vercel.app/'
          />
        </div>
      </section>
    </PlainContainer>
  )
}