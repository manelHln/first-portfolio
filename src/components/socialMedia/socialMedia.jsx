import './socialMedia.css';

export default function SocialMedia() {
  return (
      <div className="socialMedias">
          <div className="socialMedias__container">
              <div className="socialMedias__icons">
                <i className='fa fa-github socialMedias__icons--link'></i>
                <i className='fa fa-twitter socialMedias__icons--link'></i>
                <i className='fa fa-linkedin socialMedias__icons--link'></i>
                <i className='fa fa-whatsapp socialMedias__icons--link'></i>
                <i className='fa fa-instagram socialMedias__icons--link'></i>
              </div>
              <div className="socialMedias__bar"></div>
          </div>
    </div>
  )
}
