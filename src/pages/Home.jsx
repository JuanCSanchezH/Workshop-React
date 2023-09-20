import Cards from "../components/Cards"
import Content from "../components/Content"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
        
      <Content/> 
        
      <Cards />
        {
          
            //aqui vamos a invocar todo los otros componentes que integran el home
        }
        {/* <Cards /> */}
        <Footer/>
        
    </div>
  )
}
export default Home