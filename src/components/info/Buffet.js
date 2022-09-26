import Carousel from 'react-bootstrap/Carousel';
import Img4 from './Images/vegggg.png';
import Img5 from './Images/nonvegbuffet.jpg';
const Buffet=()=>{
    return(
    <div>
       <Carousel >
      <Carousel.Item interval={3000}>
        <img 
          className="d-block w-100"
          src={Img4} height={675}
          alt="First slide"
        />
        <Carousel.Caption>
        <center>
        <h1 style={{ color: "white" , fontWeight: "bold"}}>Veg Buffet Available</h1>
        <h2>
          Only on saturday
        </h2>
          </center>

          <h3>Timings: 6pm-10pm<br></br>
          price: $20
            </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={Img5} height={675}
          alt="Second slide"
        />
        <Carousel.Caption><center>
        <h1 style={{ color: "white" , fontWeight: "bold"  }}>Non-Veg Buffet Available</h1>
        <h2>
          Only on Sunday
        </h2>
          </center>
          <h2>Timings: 11Am-3pm & 6pm-10pm<br></br>
          price: $25
            </h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    )}
    export default Buffet;