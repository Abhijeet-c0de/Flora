import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


function Hero() {
  return (
    <div className='hero' style={{ display: 'block', width: 1500,height:1000, padding: 30, margin:"auto" }}>

      <Carousel>
        <Carousel.Item interval={2000}>
          <img style={{opacity: 1}}
            className="d-block w-100"
src="https://cdn.pixabay.com/photo/2023/05/14/13/20/ai-generated-7992885_1280.png"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Plant Database</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis rem voluptas impedit tenetur accusantium praesentium laboriosam, animi modi quasi, doloribus eveniet quae mollitia dignissimos nesciunt libero illo non! Reprehenderit, id nemo?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
           
src="https://static.vecteezy.com/system/resources/previews/042/237/578/non_2x/ai-generated-plants-in-pots-add-greenery-and-natural-charm-to-the-area-free-photo.jpeg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
           
src="https://static.vecteezy.com/system/resources/previews/042/237/578/non_2x/ai-generated-plants-in-pots-add-greenery-and-natural-charm-to-the-area-free-photo.jpeg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
           
src="https://static.vecteezy.com/system/resources/previews/042/237/578/non_2x/ai-generated-plants-in-pots-add-greenery-and-natural-charm-to-the-area-free-photo.jpeg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3 >Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Hero


