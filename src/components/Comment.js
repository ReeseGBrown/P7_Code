function Comment ({ comment_id, comment_content }) {
    
    const submitFunction = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api/comment/' + comment_id , {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            }
        }).then((res) => res.json())
      .catch((err) => console.log('error submitting'))
        
    } 
    
    return (
        <li className = 'comment_card'>
            <h4>userName</h4>
            <p>{comment_content}</p>
            {/* this is gonna be an unordered list w/ key props*/} 
            <div className = 'comment_card_bottom'>
                <button type="submit" onClick={submitFunction}>Delete</button>
            </div>
        
        </li>
    )
}

export default Comment