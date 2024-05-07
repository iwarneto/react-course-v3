import {links} from '../../../data.jsx'

function Links() {
  return (
    <div className='links'>
      {links.map(link => {
        const {id, url, text} = link
        return (
          <a key={id} href={url}>{text}</a>
        )
      })}
    </div>
  )
}

export default Links