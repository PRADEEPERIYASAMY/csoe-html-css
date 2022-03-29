import React, { useState } from 'react';
import styles from './app.module.css';
import Contact from './Pages/Contact';
import ImageSlider from './Pages/ImageSlider';
import Login from './Pages/Login';

function App() {
  const [page,setPage] = useState<number>(0);

  const handlePage = () =>{
    switch(page){
      case 0: return <Login/>
      case 1: return <ImageSlider/>
      case 2: return <Contact/>
    }
  }

  return (
    <div className={styles.app}>
      <input id='menu' className={styles.hamburger} type='checkbox'/>
      <label htmlFor='menu' className={styles.icon}>
        <div className={styles.menu}></div>
      </label>
      <nav>
        <ul>
          <li onClick={()=>{setPage(0)}}>
            <span className='material-icons md-36'>account_circle</span>Article 
          </li>
          <li onClick={()=>{setPage(1)}}>
            <span className='material-icons md-36'>perm_media</span>Gallery
          </li>
          <li onClick={()=>{setPage(2)}}>
            <span className='material-icons md-36'>chat_bubble_outline</span>Messages
          </li>
        </ul>
      </nav>
      <div className={styles.container}>
        {
          handlePage()
        }
      </div>
    </div>
  );
}

export default App;
