import img from '../images/headshot.jpg'
import person from './Data'

function Header() {
  return (
    <header className='header'>
        <img 
          className='header--img' 
          src={img} alt="professional headshot"
        />
        <h1 className='header--name'>{person.name}</h1>
        <h3 className='header--jobTitle'>{person.jobTitle}</h3>
        <a 
          href={person.url} 
          target="_blank" 
          className='header--website'>
          {person.webLink}
        </a>
    </header>
  )
}

export default Header