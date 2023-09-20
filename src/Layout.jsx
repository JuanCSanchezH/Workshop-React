import {Outlet, Link} from 'react-router-dom'
import { Box, Flex, Image } from '@chakra-ui/react'
import './styles/Navbar.scss'
import menu from "./images/icon-hamburger.svg"

const Layout = () => {
  return (
    <>
        {/* <Flex id='nav-box'>
            <Image position="absolute" zIndex="-1" width="100%" src='https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975163/image-hero_ijfvzd.jpg'></Image>
            <Link to="/home"><Image position="absolute" zIndex="1" src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975297/logo_bpkpz4.svg" alt=""></Image></Link>
            <Box position="absolute" zIndex="1">
                <p><Link to="/about">About</Link></p>
                <p><Link to="/careers">Careers</Link></p>
                <p><Link to="/events">Events</Link></p>
                <p><Link to="/products">Products</Link></p>
                <p><Link to="/support">Support</Link></p>
            </Box>
        </Flex> */}
        <nav className='nav-box'>
            <div className='nav-box__header'>
                <figure><Link to="/home"><img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975297/logo_bpkpz4.svg" alt="" /></Link></figure>
                <img className= "nav-box__header--menu"src={menu} alt="" />
                <div className='nav-box__header--links'>
                    <p><Link to="/about">About</Link></p>
                    <p><Link to="/careers">Careers</Link></p>
                    <p><Link to="/events">Events</Link></p>
                    <p><Link to="/products">Products</Link></p>
                    <p><Link to="/support">Support</Link></p>
                </div>
                
            </div>
            
            <div className='nav-box__content'>
                <p>INMERSIVE EXPERIENCES THAT DELIVER</p>
            </div>
        </nav>
        <Outlet/>
    </>
  )
}

export default Layout