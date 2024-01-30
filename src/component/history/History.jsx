import React, { useEffect, useMemo, useState } from 'react';
import './History.css';
// import { Carousel } from '@mantine/carousel';

import { carouselData } from '../../../src/data/carousel-data';

const History = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useMemo(() => {
    setData(carouselData);
  }, [carouselData]);
  return (
    <div className="h-container">
      <div className="carousel-container">
        <div className="image-container">
          <div>
            {data?.slice(0, 5)?.map((img, index) => {
              return (
                <div
                  key={index}
                  className={`${activeIndex === index && 'border'}`}
                >
                  <img src={img?.img} alt="carousel images" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="b-container">
          {data?.slice(0, 5)?.map((_, index) => {
            return (
              <div key={index}>
                <span
                  onClick={() => setActiveIndex(index)}
                  className={`${activeIndex === index && 'btn-bg'} btn`}
                ></span>
              </div>
            );
          })}
        </div>

        {/* <Carousel /> */}
      </div>
    </div>
  );
};

export default History;
