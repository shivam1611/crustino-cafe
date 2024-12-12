import {getPizzaMenu} from  "../../services/engine.js"
const Home = () => {
  const data = getPizzaMenu("pizzas")
  console.log(data)
  return (
    <div>Home</div>
  )
}

export default Home