import React, { useEffect, useState } from 'react'
import Menus from './Menus'
import Title from './Title'
import Categories from './Categories'
import SlideShowing from './SlideShowing'
import SearchMeal from './SearchMeal'
import Reviews from './Reviews'

const Home = () => {
  const [myMenu, setMyMenu] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/meals')
      .then((res) => res.json())
      .then((data) => setMyMenu(data))
  }, [])
  return (
    <>
      <SlideShowing />
      <Title />
      <SearchMeal myMenu={myMenu} setMyMenu={setMyMenu} />
      <Categories myMenu={myMenu} setMyMenu={setMyMenu} />
      <Menus myMenu={myMenu} />
      <Reviews />
    </>
  )
}

export default Home
