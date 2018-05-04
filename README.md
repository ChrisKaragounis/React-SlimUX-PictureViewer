# React-SlimUX-PictureViewer
A simple image viewer in React


## Table of Contents
* [Installation](#installation)
* [API documentation](#api-documentation)
* [Usage](#usage)
* [Example](#example)
* [Preview](#preview)

## Installation
Copy the files in the Components folder to your project and then import PictureViewer to your React page, like this

```jsx
import PictureViewer from './Components/PictureViewer'
```
yarn and npm support comming soon.

## API documentation
Properties: 
DataSource : Accept a list of images and their Title in order to display them.

Datasource list has to be of the following structure
```jsx
    {
        Title: "Title-Of-Image",
        Src: "Link-To-Image"
      }
```

## Usage
This Picture Viewer was created as a lite alternative to all the other bloated components available for react. It is simple, with one purpose and easy to use.

It's toolbar can open the image to a new window,
It can hide it's content or expand
It can switch beetwen images


## Example

```jsx
import React from "react";
import {render} from "react-dom";
import PictureViewer from './Components/PictureViewer'
class App extends React.Component {
  render() {
    let imageList = [
       {
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


```


## Preview
<img style="margin:100px" src="https://raw.githubusercontent.com/ChrisKaragounis/React-SlimUX-PictureViewer/ChrisKaragounis-preview-files/preview.gif"></img>
