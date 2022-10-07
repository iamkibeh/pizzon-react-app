import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchMeal = ({ myMenu, setMyMenu }) => {
  const [searchMeal, setSearchMeal] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/meals')
      .then((res) => res.json())
      .then((data) => setSearchMeal(data))
  }, [myMenu])

  const handleSearch = (e) => {
    const filteredMenu = searchMeal.filter((menu) =>
      menu.name.toLowerCase().includes(e.target.value)
    )
    setMyMenu(filteredMenu)
  }
  return (
    <div className='search-meal'>
      <div className='search-inp'>
        <label htmlFor='search-meal'>Search: </label>
        <input
          type='text'
          name='search'
          id='search-meal'
          placeholder='Search Meal'
          onChange={(e) => handleSearch(e)}
        />
        <BsSearch className='search-icon' />
      </div>
    </div>
  )
}

export default SearchMeal
