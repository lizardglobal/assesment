import React, { useState, useEffect } from 'react';

function App() {
  // State declaration to store post data
  const [posts, setPosts] = useState([]);

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
        // Update status with data from retrieved posts
        setPosts(json.posts);
      })
      .catch((error) => {
        // Manage errors during the query
        console.error("Error : ", error);
      });
      // Empty table [] means that the effect is run only once after mounting the component
  }, []); 

  // Log post data to check content in console
  console.log(posts);

  // For this step, we limit ourselves to the data retrieval
  return <div>{/* The next step will display these data */}</div>;
}

export default App;
