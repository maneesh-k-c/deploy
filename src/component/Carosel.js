import React from 'react';
import Carousel from 'nuka-carousel'

const Carosel = () => {
   
    return (
        <Carousel wrapAround={true} slidesToShow={1}
          renderBottomCenterControls={null}
          autoplay={true}
          
          >
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
       
      </Carousel>
    );
}

export default Carosel;
