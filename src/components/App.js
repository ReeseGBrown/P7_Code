import Banner from './Banner'
import '../styles/homepage_post.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Header'
import Create from '../Pages/Create';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import UserPost from '../Pages/UserPost';
function App() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path ="/" element = {<Home />}>
        </Route>
        <Route path="create" element = {<Create />}>
            <Route path="new" element = {<Banner />}>
            </Route>
        </Route>
        <Route path= "login" element = {<Login />}>
        </Route>
        <Route path = "userPost" element = {<UserPost />}>
        </Route>
      </Routes>
    </Router>
  )
}
// pexels
// unsplash 
// Font Awesome Icons
// figma
// nest Routes to add components on already rendered screen



export default App;
