import '../styles/homepage_post.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function SinglePost ({ auth_user, user_id, post_id, post_title, post_content}) {
    const testToken = localStorage.getItem("token");
    const [likeData, setLikeData] = useState({});
    const [userData, setUserData] = useState({});

    useEffect(() => {
        async function testGetter() {
            try {
                const response = await fetch("http://localhost:4000/api/likes/" + post_id)
                const data = await response.json()
                //console.log(data);
                setLikeData(data);
            }
            catch(err) {
                console.log("err");
            }
        }
        testGetter()
        //console.log("leng " + testData.length);
     }, [])

  
     useEffect(() => {
        async function testGetter2() {
            try {
                const response = await fetch("http://localhost:4000/api/auth/" + user_id)
                const data = await response.json()
                console.log("data: ");
                console.log(data);
                setUserData(data);
                console.log("userData");
                console.log(userData);
            }
            catch(err) {
                console.log("err");
            }
        }
        testGetter2()
        //console.log("leng " + testData.length);
     }, [])

     const submitLike = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api/likes/' , {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: 5,
                post_id: post_id
            }),
        }).then((res) => res.json())
      .catch((err) => console.log('error submitting'))
        
    } 

    const submitFunction = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api/posts/' + post_id , {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer" + " " + testToken,
            
            }
        }).then((res) => res.json())
      .catch((err) => console.log('error submitting'))
        
    } 
    
    return (
        <li className = 'post_card'>
          
            
            <h2>{post_title}</h2>
            <p>{post_content}</p>
            {/* this is gonna be an unordered list w/ key props*/} 
            <div className = 'post_card_bottom'>
                <button type="submit" onClick={submitLike}>Like</button>
                <p>{likeData.length}</p>
                {auth_user && <Link to ={'/update/' + post_id}><button>Edit</button></Link>}
                {auth_user && <button type="submit" onClick={submitFunction}>Delete</button>}
            </div>
        
        </li>        
    )
}

export default SinglePost