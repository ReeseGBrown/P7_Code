import logo from '../assets/icon-left-font-monochrome-black.svg'
import '../styles/Banner.css'
function Banner() {
    return (
    <div className = 'groupomania-banner'>
        <img src={logo} alt='groupomania logo' className = 'groupomania-banner-logo'/>
        <div className = 'signupLogin'>
            <p>signup</p>
            <p>login</p>
        </div>
    </div>
    )    
}

export default Banner