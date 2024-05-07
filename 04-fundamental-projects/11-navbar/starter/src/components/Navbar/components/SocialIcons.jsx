import {social} from '../../../data'

function SocialIcons() {
  return (
    <div className='social-links'>
      {social.map(socialLink => {
        const {id, url, icon} = socialLink
        return (
          <a key={id} href={url}>
            {icon}
          </a>
        )
      })}
    </div>
  )
}

export default SocialIcons