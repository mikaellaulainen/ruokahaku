import Food from "./Food"

const Result = ({ result }) => {
  return (
    <div>
      {result.map(food => (
        <Food key={food.id} food={food}/>
      ))}
    </div>
  )
}

export default Result