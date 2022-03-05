import person from './Data'

function Content() {
  return (
    <div className="content">
        <h3 className="content--title">About</h3>
        <p className='content--text'>{person.about}</p>
        <h3 className="content--title">Interests</h3>
        <p className='content--text'>{person.interest}</p>
    </div>
  )
}

export default Content