import { useState, useEffect } from 'react'
import '../styles/homepage_post.css';
import '../styles/login.css';
function SignupForm () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [testData, setTestData] = useState({});

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
     let testObj = testData[0];
     
    let testPOST = {
        email: "test",
        firstname: "firstname",
        lastname: "lastname",
        password: "password"
    }*/
    const submitFunction = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api/auth/signup', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname
            }),
        }).then((res) => res.json())
      .catch((err) => console.log('error submitting'))
        
    }

    return (
        <form className='loginComponent' onSubmit={submitFunction}>
            <div className='loginInputs'>
                <label>Email:</label>
                <input type = "text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='loginInputs'>
                <label>First Name:</label>
                <input type = "text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
            </div>
            <div className='loginInputs'>
                <label>Last Name:</label>
                <input type = "text" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
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

export default SignupForm;