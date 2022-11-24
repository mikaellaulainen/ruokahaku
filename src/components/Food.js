import { useState } from 'react'
import Button from 'react-bootstrap/Button'

const Food = ({ food }) => {
  const [show,setShow] = useState(false)

  const adjustShow = (e) => {
    e.preventDefault()
    console.log("Setting show",!show)
    setShow(!show)
  }
  if(show === false) {
    return(
      <div onClick={adjustShow} className='col-lg-6 col-md-8 col-sm-10 mx-3 mx-sm-auto mt-3 p-3 border'>
        <p>{food.name.fi} <Button className='my-2 p-1' onClick={adjustShow}>Näytä</Button></p>
      </div>
    )
  } else if(show === true) {
    return(
      <div onClick={adjustShow} className='col-lg-6 col-md-8 col-sm-10 mx-3 mx-sm-auto mt-3 p-3 border'>
        <p>{food.name.fi} <Button className='my-2 p-1' onClick={adjustShow}>Piilota</Button></p>
        <p>Energiaa: {Math.round(food.energyKcal)} kcal</p>
        <p>Rasvaa: {Math.round(food.fat)} g</p>
        <p>Hiilihydraattia: {Math.round(food.carbohydrate)} g</p>
        <p>Proteiinia: {Math.round(food.protein)} g</p>
      </div>
    )
  }
}

export default Food