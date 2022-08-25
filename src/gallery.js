import React from "react";

function Gallery (props) {
       console.log(props);
    return (
            <div  className='album'>
            <img onClick={props.AlbumOp} src='./img/album1.png'/>
            <img onClick={props.AlbumOp} src='./img/album2.png'/>
            
      </div>
        )

}

export default Gallery;