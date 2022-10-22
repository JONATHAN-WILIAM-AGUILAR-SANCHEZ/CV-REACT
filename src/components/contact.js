import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";

const Contact = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
          
            className="d-block w-100"
            src="https://cdn.brujulabike.com/media/10119/conversions/peso-van-der-poel-620-620.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="b1">
          <img
    
    className="d-block w-100"
    src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/284107354_1674949239599972_496020824411927771_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHl37dTe_jQy-VsUp9VIRDDFNA1Q8VTFCsU0DVDxVMUK5R-rH2KVto17t5OA4E2tus7J5UPl3nQVUwBQXjTqkSu&_nc_ohc=mcHIqX1owrYAX8Gzny5&_nc_ht=scontent-dfw5-1.xx&oh=00_AT8wGc8TdrLHhzc_Km-4MdP7HFyZoeA7xiXLGJOCwGZm-g&oe=63577E85"
    alt="Second slide"
  />
          </div>
          <Carousel.Caption>
            <h3>3 ETAPA SERIAL DE MONTAÑA</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/277442131_1627601471001416_3752818695067830495_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeECsGYRdktf_jvioCzOH05MtjzlHeeqC7y2POUd56oLvJ4WEomQ-bVM_ieYLzmkEUHPxvuum2Tlcm-gLUSyDORs&_nc_ohc=KJ79gvDbVFsAX__WqZ7&_nc_ht=scontent-dfw5-1.xx&oh=00_AT9LX91UHQ5_NemkZJVvkpi36xPV3yzwKof16jL58Fhv7A&oe=6357D8FF"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>CARRERA 5 ETAPA SERIAL DE MONTAÑA</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1>Contactos</h1>
      <Button variant="outline-primary">Primary</Button>{" "}
    </div>
  );
};
export default Contact;
