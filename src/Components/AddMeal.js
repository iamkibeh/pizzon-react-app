import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaTrashAlt, FaAngleLeft } from 'react-icons/fa'

const AddMeal = ({ submittedMeal, setSubmittedMeal }) => {
  const navigate = useNavigate()
  function handleDelete(e) {
    const updatedMeals = submittedMeal.filter((meal) => meal.id !== e.id)
    setSubmittedMeal(updatedMeals)
  }
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
                    {meal.quantity
                      ? meal.quantity * meal.current_price
                      : 1 * meal.current_price}
                  </td>
                  <td className='trash'>
                    <button onClick={(e) => handleDelete(meal)}>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button className='continue-shopping' onClick={() => navigate('/')}>
          <FaAngleLeft className='angle-left' />
          Continue shopping
        </button>
      </div>
    </>
  )
}

export default AddMeal
