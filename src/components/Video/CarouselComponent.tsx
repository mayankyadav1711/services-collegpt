import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Basic Swiper styles
import 'swiper/css/navigation'; // Styles for the navigation
import 'swiper/css/pagination';
// Import required modules
import { Navigation, Pagination } from 'swiper/modules';

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const CarouselComponent = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[25rem] overflow-hidden rounded-md" data-wow-delay=".15s">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}  
                pagination={{
                    clickable: true,
                  }}// Enable navigation
                modules={[Navigation, Pagination]}  // Include the Navigation module
          
              >
                <SwiperSlide>
                  <img src="https://i.ibb.co/qsp62jM/hjnjnnnn.png" alt="Slide 1" layout="fill" objectFit="cover" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.ibb.co/qkyP1Z3/shgbdjnjnxc.png" alt="Slide 2" layout="fill" objectFit="cover" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.ibb.co/qsp62jM/hjnjnnnn.png" alt="Slide 3" layout="fill" objectFit="cover" />
                </SwiperSlide>
                {/* Additional slides here */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default CarouselComponent;
