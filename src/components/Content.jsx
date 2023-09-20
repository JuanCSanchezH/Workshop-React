import imageContent from "../images/desktop/image-interactive.jpg"
import imageContentMobile from "../images/mobile/image-interactive.jpg"
import "../styles/Content.scss"


const Content = () => {
  return (
    <div className="content-container">
      <picture className="content-container__image-container">
        <source media="(min-width: 1200px)" srcSet={imageContent} />
        <img src={imageContentMobile} alt="banner image" />
      </picture>
      <article className="content-container__article">
        <h2 className="content-container__article--title">
          THE LEADER IN INTERACTIVE VR 
        </h2>
        <p className= "content-container__article--text">
        Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
        </p>
      </article>
    </div>
  )
}

export default Content