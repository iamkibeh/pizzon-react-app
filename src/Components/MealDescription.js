import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import AddMeal from './AddMeal'
const MealDescription = () => {
  const params = useParams()
  const menuId = parseInt(params.mealId)
  const [selectedMeal, setSelectedMeal] = useState({})
  const [submittedMeal, setSubmittedMeal] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/meals/${menuId}`)
      .then((res) => res.json())
      .then((data) => setSelectedMeal(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    let filteredMeal = submittedMeal.filter(
      (meal) => meal.id !== selectedMeal.id
    )
    setSubmittedMeal([...filteredMeal, selectedMeal])
    e.target.reset()
  }
  function handleSizeChange() {
    // console.log(btnRef.current)
    // btnRef.current.classList.add('crust-select')
  }
  return (
    <>
      <div className='meal-des-container'>
        <div className='menu-image-card'>
          <img src={selectedMeal.image} alt={selectedMeal.name} />
        </div>
        <div className='meal-des'>
          <h2 className='meal-title'>{selectedMeal.name}</h2>
          <p className='meal-prices'>
            <span
              style={{ textDecoration: 'line-through', color: 'lightgray' }}
            >
              $ {selectedMeal.initial_price}
            </span>
            {'    '}
            <span style={{ color: 'orange' }}>
              $ {selectedMeal.current_price}
            </span>
          </p>
          <p>{selectedMeal.description}</p>
          <section>
            <div className='crust-size'>
              <h5>Size of Crust</h5>
              <section className='btn-sec'>
                <button onClick={handleSizeChange}>Regular</button>
                <button>Medium</button>
                <button>Large</button>
              </section>
            </div>
          </section>
          <section>
            <form className='quantity' onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor='quantity'>Quantity: </label>
              <input
                type='number'
                name='quantity'
                id='quantity'
                onBlur={(e) =>
                  setSelectedMeal((selectedMeal) => ({
                    ...selectedMeal,
                    quantity: e.target.value,
                  }))
                }
              />
              <button type='submit'>
                <FaCartPlus className='cart' />
                Add to cart
              </button>
            </form>
          </section>
        </div>
      </div>
      <AddMeal submittedMeal={submittedMeal} />
    </>
  )
}

export default MealDescription
