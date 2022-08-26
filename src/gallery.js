import React from "react";

function Gallery (props) {
       console.log(props);
    return (
            <div id="projects" className='album'>
            <img onClick={props.AlbumFurnOp} src='./img/album1.png'/>
            <img onClick={props.AlbumIntOp} src='./img/album2.png'/>
            
      </div>
        )

}

export default Gallery;