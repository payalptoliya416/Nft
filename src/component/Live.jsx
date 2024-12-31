import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Live() {
const [click,setClick] = useState(false);

const handleClick = () =>{
  setClick(!click);
}
const { t } = useTranslation();
  return (
    <>
      <div className=" 2xl:py-[110px] lg:py-[90px] py-[60px]  px-[20px] xl:px-0 relative overflow-x-hidden 2xl:overflow-visible">
 <div className="div-5 "></div>
  <div className="lg:custom-container container mx-auto relative   gradiunt-border after:border-4  bg-white bg-opacity-[15%] after:rounded-[26px] rounded-[26px] z-[99]">
  <img src="images/thunder.png" alt="" className='absolute right-[-13%] xl:top-[-3%] lg:top-[-13%] top-[45%]' />
  <div className="grid grid-cols-12 sm:py-[89px] sm:px-[84px] sm:gap-10">
<div className="lg:col-span-4 col-span-12 pt-[20px] sm:pt-0">
    <img src="images/GIFs131 (2).gif" alt="" className='rounded-xl img-bg relative ' />
</div>
<div className="lg:col-span-8 col-span-12 text-center sm:text-left relative z-[20]">
<div className="sm:p-[20px] sm:ms-[24px] pb-[20px] sm:pb-[0] ">
    <h2 style={{ fontFamily: "Urbanist, sans-serif" }} className='gradient-text xl:text-[98px] sm:text-[50px] text-[27px] font-bold xl:leading-[115px] leading-[50px] sm:mb-[35px] mb-[15px]'>{t('Al NFT you can talk to')}</h2>
    <p className='text-[#8F99AC] sm:text-xl text-[12px] font-normal sm:mb-[45px] mb-[15px] xl:leading-[40px] sm:[20px]'>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")}</p>
    <button className='relative gradiunt-border after:rounded-full bg-[#8F99AC] bg-opacity-[15%] rounded-full flex items-center gap-3 px-[20px] py-[10px] sm:text-[32px] mx-auto sm:mx-0 text-base cursor-pointer group transition-all duration-500' onClick={handleClick}>
   {
    click ?     <img src="images/Group 51.png" alt="" />   : <img src='images/Group 51 (1).png' alt=''/>
   }
      <span className='text-white'>{t("Live")}</span></button>
</div>
</div>
  </div>
  </div>
  <div className="div-10 relative"></div>
      </div>
    </>
  )
}

export default Live
