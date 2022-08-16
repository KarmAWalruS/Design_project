
import './App.scss';

function App() {
  return <div className='wrapper'>
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
            <li>О себе</li>
           <li>Мои работы</li>
            <li>Стек программ</li>
          </ul>
        </nav>
      
    </header>
    <hr/>

    <div className='mainContent'>
      <div className='bio'>
        <img width={450} height={572} src="/img/bio.jpg" />
        <div className='text'><p>Привет! Меня зовут Дмитрий, и я  предлагаю вам услуги <br/>
            <span className='slogan big'>Моделирования дизайна интерьера.</span> <br/>
            Ниже вы можете ознакомиться с моими <span className='slogan'>работами.</span> Там же вы найдете <span className='slogan'>стек технологий</span>, которые я использую в своей работе.</p>
        </div> 
      </div>
   

      <div className='slider'>
        
      </div>

      <div className='album'>
        <img src='/img/album1.png' alt='album1'/>
        <img src='/img/album2.png' alt='album2'/>

      </div>

      <hr/>

      <div className='progs'>
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

    <hr className='slogan'/>
    <footer>
      <table>
        <tr>
          <td>
            <h3>Boy&Co Design</h3>
            <p>2022, 3D дизайн интерьера</p>
          </td>
          <td className='social'>
            <img src='/img/telegram.png' alt='telegram'/>
            <img src='/img/OK.png' alt='OK'/>
            <img src='/img/VK.png' alt='VK'/>
          </td>
          <td className='contacts'>
            <img src='/img/number.png' alt='number'/>
            <p>+7**********</p>
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
