import '../styles/homepage_post.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Post ({ post_id, post_title, post_content}) {
    
    const [likeData, setLikeData] = useState({});

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

    return (
        <li className = 'post_card'>
            <h4>userName</h4>
            <Link to= {"userPost/" + post_id}><h2>{post_title}</h2></Link>
            <p>{post_content}</p>
            {/* this is gonna be an unordered list w/ key props*/} 
            <div className = 'post_card_bottom'>
                <button type="submit" onClick={submitLike}>Like</button>
                <p>{likeData.length}</p>
            </div>
        
        </li>        
    )
}

export default Post