import React, { useEffect, useState } from 'react'

const Categories = ({ myMenu, setMyMenu }) => {
  const [myCategories, setMyCategories] = useState([])
  const [myFilteredMenus, setMyFilteredMenus] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then((res) => res.json())
      .then((data) => setMyCategories(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/meals')
      .then((res) => res.json())
      .then((data) => setMyFilteredMenus(data))
  }, [])
  const handleClick = (cat) => {
    setSelectedCategory(cat)
    const filteredMenus =
      cat === 'All'
        ? myFilteredMenus
        : myFilteredMenus.filter((menu) => menu.category === cat)

    setMyMenu(filteredMenus)
  }
  return (
    <div className='categories'>
      {myCategories.map((category, ind) => {
        const className = category === selectedCategory ? 'selected' : null
        return (
          <button
            key={ind}
            onClick={() => handleClick(category)}
            className={className}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
