import Cards from "../components/Cards"
import Content from "../components/Content"

const Home = () => {
  return (
    <div>
        
      <Content/>            //aqui vamos a invocar todo los otros componentes que integran el home
        
      <Cards />
    </div>
  )
}

export default Home