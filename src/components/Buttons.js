import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import person from './Data'

function Buttons() {
    const envelope = <FontAwesomeIcon icon={faEnvelope}/>
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />

  return (
    <div className="btn">
        <a href={person.email}
            target="_blank"
            className="email--btn">
            <span className='btn--icon'>{envelope}</span>
            Email
        </a>
        <a href={person.linkedin} 
            target="_blank"
            className="linkedin--btn">
            <span className='btn--icon'>{linkedin}</span>
            Linkedin
        </a>
    </div>
  )
}

export default Buttons