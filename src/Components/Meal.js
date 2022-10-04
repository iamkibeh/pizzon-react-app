import React from 'react'

const Meal = ({ menu }) => {
  return (
    <>
      <div className='menu'>
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
