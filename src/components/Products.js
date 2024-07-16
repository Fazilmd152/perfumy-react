import one from "../images/one.jpg"
import two from "../images/two.jpg"
import three from "../images/three.jpg"




function Products(){
    return(
      <div className="products">
       <div className="box">
          <img src={one} alt="one"></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
  
      <div className="box">
          <img src={two} alt="two"></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
  
      <div className="box">
          <img src={three} alt="three"></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
      </div>
    )
  }
  

  export default Products