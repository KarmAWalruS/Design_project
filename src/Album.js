import React, {useRef, useEffect} from "react";
import styled from 'styled-components';
import slide1 from './1.jpg';
import slide2 from './2.jpg';
import slide3 from './3.jpg';
import './/album.scss';

const Wrapper = styled.div`
  position: relative;
  width: 55%;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
`;
const Slide = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  transition: transform 0.6s ease-in-out;
  transform: ${props => `translateX(${props.xPosition}px)`}; // (*)
img {
    width: 100%;
    height: 100%;
  }
`;

function Album ({images, setWidth, xPosition,}) {
    const slideRef = useRef();

    useEffect(() => {
        if (slideRef.current) {
            const width = slideRef.current.clientWidth;
            setWidth(width);
        }
    }, [setWidth]);

    return (
        <Wrapper>
      <Slide xPosition={xPosition} ref={slideRef}>
        {images.map((img, i) => (
          <img src={img} alt={'ere'} key={i} />
        ))}
      </Slide>
      
    </Wrapper>
  );

    
        /*<div className='album'>
        <img src='/img/album1.png' alt='album1'/>
        <img src='/img/album2.png' alt='album2'/>

      </div>*/
    
}

export default Album; 