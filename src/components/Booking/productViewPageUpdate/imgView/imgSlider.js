import React , {useState} from 'react'
import { Carousel } from 'react-bootstrap'

function ControlledCarousel() {

    let [images] = useState([
        {id:"1" , imgSrc:"/vehicaleImagesStatic/jeep.jpg" , imgAlt:"productImage"},
        {id:"2" , imgSrc:"/vehicaleImagesStatic/jeep3.jpg" , imgAlt:"productImage"},
        {id:"3" , imgSrc:"/vehicaleImagesStatic/jeep.jpg" , imgAlt:"productImage"},
        {id:"5" , imgSrc:"/vehicaleImagesStatic/jeep.jpg" , imgAlt:"productImage"},
        {id:"6" , imgSrc:"/vehicaleImagesStatic/jeep3.jpg" , imgAlt:"productImage"},
        {id:"7" , imgSrc:"/vehicaleImagesStatic/jeep.jpg" , imgAlt:"productImage"},
        {id:"8" , imgSrc:"/vehicaleImagesStatic/jeep.jpg" , imgAlt:"productImage"},
        {id:"9" , imgSrc:"/vehicaleImagesStatic/jeep.jpg" , imgAlt:"productImage"},
    ])



    //slider  navigation
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="m-2">
          {
                images.map(item => {
                  return(
                    <Carousel.Item key={item.id} style={{borderRadius:'.5rem'}}>
                      <img
                        style={{borderRadius:'.5rem'}}
                      className="d-block w-100 productviewpageImgSlider"
                      src={item.imgSrc}
                      alt={item.imgAlt}
                    />
                  </Carousel.Item>
                  )
              })
          }
      </Carousel>
    );
}
  
export default ControlledCarousel