import Header from '../header/header';
import User from '../user/user';
import BigGlass from '../../img/big-glass.svg'
import './App.css';
import React, {useState} from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  
  const mainPage = username !== '' 
  ? <User username = {username}/>
  : <div className='main-container'>
      <img alt='' src={BigGlass}></img>
      <p>Start with searching a GitHub user</p>
    </div>;

  return (
    <div className='wrapper'>
      <Header onInputChange = {name => setUsername(name)}/>
      {mainPage}
    </div>
  );
}

export default App;
