import React from 'react'

const AddMeal = ({ submittedMeal }) => {
  console.log(submittedMeal)
  return (
    <>
      <div className='meals-table'>
        <table>
          <thead>
            <tr>
              <td>Meal</td>
              <td>Meal Name</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Sub-total</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {submittedMeal.map((meal) => {
              return (
                <tr key={meal.id}>
                  <td>
                    <img src={meal.image} alt={meal.name} />
                  </td>
                  <td>{meal.name}</td>
                  <td>{meal.current_price}</td>
                  <td>{meal.quantity ? meal.quantity : 1}</td>
                  <td>
                    {meal.quantity ? meal.quantity : 1 * meal.current_price}
                  </td>
                  <td>Delete</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AddMeal
