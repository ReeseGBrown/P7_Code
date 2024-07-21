import '../styles/homepage_post.css';
import '../styles/login.css';
function Login() {
    return (
        <div className ="test">
            <div className='loginComponent'>
                <div className='loginInputs'>
                    <label>Email:</label>
                    <input type = "text"/>
                </div>
                <div className='loginInputs'>
                    <label>First Name:</label>
                    <input type = "text"/>
                </div>
                <div className='loginInputs'>
                    <label>Last Name:</label>
                    <input type = "text"/>
                </div>
                <div className='loginInputs'>
                    <label>Password:</label>
                    <input type = "text"/>
                </div>
                <div className='post_card_bottom'>
                    <a>Submit</a>
                </div>
            </div>
        </div>
    )
}

export default Login;