import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function HeroSection() {
  const [images] = useState([
    "images/104 (1).png",
    "images/hero1.png",
    "images/hero2.png"
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);
  const { t } = useTranslation();
  return (
    <>
  <div className=" pt-[38px] lg:pt-0 xl:pt-[38px] pb-[100px] text-center sm:text-left overflow-hidden relative div-6 div-7 z-[1]">
      <div className="grid grid-cols-12 lg:custom-container container mx-auto px-[10px] xl:px-0 items-center">
        <div className="2xl:col-span-5 lg:col-span-6 col-span-12 mb-8 xl:mb-0">
        <div >
             <h1 className='xl:text-[74px] sm:text-[50px] text-[37px] font-semibold text-white 2xl:leading-[105px]  '>{t("Discover Collect And Sell Rare")}</h1> 
             <h2 className='xl:text-[74px] sm:text-[50px] text-[37px] font-semibold text-white 2xl:leading-[105px] xl:mb-[65px] sm:mb-[50px] mb-[10px]' >
             <div class="">
        <div class="content__container">
                  <ul class="content__container__list">
            <li class="content__container__list__item mb-3 gradient-text-hero">{t("NFTS")} </li>
            <li class="content__container__list__item mb-5 gradient-text-hero">{t("Crypto")} </li>
            <li class="content__container__list__item mb-5 gradient-text-hero">{t('Gaming')} </li>
            <li class="content__container__list__item mb-5 gradient-text-hero">{t('NFTS')} </li>
          </ul>
          </div>
      </div>
             </h2>
  
             <p className='text-[#5F6E8A] font-normal sm:text-xl text-xs sm:leading-10 leading-[22px] sm:mb-[30px] mb-[10px]'>{t("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.")}</p>
          
             <div className="flex items-center sm:justify-between flex-wrap sm:gap-10 gap-5 justify-center" >
             <button className='sm:py-4 py-[8px] xl:px-[39px] lg:px-[30px] px-[25px] font-normal sm:text-[28px] text-[12px] leading-[12px]  text-white after:rounded-full relative gradiunt-border after:border-2 sm:leading-[40px] rounded-full flex justify-center items-center gap-5 btn-1'>
            {t("Explore")}
          </button>
                <div className="flex items-center gap-10">
                <div className=' relative after:absolute after:content-[""] element after:w-[2px] after:h-12 after:top-0 after:-right-5 '>
                  <h3 className='sm:text-2xl text-[17px]  font-medium  leading-6 sm:mb-[5px] mb-[2px] text-white '>{t("45k")}</h3>
                  <span className='sm:text-base text-xs font-normal leading-6 text-white'>{t("Collectibles")}</span>
                </div>
                <div className=' relative after:absolute after:content-[""] element after:w-[2px] after:h-12 after:top-0 after:-right-5 '>
                  <h3 className='sm:text-2xl text-[17px]  font-medium  leading-6 sm:mb-[5px] mb-[2px] text-white  '>{t("36k")}</h3>
                  <span className='sm:text-base text-xs font-normal leading-6 text-white'>{t("Auctions")}</span>
                </div>
                <div className=' '>
                  <h3 className='sm:text-2xl text-[17px]  font-medium  leading-6 sm:mb-[5px] mb-[2px] text-white  '>{t("3k")}</h3>
                  <span className='sm:text-base text-xs font-normal leading-6 text-white'>{t("NFT Artist")}</span>
                </div>
                </div>
             </div> 
        </div>
        </div>
        <div className="2xl:col-span-7 lg:col-span-6 col-span-12">
        {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero ${index}`}
          className={`image  object-scale-down sm:h-[800px] 2xl:w-[800px] ${index === currentImageIndex ? 'fadeIn' : 'hidden '}`}
        />
      ))}
        </div>
      </div>
    </div> 
    </>
  )
}

export default HeroSection
