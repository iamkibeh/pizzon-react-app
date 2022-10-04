import React from 'react'
import Meal from './Meal'

const Menus = ({ myMenu }) => {
  return (
    <>
      <div className='menu-list'>
        {myMenu.map((menu) => {
          return <Meal key={menu.id} menu={menu} />
        })}
      </div>
    </>
  )
}

export default Menus
