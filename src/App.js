import React from 'react';
import './App.scss';
import Slider from './Slider.js';
import AlbumInt from './albumInt.js';
import Gallery from './gallery.js';
import AlbumFurn from './albumFurn';

function App() {

const [albumIntOpenned, setAlbumIntOpenned ] = React.useState(false);
const [albumFurnOpenned, setAlbumFurnOpenned] = React.useState(false);
  
  return <div className='wrapper'>

    {albumIntOpenned ? <AlbumInt AlbCl = {() => setAlbumIntOpenned(false)} /> : null}
    {albumFurnOpenned ? <AlbumFurn AlbCl = {() => setAlbumFurnOpenned(false)} /> : null}
    <header>
      <div className='headerLeft'>
       
        
      <img className = "overlay" width = {100} height = {96} src="overlayLogo.png"/>
      
      <div>
        <h1>Boy&Co Design</h1>
        <p className='slogan'>3D Дизайн вашей мечты</p>
      </div>
      </div>
      
        <nav className='menu'>
          <ul>
            <li><a href='#bio'>О себе</a></li>
           <li><a href='#projects'>Мои работы</a></li>
            <li><a href='#stack'>Стек программ</a></li>
          </ul>
        </nav>
      
    </header>
    
  
    <div className='mainContent'>
      <div id='#bio' className='bio'>
        <img width={350} height={472} src="/img/bio.jpg" />
        <div className='text'><p>Привет! Меня зовут Дмитрий, и я  предлагаю вам услуги <br/>
            <span className='slogan big'>Моделирования дизайна интерьера.</span> <br/>
            Ниже вы можете ознакомиться с моими <span className='slogan'>работами.</span> Там же вы найдете <span className='slogan'>стек технологий</span>, которые я использую в своей работе.</p>
        </div> 
      </div>
   

      
        
        
      
      <Gallery  AlbumIntOp = {() => setAlbumIntOpenned(true)} AlbumFurnOp = {() => setAlbumFurnOpenned(true)} />
      
      
          
        
       
    

      <div id='stack' className='progs'>
        <table>
          <tr>
            <td>
              <img src='/img/stack1.png' alt='programm1'/>
              <h3>3ds Max для создания интерьера</h3>
            </td>
            <td>
            <img src='/img/stack2.png' alt='programm2'/>
            <h3>Photoshop для облагораживания картины</h3>
            </td>
            <td>
            <img src='/img/stack3.png' alt='programm3'/>
            <h3>Zbrush для скульптурирования</h3>
            </td>
          </tr>
        </table>

      </div>
    </div>

    
    <footer>
      <table>
        <tr>
          <td className='left'>
            <h3>Boy&Co Design</h3>
            <p>2022, 3D дизайн интерьера</p>
          </td>
          <td className='social'>
          <a href='t.me/username' target="_blank"> <img src='/img/telegram.png' alt='telegram'/></a>
          <a href='ok.ru' target="_blank"><img src='/img/OK.png' alt='OK'/></a>
            <a href='https://vk.com/del97' target="_blank"> <img src='/img/VK.png' alt='VK'/> </a>
          </td>
          <td className='contacts'>
            <img src='/img/number.png' alt='number'/>
            <p className='number'>+7**********</p>
            </td>
            <td className='contacts'>
            <img src='/img/mail.png' alt='mail'/>
            <p>example@mail.ru</p>
          </td>
        </tr>
      </table>
    </footer>
  </div>
  
}

export default App;
