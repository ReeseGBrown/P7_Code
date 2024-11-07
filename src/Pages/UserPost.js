import '../styles/homepage_post.css';
import '../styles/UserPost.css';
import SinglePost from '../components/SinglePost'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function UserPost() {
    const [testData, setTestData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function testGetter() {
            try {
                const response = await fetch("http://localhost:4000/api/posts/" + id)
                const data = await response.json()
                //console.log("data");
                //console.log(data);
                setTestData(data);
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
    return (
       <div>
            <ul>
                
                    <div key={testData.post_id}>
                        <SinglePost post_id = {testData.post_id} post_title={testData.post_title} post_content={testData.post_content} />
                    </div>

            </ul>
       </div>
    )
}
export default UserPost;

/*
 <div className="test">
            <div className = 'post_card'>
                <h4>userName</h4>
                <h2>This Is Where The Title Is Going To Be</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                {/* this is gonna be an unordered list w/ key props} 
                <div className = 'post_card_bottom'>
                    <p>likes</p>
                    <p>comments</p>
                </div>
            
            </div>
            <hr/>
        </div>
*/