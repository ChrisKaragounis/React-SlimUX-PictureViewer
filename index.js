import React from "react";
import {render} from "react-dom";
import './Components/Toolbar.css';
import './Components/PictureViewer.css';
import PictureViewer from './Components/PictureViewer'
class App extends React.Component {
  render() {
    let imageList = [
      {
        Title: "Pier Tropic Island",
        Src: "http://wallpaper.pickywallpapers.com/1920x1080/view-on-thetropic-island-from-the" +
            "-pier.jpg"
      }, {
        Title: "Norway village",
        Src: "https://media-cdn.tripadvisor.com/media/photo-s/04/4a/a1/94/nice-scenery-of-norw" +
            "ay.jpg"
      }, {
        Title: "Snow Mountain",
        Src: "http://bestwallpaperhd.com/wp-content/uploads/2014/06/Castle-Near-Mountains.jpg"
      }
    ];

    return (
      <div className="Wrapper">
        <PictureViewer DataSource={imageList}/>
      </div>
    )
  }
}
render(
  <App/>, document.getElementById('root'));
