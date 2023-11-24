import { Component } from "react";
import "./App.css"


export default class AppClass extends Component{
  
  render() {
    const { imageData } = this.props;

    return (
      <div className="App">
        <div className="header">
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
}
