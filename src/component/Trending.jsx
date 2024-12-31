import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { useTranslation } from 'react-i18next';

function Trending() {
  const { t } = useTranslation();
    return (
      <>
  
        <div className=" trending pt-[70px]  relative div-8 div-9  sm:pb-[70px] pb-[20px]">
          <div className="px-2 sm:pt-[105px]">
            <div className='relative z-[1] mb-[65px] '>
              <h2 style={{ fontFamily: "Urbanist, sans-serif" }} className=" uppercase gradient-text font-bold sm:text-[74px] text-[28px] sm:leading-[120px] mb-[25px]  text-center leading-[28px]  ">{t("Trending NFTs")}</h2>
              <img src="images/Ellipse 5.png" alt="" className='absolute sm:top-0 sm:left-[33%] -z-[1] w-10 sm:w-[100px] -top-1 left-[20%]' />
            </div>
         
      <OwlCarousel 
             loop
              center
              className='owl-theme'
              items={3}
              autoplay
              autoplayTimeout={2000}
              smartSpeed={450}
              nav={false}
              dots={false}
              responsive={{
                0: {
                  items: 3
                },
                768: {
                  items: 5
                },
                1170: {
                  items: 7
                }
              }}>
    <div class='item'>
    <div className=" relative  after:rounded-full rounded-full  trending-item">
              <img src="images/Group 19 (1).png" alt="" className='rounded-full '  />
              <div className="item-content  text-center z-[10]">
                  <button className='trending-btn sm:text-[14px] text-[7px] leading-[15px] font-semibold text-white 2xl:px-[35px]  px-[18px] sm:py-[10px] py-[3px]  rounded-full sm:mb-[10px] mb-[5px]'>{t("Place Bid")}</button>
                  <h3 className='uppercase sm:text-[14px] text-[7px] text-white leading-[15px] font-normal'>{t("price of belife")}</h3>
              </div>
            </div>  
    </div>
   
    <div class='item'>
    <div className=" relative  after:rounded-full rounded-full  trending-item">
              <img src="images/content.png" alt="" className='rounded-full '  />
              <div className="item-content  text-center z-[10]">
                  <button className='trending-btn sm:text-[14px] text-[7px] leading-[15px] font-semibold text-white 2xl:px-[35px]  px-[18px] sm:py-[10px] py-[3px]  rounded-full sm:mb-[10px] mb-[5px]'>{t("Place Bid")}</button>
                  <h3 className='uppercase sm:text-[14px] text-[7px] text-white leading-[15px] font-normal'>{t("price of belife")}</h3>
              </div>
            </div>  
    </div>
    <div class='item'>
    <div className=" relative  after:rounded-full rounded-full  trending-item">
              <img src="images/Mask group (30).png" alt="" className='rounded-full '  />
              <div className="item-content  text-center z-[10]">
                  <button className='trending-btn sm:text-[14px] text-[7px] leading-[15px] font-semibold text-white 2xl:px-[35px]  px-[18px] sm:py-[10px] py-[3px]  rounded-full sm:mb-[10px] mb-[5px]'>{t("Place Bid")}</button>
                  <h3 className='uppercase sm:text-[14px] text-[7px] text-white leading-[15px] font-normal'>{t('price of belife')}</h3>
              </div>
            </div>  
    </div>
    <div class='item'>
    <div className=" relative  after:rounded-full rounded-full  trending-item">
              <img src="images/Mask group (31).png" alt="" className='rounded-full '  />
              <div className="item-content  text-center z-[10]">
                  <button className='trending-btn sm:text-[14px] text-[7px] leading-[15px] font-semibold text-white 2xl:px-[35px]  px-[18px] sm:py-[10px] py-[3px]  rounded-full sm:mb-[10px] mb-[5px]'>{t('Place Bid')}</button>
                  <h3 className='uppercase sm:text-[14px] text-[7px] text-white leading-[15px] font-normal'>{t('price of belife')}</h3>
              </div>
            </div>  
    </div>
    <div class='item'>
    <div className=" relative  after:rounded-full rounded-full  trending-item">
              <img src="images/Mask group (28).png" alt="" className='rounded-full '  />
              <div className="item-content  text-center z-[10]">
                  <button className='trending-btn sm:text-[14px] text-[7px] leading-[15px] font-semibold text-white 2xl:px-[35px]  px-[18px] sm:py-[10px] py-[3px]  rounded-full sm:mb-[10px] mb-[5px]'>{t('Place Bid')}</button>
                  <h3 className='uppercase sm:text-[14px] text-[7px] text-white leading-[15px] font-normal'>{t('price of belife')}</h3>
              </div>
            </div>  
    </div>
    <div class='item'>
    <div className=" relative  after:rounded-full rounded-full  trending-item">
              <img src="images/Mask group (27).png" alt="" className='rounded-full '  />
              <div className="item-content  text-center z-[10]">
                  <button className='trending-btn sm:text-[14px] text-[7px] leading-[15px] font-semibold text-white 2xl:px-[35px]  px-[18px] sm:py-[10px] py-[3px]  rounded-full sm:mb-[10px] mb-[5px]'>{t('Place Bid')}</button>
                  <h3 className='uppercase sm:text-[14px] text-[7px] text-white leading-[15px] font-normal'>{t('price of belife')}</h3>
              </div>
            </div>  
    </div>
    <div class='item'>
    <div className=" relative  after:rounded-full rounded-full  trending-item">
              <img src="images/Mask group (29).png" alt="" className='rounded-full '  />
              <div className="item-content  text-center z-[10]">
                  <button className='trending-btn sm:text-[14px] text-[7px] leading-[15px] font-semibold text-white 2xl:px-[35px]  px-[18px] sm:py-[10px] py-[3px]  rounded-full sm:mb-[10px] mb-[5px]'>{t('Place Bid')}</button>
                  <h3 className='uppercase sm:text-[14px] text-[7px] text-white leading-[15px] font-normal'>{t('price of belife')}</h3>
              </div>
            </div>  
    </div>
 
</OwlCarousel>
          </div>
        </div>
      </>
    )
  }
  
  export default Trending;
