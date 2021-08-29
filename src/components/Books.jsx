import React, { useState } from 'react';
import Button from './Button';
import Model from './Model';

const Books = ({ books }) => {

  // modal
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  if (books.length <= 0 ) {
      return <h2> No Books </h2>
  }

  const getData = (summary, date) => {
    let tempData = [summary, date];
    setTempdata(item => [1, ...tempData]);
    return setModel(true);
  }

  return (
    <div className="py-4 py-lg-5 container">
      <div className="row justify-content-center align-item-center">
        {books.map(({ author, id, summary, title, publishDate }) => (
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" key={id}>
            <div className="card p-0 overflow-hidden h-100">
              <img className="card-img-top" src={author.avatar} alt={author.name} />
              <div className="card-body">
                <h5 className="card-title">{author.name}</h5>
                <p className="card-text">{title}</p>
                <Button text='Summary' onClick={() => getData(summary, publishDate)} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {
        model === true ? <Model summary={tempdata[1]} publishDate={tempdata[2]} hide={() => setModel(false)} />: ''
      }
    </div>
  )
}

export default Books;