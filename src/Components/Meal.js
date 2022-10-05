import React from 'react'
import { useNavigate } from 'react-router-dom'

const Meal = ({ menu }) => {
  const navigate = useNavigate()

  const handleClick = (menu) => {
    navigate(`/cart/${menu.id}`)
  }
  return (
    <>
      <div className='menu' onClick={() => handleClick(menu)}>
        <img src={menu.image} alt='a meal on some plate' />
        <section>
          <h4>{menu.name}</h4>
          <p>{menu.description}</p>
          <h4>
            <span className='cost'>${menu.current_price}</span>
          </h4>
        </section>
      </div>
    </>
  )
}

export default Meal
