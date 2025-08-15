import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {FreeMode } from 'swiper/modules';
import Slide from '../components/Slide';
export default function Slider() {
  return (
    <section className='h-[80vh] w-full mx-16'>
        <div className='flex items-center my-22'>
            <div className='dot h-3 w-3 mr-2 mt-0'></div>
            <h4 className='uppercase'>WHO WE WORK WITH</h4>
        </div>
  <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
           <Slide link="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg"/>
        </SwiperSlide>
        <SwiperSlide>
           <Slide link="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1600_Converse.svg"/>
        </SwiperSlide>
        <SwiperSlide>
           <Slide link="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fd_Arc%E2%80%99teryx.svg"/>
        </SwiperSlide>
        <SwiperSlide>
           <Slide link="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fe_Hunter.svg"/>
        </SwiperSlide>
        <SwiperSlide>
           <Slide link="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1601_MediaLink.svg"/>
        </SwiperSlide>
        <SwiperSlide>
           <Slide link="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1602_AfterPay.svg"/>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
