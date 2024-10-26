import '../styles/sort_create.css'
import { Link } from 'react-router-dom'
function Sort () {
    return (
        <div className = 'sort_create'>
            <Link to="/create">Create a Post</Link>
        </div>
    )
}
export default Sort

// npm react-router-dom
//  https://reactrouter.com/en/main
// Link, Outlet
// useParams
