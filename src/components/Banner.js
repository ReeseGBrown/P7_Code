import logo from '../assets/icon-left-font-monochrome-black.svg'
import '../styles/Banner.css'
import { Link } from 'react-router-dom'
function Banner() {
    return (
    <div className = 'groupomania-banner'>
        <Link to="/"><img src={logo} alt='groupomania logo' className = 'groupomania-banner-logo'/></Link>
        <div className = 'signupLogin'>
            <Link to="signup">signup</Link>
            <Link to="login">login</Link>
        </div>
    </div>
    )    
}

export default Banner