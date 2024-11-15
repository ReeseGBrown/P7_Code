import { useState, useEffect } from 'react'
import '../styles/homepage_post.css';
import '../styles/login.css';
function LoginForm () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [testData, setTestData] = useState({});
    let userObject;
    /*useEffect(() => {
        async function testGetter() {
            try {
                const response = await fetch("http://localhost:4000/api/test/getting")
                const data = await response.json()
                console.log(data);
                setTestData(data);
            }
            catch(err) {
                console.log("err");
            }
        }
        testGetter()
     }, [])
     */
    const submitFunction = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api/auth/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer" + " " + "awdawdawdawdawd",
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        }).then( async (res) => {
            userObject = await res.json()
            console.log("This is res: ");
            console.log(userObject.token);
            localStorage.setItem("token", userObject.token);
        })
      .catch((err) => console.log('error submitting'))
        
    }
    // Trying to get the token into the params of auth so I can re-use the token and decode it
    const submitToken = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api/authRoute' + userObject.token, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: userObject.token
            }),
        }).then((res) => res.json())
    }

    return (
        <form className='loginComponent' onSubmit={submitFunction}>
            <div className='loginInputs'>
                <label>Email:</label>
                <input type = "text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='loginInputs'>
                <label>Password:</label>
                <input type = "text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='post_card_bottom'>
                <button type="submit">Submit</button>
            </div>
            
        </form>
    )
}

export default LoginForm;