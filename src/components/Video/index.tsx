"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";
import GridPattern from "../magicui/grid-pattern";
import { cn } from "lib/utils";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Pagination, EffectCoverflow } from "swiper/modules";
import web from "../../../public/images/hero/web dev.png"
import app from "../../../public/images/hero/app dev.png"
import ecom from "../../../public/images/hero/ecom.png"
import seo from "../../../public/images/hero/seo.png"
import uiux from "../../../public/images/hero/uiux.png"
import host from "../../../public/images/hero/host.png"

const Video = () => {


  return (
<>
<div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 ">
      <p className="z-10 whitespace-pre-wrap text-center text-3xl lg:text-5xl font-medium tracking-tighter text-black dark:text-white">
        Our Work
      </p>
      
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      </div>
      <div className="w-full bg-[url(/images/video/shape2.svg)] bg-cover bg-center bg-no-repeat">
<div className="container flex flex-col items-center justify-center gap-14 w-[80%] h-full">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            // depth: 100,
                            // modifier: 1,
                        }}
                        modules={[EffectCoverflow, Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper landingPageSwiper w-full overflow-hidden md:h-[500px] h-auto  flex md:flex-row flex-col items-center justify-center rounded-xl"
                    >
                            return (
                              <>
                                <SwiperSlide  className="w-full h-full">
                                    <Image src={web} alt="Image" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <Image src={app} alt="Image" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <Image src={ecom} alt="Image" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <Image src={seo} alt="Image" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <Image src={uiux} alt="Image" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <Image src={host} alt="Image" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                </>
                            );
                    </Swiper>

                   
                             
                            </div>
                            </div>
</>
  );
};

export default Video;
