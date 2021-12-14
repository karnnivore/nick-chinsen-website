import styles from "../../styles/common/ProjectCard.module.css"
import Image from "next/image"
import GithubIcon from "../icons/GithubIcon"
import ExternalIcon from "../icons/ExternalIcon"

interface IProjectCardProps {
  projectName: string
  projectDesc: string
  projectTechnologies: string[]
  githubLink?: string
  projectLink?: string
  imageLink: string
  imageAlt: string
}
export const ProjectCard = ({
  projectName, 
  projectDesc, 
  projectTechnologies, 
  githubLink,
  projectLink,
  imageLink,
  imageAlt
}: IProjectCardProps) => {

  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={imageLink}
          height={400}
          width={650}
          alt={imageAlt}
        />
      </div>
      <div className={styles.textContainer}>
        <h4>Featured Project</h4>
        <h3>{projectName}</h3>
        <div className={styles.projectDescription}>
          <p>
            {projectDesc}
          </p>
        </div>
        <div className={styles.projectTechnologies}>
          {projectTechnologies.map((element) => {
            return (
              <span key={element}>{element} </span>
            )
          })}
        </div>
        <div className={styles.projectLinks}>
          <ul>
            <li>
              {githubLink ? <a href={githubLink} target="_blank" rel="noreferrer"><GithubIcon/></a> : <></>}
            </li>
            <li>
              {projectLink ? <a href={projectLink} target="_blank" rel="noreferrer"><ExternalIcon/></a> : <></>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}