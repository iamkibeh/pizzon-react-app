import React from 'react'

const TotalPrice = ({ submittedMeal }) => {
  const costArr = submittedMeal.map((meal) => {
    const cost = meal.quantity
      ? meal.current_price * meal.quantity
      : meal.current_price
    return cost
  })

  const sum = costArr.reduce((accum, curr) => {
    return accum + curr
  }, 0)
  return (
    <div className='total-cost'>
      <h3>Total: {sum}</h3>
    </div>
  )
}

export default TotalPrice
