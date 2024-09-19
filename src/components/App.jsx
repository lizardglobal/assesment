import React, { useState, useEffect } from 'react';

function App() {
  // State declaration to store post data and loading state
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Add state for loading

  // useEffect is used to execute the query when the component is mounted
  useEffect(() => {
    // Make a request to the API to retrieve data from posts
    fetch('/api/posts')
      .then((res) => {
        // Correct response check 
        if (!res.ok) {
          throw new Error ('Error while retrieving posts');
        }
        // Convert response to JSON
        return res.json();
      })
      .then((json) => {
        // Log the JSON response to ensure it contains 'posts'
        console.log(json); 
        // Update status with data from retrieved posts
        setPosts(json.posts);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        // Manage errors during the query
        console.error("Error : ", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []); 

  // Log post data to check content in console
  console.log(posts);

  return (
    <div>
      {/* Render a list of posts if posts data is available */}
      <ul>
        {loading ? (
          // Show a loading message while data is being fetched
          <p>Loading posts...</p> 
        ) : (
          posts.length > 0 ? (
            posts.map((data) => (
              <li key={data.id}>
                <h2>{data.title}</h2> {/* Display the post title */}
                {data.author && <p>{data.author.name}</p>} {/* Display author name if available */}
              </li>
            ))
          ) : (
            // Show a message if no posts are available
            <p>No posts available</p>
          )
        )}
      </ul>
    </div>
  );
}

export default App;
