import { useState, useEffect } from 'react'
import '../styles/homepage_post.css';
import '../styles/login.css';
import { useParams } from 'react-router-dom';

function CommentForm () {
    const { id } = useParams();
    const [commentContent, setCommentContent] = useState("");
    const [testData, setTestData] = useState({});

    const submitFunction = (e) => {
        console.log("got here");
        console.log(id);
        e.preventDefault();
        fetch('http://localhost:4000/api/comment/' + id, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comment_content: commentContent,
                post_id: id
            }),
        }).then((res) => res.json())
      .catch((err) => console.log('error submitting'))
        
    }

    return (
        <form className='loginComponent' onSubmit={submitFunction}>
            <div className='loginInputs'>
                <label>Comment:</label>
                <input type = "text" name="email" value={commentContent} onChange={(e) => setCommentContent(e.target.value)} />
            </div>
            <div className='post_card_bottom'>
                <button type="submit">Submit</button>
            </div>
            
        </form>
    )
}



export default CommentForm