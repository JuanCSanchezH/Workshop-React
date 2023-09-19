import React from 'react'
import "../styles/Content.scss"

const Content = () => {
  return (
    <div className="content-container">
        <div className="content-container__image-container">
<img src="https://res.cloudinary.com/di90urdxw/image/upload/v1694969034/Realidad_virtual_qozrsj.png"alt="banner image" />
        </div>
        <article className="content-container__article">
            <h2 className="content-container__article--title">
                THE LEADER IN
                INTERACTIVE VR</h2>
                <p className= "content-container__article--text">
                The leader in interactive VR sets the standard for immersive experiences. With cutting-edge technology and a commitment to innovation.</p>
        </article>
    </div>
  )
}

export default Content