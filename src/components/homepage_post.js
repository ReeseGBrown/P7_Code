import '../styles/homepage_post.css'
import { Link } from 'react-router-dom'
function Post ({ post_title, post_content}) {
    return (
        <li className = 'post_card'>
            <h4>userName</h4>
            <Link to="userPost"><h2>{post_title}</h2></Link>
            <p>{post_content}</p>
            {/* this is gonna be an unordered list w/ key props*/} 
            <div className = 'post_card_bottom'>
                <p>likes</p>
            </div>
        
        </li>        
    )
}

export default Post