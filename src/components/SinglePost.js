import '../styles/homepage_post.css'
import { Link } from 'react-router-dom'
function SinglePost ({ post_id, post_title, post_content}) {
    
    const submitFunction = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api/posts/' + post_id , {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            }
        }).then((res) => res.json())
      .catch((err) => console.log('error submitting'))
        
    } 
    
    return (
        <li className = 'post_card'>
            <h4>userName</h4>
            <h2>{post_title}</h2>
            <p>{post_content}</p>
            {/* this is gonna be an unordered list w/ key props*/} 
            <div className = 'post_card_bottom'>
                <p>likes</p>
                <Link to ={'/update/' + post_id}><button>Edit</button></Link>
                <button type="submit" onClick={submitFunction}>Delete</button>
            </div>
        
        </li>        
    )
}

export default SinglePost