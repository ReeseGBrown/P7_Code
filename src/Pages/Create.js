import { Outlet } from 'react-router-dom'
import '../styles/Create.css'
import '../styles/homepage_post.css'
import { useState, useEffect } from 'react'
function Create() {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [testData, setTestData] = useState({});
    const testToken = localStorage.getItem("token");
    const submitFunction = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api/posts/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer" + " " + testToken,
            },
            body: JSON.stringify({
                post_title: postTitle,
                post_content: postContent
            }),
        }).then((res) => res.json())
      .catch((err) => console.log('error submitting'))
        
    }
    
    return (
        <div className = "test">
            <form className = "createComponent" onSubmit={submitFunction}>
                <div className = "titleComponent">
                    <input id="title" type = "text" name="postTitle" value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
                </div>
                <div className = "descriptionComponent">
                    <textarea id="description" type = "text" name="postContent" value={postContent} onChange={(e) => setPostContent(e.target.value)}/>
                </div>
                <div className='post_card_bottom'>
                <button type="submit">Submit</button>
                </div>
            </form>
             
        </div>
    )
}

export default Create;