import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import person from "./Data"


function Footer() {
  const github = <FontAwesomeIcon icon={faGithubSquare}/>  

  return (
    <footer className='footer'>
        <a 
          href={person.github} 
          target="_blank">
          <span className='footer--icon'>{github}</span>
        </a>
    </footer>
  )
}

export default Footer