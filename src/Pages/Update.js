import '../styles/Create.css'
import '../styles/homepage_post.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Update() {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [testData, setTestData] = useState({});
    const { id } = useParams();
    const testToken = localStorage.getItem("token");

    useEffect(() => {
        async function testGetter() {
            try {
                const response = await fetch("http://localhost:4000/api/posts/" + id , {
                    headers: {
                        'Authorization': "Bearer" + " " + testToken,
                        
                        }
                })
                const data = await response.json()
                //console.log("data");
                //console.log(data);
                setTestData(data[0]);
                //console.log("testData");
                //console.log(testData);
            }
            catch(err) {
                console.log("err");
            }
        }
        testGetter()
        //console.log("testData " + testData[0]);
     }, [])

    const submitFunction = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api/posts/' + id, {
            method: 'PUT',
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
                    <input id="title" type = "text" name="postTitle" defaultValue={testData.post_title} onChange={(e) => setPostTitle(e.target.value)}/>
                </div>
                <div className = "descriptionComponent">
                    <textarea id="description" type = "text" name="postContent" defaultValue={testData.post_content} onChange={(e) => setPostContent(e.target.value)}/>
                </div>
                <div className='post_card_bottom'>
                <button type="submit">Submit</button>
                </div>
            </form>
             
        </div>
    )
}

export default Update;