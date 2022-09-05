import React from "react"
import './album.scss'

function AlbumFurn (props) {

    

    return(<div className='foto'>
            <div>
                <button onClick={props.AlbCl} >X</button>
            </div>
            <div>
                <img src="./img/5.jpg" alt="5"/>
            
            </div>
            
      </div> );

      }

      export default AlbumFurn;