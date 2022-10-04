import React, { useEffect, useState } from 'react'
import Menus from './Menus'
import Title from './Title'
import Categories from './Categories'

const Home = () => {
  const [myMenu, setMyMenu] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/meals')
      .then((res) => res.json())
      .then((data) => setMyMenu(data))
  }, [])
  return (
    <>
      <Title />
      <Categories myMenu={myMenu} setMyMenu={setMyMenu} />
      <Menus myMenu={myMenu} />
    </>
  )
}

export default Home
