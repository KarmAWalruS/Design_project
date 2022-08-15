
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
  </div>
  
}

export default App;
