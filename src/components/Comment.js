function Comment ({ comment_id, comment_content }) {
    return (
        <li className = 'comment_card'>
            <h4>userName</h4>
            <p>{comment_content}</p>
            {/* this is gonna be an unordered list w/ key props*/} 
            <div className = 'comment_card_bottom'>
                <button type="submit">Delete</button>
            </div>
        
        </li>
    )
}

export default Comment