import React from "react"
import './album.scss'

function Album (props) {

    

    return(<div className='foto'>
            <div>
                <button onClick={props.AlbCl} >close</button>
            </div>
            <div>
                <img src="./img/1.jpg" alt="1"/>
            
                <img src="./img/2.jpg" alt="2"/>
            
                <img src="./img/3.jpg" alt="3"/>

                <img src="./img/4.jpg" alt="4"/>
            </div>
            
      </div> );

      }

      export default Album;