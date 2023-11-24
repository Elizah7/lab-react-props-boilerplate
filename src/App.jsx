import './App.css';




function App({imageData}) {


  return (
    <div className="App">
      <div class="header">
        <h1>Image Gallery</h1>
      </div>
      <div className="image-container">
        {imageData.map((item) => (
          <img key={item.id} src={item.img} alt={`Image ${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
