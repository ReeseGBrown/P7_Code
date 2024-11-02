import Post from '../components/homepage_post'
import Sort from '../components/sort_create'
import '../styles/homepage_post.css'
import { useState, useEffect } from 'react'

function Home () {
    const [testData, setTestData] = useState({});

    useEffect(() => {
        async function testGetter() {
            try {
                const response = await fetch("http://localhost:4000/api/posts/")
                const data = await response.json()
                console.log(data);
                setTestData(data);
            }
            catch(err) {
                console.log("err");
            }
        }
        testGetter()
        console.log(testData.length);
     }, [])

    return (
        <div className = 'test'>
            
            <Sort />
            <ul>
                {testData.length > 0 && testData.map(({post_id, post_title, post_content}) => (
                    <div key={post_id}>
                        <Post post_title={post_title} post_content={post_content} />
                    </div>

                    
                ))}
            </ul>
        </div>
    )
}
export default Home;