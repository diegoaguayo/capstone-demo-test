import './App.css';
import React , {useState} from 'react';

function App() {

  const [imageUrl, setImageUrl] = useState(null);

  const handleImageInput = (e) => {
    setImageUrl(e);
  }

  const handleImageUpload = async (file) => {
      fetch("https://4bqckx3v6e.execute-api.us-east-1.amazonaws.com/default/getcelebrities", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: {image_url: imageUrl},
      })
          .then(data => console.log(data))
          .catch(err => console.error(err))
  }

  return (
    <div className="App">
      <h1 >AWS Cloud Demo</h1>
      <input type="text" onChange={handleImageInput}/>
      <button onClick={() => handleImageUpload(imageUrl)}> Look 4 celebrities</button>
    </div>
  );
}

export default App;
