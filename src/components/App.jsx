import { useState, useEffect } from "react";
import axios from 'axios'
import '../styles/index.css'
import Pagination from "./Pagination";

function App() {
  //declare global variables
  const [postData, setPostData] = useState([])
  const [catData, setCatData] = useState([])
  const [filterCat, setFilterCat] = useState({})
  const [resetBtn, setResetBtn] = useState(true)
  const catList = []
  const [currentPage, setCurrentPage] = useState(1);
  let postsPerPage = 5;

  //call api function
  const callApi = async () => {
    const res = await axios.get("/api/posts");

    //check if api calling success or failed
    if (res && res.status === 200) {
      setPostData(res.data?.posts)
    } else {
      console.log('Failed to call api')
    }
  }

  //reset Filter 
  const resetFilter = () => {
    setFilterCat('')
    callApi()
    setCurrentPage(1)
    setResetBtn(true)
  }

  //fetch api data on startup
  useEffect(() => {
    // only fetch api data on first loading
    if (!postData.length) {
      callApi()
    }
    // find unique category if success get api data
    if (postData.length && !catData.length) {
      for (let p = 0; p < postData.length; p++) {
        for (let c = 0; c < postData[p].categories.length; c++) {
          if (!catList.includes(postData[p].categories[c].name)) {
            catList.push(postData[p].categories[c].name)
            setCatData(catList)
          }
        }
      }
    }
    // eslint-disable-next-line
  }, [postData])

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postData.slice(firstPostIndex, lastPostIndex);

  return <div >
    {/* Complete the exercise here. */}
    <h3 >
      Sample Post Data
    </h3>
    <hr />
    <body>
      {/*Filter function using select*/}
      <div className="dropdown">
        Filter By Category : {' '}
        <select value={filterCat} onChange={(e) => {
          let newFilter = postData.filter(fpost => fpost.categories.some(cat => cat.name === e.target.value));
          setPostData(newFilter)
          setFilterCat(e.target.value)
          setCurrentPage(1)
          setResetBtn(false)
        }}>
          <option value="">Select One</option>
          {catData.map((catName, index) => (
            <option key={index} value={catName}>
              {catName}
            </option>
          ))}
        </select>
        {/*reset button to clear filter*/}
        <h4 hidden={resetBtn} onClick={() => resetFilter()} style={{ marginLeft: '1%', textDecoration: 'underline', color: 'red' }}>Reset</h4>
      </div>
      {/*Table List */}
      <table style={{ border: '1px solid black', marginTop: '2%' }}>
        <thead >
          <th>Publish Date</th>
          <th>ID</th>
          <th>Author</th>
          <th>Title</th>
          <th>Categories</th>
          <th>Summary</th>
        </thead>
        <tbody>
          {currentPosts.map((d, i) => (
            <tr key={i}>
              <td>{new Date(d.publishDate).toLocaleDateString('en-GB')}</td>
              <td >{d.id.slice(1, 8) + '***'}</td>
              <td >{d.author.name}</td>
              <td>{d.title}</td>
              <td>{d && d.categories.map((cat) => cat.name).join(' , ')}</td>
              <td>{d.summary}</td>
            </tr>
          ))}
        </tbody>
        <Pagination
          totalPosts={postData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </table>
    </body>
  </div >
}

export default App;
