import Header from '../header/header';
import BigGlass from '../../img/big-glass.svg'
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className='main-container'>
        <img alt='' src={BigGlass}></img>
        <p>Start with searching a GitHub user</p>
      </div>
    </div>
  );
}

export default App;
