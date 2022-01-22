import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Question1 = () => {
  return (
    <section>
       <Carousel autoplay={true} infiniteLoop showArrows={true}>
                <div>
                    <img src="http://placehold.it/150x150" alt="place" />
                    <p className="legend">Legend 1</p>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://placehold.it/150x150" alt="place" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://placehold.it/150x150" alt="place" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </section>
  );
};

export default Question1;