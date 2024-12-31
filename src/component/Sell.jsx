import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

function Sell() {
    const [images] = useState([
        "images/pr1.png",
        "images/pr2.png",
        "images/pr3.png"
      ]);
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
    
        return () => clearInterval(interval);
      }, [images]);
      const { t } = useTranslation();
  return (
    <>
      <div className=" 2xl::py-[110px] sm:py-[80px] py-[21px] relative" >
      <div className="">
 <div className="div-2"></div>
 <div className="div-3"></div>
      </div>
      <div className="lg:custom-container container mx-auto px-[20px] xl:px-0 ">
      <div className="grid grid-cols-12 items-center">
         <div className="lg:col-span-6 col-span-12 mb-[30px] lg:mb-0">
      <h2 style={{ fontFamily: "Urbanist, sans-serif" }} className='uppercase font-bold xl:text-[74px] sm:text-[60px] text-[28px] leading-[28px] gradient-text  sm:mb-[40px] sm:leading-[90px] mb-[20px]'>{t("Create and sell your NFTS")}</h2>
      <ul>
        <li className='sm:mb-[30px] mb-[13px]'>
            <span className='sm:text-[22px] font-semibold sm:leading-[33px] text-white text-[10px] leading-[14px]'>{t("Step-01")}</span>
            <h3 className='sm:text-[28px] font-bold sm:leading-[30px] leading-[15px] sell-text mt-[5px] sm:mb-[10px] mb-[4px] text-[13px]'>{t('Create account and setup your wallet')}</h3>
            <p className='sm:text-base font-normal sm:leading-[30px] text-[#8F99AC] text-[9px] leading-[17px]'>{t('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,')}</p>
        </li>
        <li className='sm:mb-[30px] mb-[13px]'>
            <span className='sm:text-[22px] font-semibold sm:leading-[33px] text-white text-[10px] leading-[14px]'>{t('Step-02')}</span>
            <h3 className='sm:text-[28px] font-bold sm:leading-[30px] leading-[15px] sell-text mt-[5px] sm:mb-[10px] mb-[4px] text-[13px]'>{t("Create your collection")}</h3>
            <p className='sm:text-base font-normal sm:leading-[30px] text-[#8F99AC] text-[9px] leading-[17px]'>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,")}</p>
        </li>
        <li className='sm:mb-[30px] mb-[13px]'>
            <span className='sm:text-[22px] font-semibold sm:leading-[33px] text-white text-[10px] leading-[14px]'>{t("Step-03")}</span>
            <h3 className='sm:text-[28px] font-bold sm:leading-[30px] leading-[15px] sell-text mt-[5px] sm:mb-[10px] mb-[4px] text-[13px]'>{t("Add your NFTS")}</h3>
            <p className='sm:text-base font-normal sm:leading-[30px] text-[#8F99AC] text-[9px] leading-[17px]'>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,")}</p>
        </li>
        <li className='sm:mb-[30px] mb-[13px]'>
            <span className='sm:text-[22px] font-semibold sm:leading-[33px] text-white text-[10px] leading-[14px]'>{t("Step-04")}</span>
            <h3 className='sm:text-[28px] font-bold sm:leading-[30px] leading-[15px] sell-text mt-[5px] sm:mb-[10px] mb-[4px] text-[13px]'>{t("Sell your NFTS")}</h3>
            <p className='sm:text-base font-normal sm:leading-[30px] text-[#8F99AC] text-[9px] leading-[17px]'>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,")}</p>
        </li>
      </ul>
         </div>
         <div className="lg:col-span-6 col-span-12 ">
         <div className='flex justify-center'>
         {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero ${index}`}
          className={`z-[10] image ${index === currentImageIndex ? 'fadeIn' : 'hidden '}`}
        />
      ))}
         </div>
         </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Sell
