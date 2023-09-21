import '../styles/Gallery.scss'

const Gallery = () => {
    const CardsArray = [
        {
          texto:"DEEP EARTH",
          img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-deep-earth_mjfqfn.jpg",
          imgMobile:"https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975205/image-deep-earth_cwb2vl.jpg",
          id:1
        },
        {
          texto:"NIGHT ARCADE",
          img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-night-arcade_omscsq.jpg",
          imgMobile:"https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975208/image-night-arcade_epvbi0.jpg",
          id:2
        },
        {
          texto:"SOCCER TEAM VR",
          img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-soccer-team_b2ewdb.jpg",
          imgMobile:"https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975209/image-soccer-team_xwhi7t.jpg",
          id:3
        },
        {
          texto:"THE GRID",
          img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-grid_ybaevw.jpg",
          imgMobile:"https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975207/image-grid_c9qjwl.jpg",
          id:4
        },
        {
          texto:"FROM UP ABOVE VR",
          img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-from-above_rjb74p.jpg",
          imgMobile:"https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975206/image-from-above_sgnvjc.jpg",
          id:5
        },
        {
          texto:"POCKET BOREALIS",
          img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-pocket-borealis_qdh021.jpg",
          imgMobile:"https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975208/image-pocket-borealis_dydvsd.jpg",
          id:6
        },
        {
          texto: "THE CURIOSITY",
          img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-curiosity_a0vjmj.jpg",
          imgMobile:"https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975205/image-curiosity_hgzx1u.jpg",
          id:7
        },
        {
          texto: "MAKE IT FISHEYE",
          img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-fisheye_xuvrwt.jpg",
          imgMobile:"https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975206/image-fisheye_qgrewa.jpg",
          id:8
        },
    ]

    return (
      <section className="gallery-container">
        <div className="top-wrapper">
          <h1>OUR CREATIONS</h1>
          <button id="see-all-btn">SEE ALL</button>
        </div>
        <div className="card-container">
            {
              CardsArray.map(card => (
                <div className="card">
                  <picture>
                    <source media="(min-width: 1200px)" srcSet={card.img} />
                    <img src={card.imgMobile} alt="image card" />
                  </picture>
                  <h3 className='card__title'>{card.texto}</h3>
                </div>
              ))
            } 
        </div>
      </section>
    )
  }
  
  export default Gallery
  