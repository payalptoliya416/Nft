import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslation } from 'react-i18next';

function Supports() {
  const { t } = useTranslation();
  return (
    <>
      <div className=" 2xl:py-[130px] sm:[90px] pb-[69px] pt-[60px]">
      <div className='relative'>
    <div className="div-1"></div>
    </div>
         <div className="lg:custom-container container mx-auto px-[20px] md:px-0 ">
         <div className='relative z-[1] sm:mb-[25px] mb-[20px]'>
    <h2 style={{ fontFamily: "Urbanist, sans-serif" }} className='uppercase font-bold text-center sm:text-[74px] text-[28px] leading-[32px] gradient-text sm:leading-[95px]'>{t('Our strongest')} </h2>
    <h2 style={{ fontFamily: "Urbanist, sans-serif" }} className='uppercase font-bold text-center sm:text-[74px] text-[28px] leading-[32px] gradient-text sm:leading-[95px]'>{t('Supporters')}</h2>
    <img src="images/Ellipse 5.png" alt="" className='absolute sm:top-[4px] sm:left-[28%] -z-[1] w-[35px] sm:w-[100px] top-0 left-[20%]'  />
    </div>
        <p className='sm:text-lg text-[14px] leading-[26px] sm:leading-[30px] font-normal mb-[15px] text-[#8F99AC] w-full max-w-[930px] mx-auto text-center sm:mb-[55px]'>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}</p>

        <Swiper className="mySwiper"
         spaceBetween={0}
      slidesPerView={2}
      breakpoints={{
        992: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView:'auto' 
    },
    1200: {
      slidesPerView: 'auto' 
    }
          }}
      >
        <SwiperSlide>  <div className=" gradient-border-shadow-bottom sm:px-[55px] sm:py-[54px] p-[23px]">
               <img src="images/Mask group (10).png" alt="" className='w-[109px] h-[32px] sm:w-full sm:h-full  object-cover' />
           </div></SwiperSlide>
        <SwiperSlide><div className=" gradient-border-shadow-bottom  sm:px-[55px] sm:py-[54px] p-[23px]">
               <img src="images/Mask group (11).png" alt=""  className='w-[109px] h-[32px] sm:w-full sm:h-full object-cover'/>
           </div></SwiperSlide>
        <SwiperSlide><div className=" gradient-border-shadow-bottom  sm:px-[55px] sm:py-[54px] p-[23px]">
               <img src="images/Mask group.png" alt="" className='w-[109px] h-[32px] sm:w-full sm:h-full object-cover' />
           </div></SwiperSlide>
        <SwiperSlide> <div className=" gradient-border-shadow-bottom-1 sm:px-[55px] sm:py-[54px] p-[23px]">
               <img src="images/Mask group (12).png" alt="" className='w-[109px] h-[32px] sm:w-full sm:h-full object-cover' />
           </div></SwiperSlide>
      </Swiper>
         </div>
      </div>
    </>
  )
}

export default Supports
