import React, { useState, useEffect } from 'react'
import Categories from './Components/Categories'
import Menus from './Components/Menus'
import Title from './Components/Title'

function App() {
  const [myMenu, setMyMenu] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/meals')
      .then((res) => res.json())
      .then((data) => setMyMenu(data))
  }, [])
  return (
    <div className='App'>
      <Title />
      <Categories myMenu={myMenu} setMyMenu={setMyMenu} />
      <Menus myMenu={myMenu} />
    </div>
  )
}

export default App
