import { Outlet } from 'react-router-dom'
import '../styles/Create.css'
import '../styles/homepage_post.css'
function Create() {
    return (
        <div className = "test">
            <div className = "createComponent">
                <div className = "titleComponent">
                    <input type ="text" id = "title"/>
                </div>
                <div className = "descriptionComponent">
                    <textarea  id ="description"/>
                </div>
                <div className='post_card_bottom'>
                    <a>Submit</a>
                    <a>Image</a>
                </div>
            </div>
            <Outlet /> 
        </div>
    )
}

export default Create;